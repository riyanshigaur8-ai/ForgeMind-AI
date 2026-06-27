"""
ForgeMind Core Orchestrator
"""

from forgemind_ai.core.router import Router
from forgemind_ai.models.career_dna import CareerDNA


class ForgeMindOrchestrator:

    def __init__(self):
        self.router = Router()
        self.career_dna = CareerDNA()

    def process(self, user_input: str):
        """
        Determine which agent should execute.
        """

        agent = self.router.get_agent(user_input)

        return {
            "agent": agent.name,
            "career_dna": self.career_dna.summary()
        }