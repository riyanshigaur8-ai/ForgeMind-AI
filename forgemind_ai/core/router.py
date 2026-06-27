"""
ForgeMind Router
"""

from forgemind_ai.agents.skilllens import skilllens_agent


class Router:

    def get_agent(self, user_input: str):
        """
        Decide which agent should handle the request.
        """

        # MVP:
        # Every request goes to SkillLens.
        return skilllens_agent