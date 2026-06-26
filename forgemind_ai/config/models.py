"""
Centralized AI model configuration.

Every agent imports model settings from here.
This makes it easy to switch models without
changing every agent.
"""

# Primary LLM
DEFAULT_MODEL = "gemini-2.5-flash"

# Future models
FAST_MODEL = "gemini-2.5-flash"
REASONING_MODEL = "gemini-2.5-pro"

# Generation settings
TEMPERATURE = 0.3
MAX_OUTPUT_TOKENS = 2048