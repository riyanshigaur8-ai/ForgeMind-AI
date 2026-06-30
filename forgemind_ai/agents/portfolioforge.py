"""
PortfolioForge Agent
"""

from google.adk.agents.llm_agent import Agent

from forgemind_ai.config.models import DEFAULT_MODEL
from forgemind_ai.prompts.portfolioforge_prompt import (
    PORTFOLIOFORGE_PROMPT,
)


portfolioforge_agent = Agent(
    model=DEFAULT_MODEL,

    name="portfolioforge",

    description=(
        "Specialist for reviewing resumes, GitHub profiles, "
        "LinkedIn profiles, portfolio websites, and project presentations."
    ),

    instruction=PORTFOLIOFORGE_PROMPT,
)


class PortfolioForgeService:

    def __init__(self):
        self.agent = portfolioforge_agent

    def get_agent(self):
        return self.agent