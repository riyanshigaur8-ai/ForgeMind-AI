"""
ForgeMind Context Manager

Responsible for managing
CareerDNA throughout the system.
"""

from forgemind_ai.models.career_dna import CareerDNA


class ContextManager:

    def __init__(self):

        self.career_dna = CareerDNA()

    def load(self):

        """
        Return current CareerDNA.
        """

        return self.career_dna

    def save(self, career_dna):

        """
        Update CareerDNA.
        """

        self.career_dna = career_dna