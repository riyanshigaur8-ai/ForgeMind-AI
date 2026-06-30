"""
SprintPlanner Agent
"""

from google.adk.agents.llm_agent import Agent

from forgemind_ai.config.models import DEFAULT_MODEL
from forgemind_ai.prompts.sprintplanner_prompt import (
    SPRINTPLANNER_PROMPT,
)


sprintplanner_agent = Agent(
    model=DEFAULT_MODEL,

    name="sprintplanner",

    description=(
        "Specialist for creating weekly implementation "
        "plans and project execution roadmaps."
    ),

    instruction=SPRINTPLANNER_PROMPT,
)


class SprintPlannerService:
    """
    Business logic wrapper.
    """

    def __init__(self):
        self.agent = sprintplanner_agent

    def get_agent(self):
        return self.agent