"""
ForgeMind Core Orchestrator
"""

from forgemind_ai.core.context_manager import ContextManager
from forgemind_ai.core.router import Router


class ForgeMindOrchestrator:
    """
    Coordinates communication between
    the user and AI agents.
    """

    def __init__(self):
        self.context = ContextManager()
        self.router = Router()

    def process(self, user_input: str):
        """
        Process a user request.
        """

        career = self.context.load()

        agent = self.router.get_agent(user_input)

        return {
            "agent": agent.name,
            "career": career.summary()
        }