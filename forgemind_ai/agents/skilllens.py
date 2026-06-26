from google.adk.agents.llm_agent import Agent

from config.models import DEFAULT_MODEL
from prompts.skilllens_prompt import SKILLLENS_PROMPT


skilllens_agent = Agent(
    model=DEFAULT_MODEL,
    name="skilllens",

    description=(
        "Analyzes student skills and identifies "
        "career skill gaps."
    ),

    instruction=SKILLLENS_PROMPT,
)