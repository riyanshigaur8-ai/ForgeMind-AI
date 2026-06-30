"""
ProjectScout Agent

Recommends portfolio projects based on
the student's career profile.
"""

from google.adk.agents.llm_agent import Agent

from forgemind_ai.config.models import DEFAULT_MODEL
from forgemind_ai.prompts.projectscout_prompt import PROJECTSCOUT_PROMPT


projectscout_agent = Agent(
    model=DEFAULT_MODEL,
    name="projectscout",
    description=(
        "Specialist for recommending portfolio projects, "
    "GitHub projects, software ideas, AI applications, "
    "technology stacks, and practical implementation ideas."
    ),
    instruction=PROJECTSCOUT_PROMPT,
)


class ProjectScoutService:
    """
    Business logic wrapper for ProjectScout.
    """

    def __init__(self):
        self.agent = projectscout_agent

    def get_agent(self):
        return self.agent