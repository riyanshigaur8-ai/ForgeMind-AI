"""
Career DNA Model

This module defines the shared career profile
used by every ForgeMind AI agent.
"""

from dataclasses import dataclass, field
from typing import List, Optional


@dataclass
class CareerDNA:

    # Basic Profile
    name: str = ""
    education: str = ""
    career_goal: str = ""

    # Skill Information
    current_level: str = "Beginner"
    skills: List[str] = field(default_factory=list)
    missing_skills: List[str] = field(default_factory=list)

    # Projects
    current_project: Optional[str] = None
    recommended_projects: List[str] = field(default_factory=list)

    # Scores
    career_readiness: int = 0
    portfolio_score: int = 0
    github_score: int = 0

    def summary(self):
        """
        Return a compact summary of the user's career state.
        """
        return {
            "career_goal": self.career_goal,
            "skills": self.skills,
            "missing_skills": self.missing_skills,
            "career_readiness": self.career_readiness,
        }