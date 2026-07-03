from pathlib import Path
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware

env_path = Path(__file__).resolve().parent.parent / ".env"

print("ENV PATH:", env_path)
print("ENV EXISTS:", env_path.exists())

loaded = load_dotenv(dotenv_path=env_path)

print("DOTENV LOADED:", loaded)
print("GOOGLE_API_KEY:", os.getenv("GOOGLE_API_KEY"))

import uuid
from typing import Any

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
import google.adk.runners as runners
import google.genai.types as genai_types

from forgemind_ai.agent import root_agent

app = FastAPI(title='ForgeMind AI Backend')

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

RUNNER = Runner(
    agent=root_agent,
    app_name='forgemind',
    session_service=InMemorySessionService(),
    auto_create_session=True,
)

Content = runners.types.Content
Part = genai_types.Part


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    response: str
    agent: str
    status: str


def format_content(content: Any) -> str:
    if content is None:
        return ''

    if isinstance(content, str):
        return content.strip()

    if hasattr(content, 'parts'):
        parts = getattr(content, 'parts', None)
        if parts:
            text_parts = []
            for part in parts:
                text = getattr(part, 'text', None)
                if text:
                    text_parts.append(str(text).strip())
            return ' '.join(text_parts).strip()

    return str(content).strip()


@app.post('/api/chat', response_model=ChatResponse)
async def chat(request: ChatRequest):
    message = request.message.strip()
    if not message:
        raise HTTPException(status_code=400, detail='message is required')

    user_content = Content.model_construct(
        parts=[Part.from_text(text=message)],
        role='user',
    )
    session_id = uuid.uuid4().hex

    assistant_texts: list[str] = []

    try:
        async for event in RUNNER.run_async(
            user_id='forgemind-user',
            session_id=session_id,
            new_message=user_content,
        ):
            author = getattr(event, 'author', None)
            if author == 'user':
                continue

            text = format_content(getattr(event, 'message', None))
            if not text:
                text = format_content(getattr(event, 'output', None))

            if text:
                assistant_texts.append(text)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))

    response_text = ' '.join(assistant_texts).strip()
    if not response_text:
        response_text = 'No response was generated.'

    return {
        'response': response_text,
        'agent': root_agent.name,
        'status': 'success',
    }
