"""
Agent Result Model

Defines the standard response
returned by every ForgeMind AI agent.
"""

from dataclasses import dataclass
from typing import Optional

from forgemind_ai.models.career_dna import CareerDNA


@dataclass
class AgentResult:

    success: bool

    agent_name: str

    message: str

    career_dna: CareerDNA

    next_agent: Optional[str] = None