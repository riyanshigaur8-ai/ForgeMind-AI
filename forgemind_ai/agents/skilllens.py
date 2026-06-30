"""
SkillLens Agent

This module contains the SkillLens ADK agent and
its business logic wrapper.
"""

from google.adk.agents.llm_agent import Agent

from forgemind_ai.config.models import DEFAULT_MODEL
from forgemind_ai.prompts.skilllens_prompt import SKILLLENS_PROMPT


# ----------------------------------------------------
# ADK Agent
# ----------------------------------------------------

skilllens_agent = Agent(
    model=DEFAULT_MODEL,
    name="skilllens",
    description=(
         "Specialist for analyzing student skills, identifying "
    "skill gaps, recommending technologies to learn, "
    "career readiness analysis, internship preparation, "
    "and personalized learning guidance."
        
    ),
    instruction=SKILLLENS_PROMPT,
)


# ----------------------------------------------------
# Business Logic Layer
# ----------------------------------------------------

class SkillLensService:
    """
    Business logic wrapper around the SkillLens ADK agent.
    Future responsibilities:
    - Read CareerDNA
    - Prepare prompts
    - Call Gemini
    - Update CareerDNA
    - Return AgentResult
    """

    def __init__(self):
        self.agent = skilllens_agent

    def get_agent(self):
        """
        Return the underlying ADK agent.
        """
        return self.agent