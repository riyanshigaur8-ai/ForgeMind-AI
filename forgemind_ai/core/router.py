"""
ForgeMind Router

Responsible for deciding which agent
should handle a user's request.
"""

from forgemind_ai.agents.skilllens import SkillLensService


class Router:
    """
    Routes user requests to the appropriate AI agent.
    """

    def __init__(self):
        self.skilllens = SkillLensService()

    def get_agent(self, user_input: str):
        """
        Return the appropriate agent.

        MVP:
        Every request is handled by SkillLens.
        """

        return self.skilllens.get_agent()