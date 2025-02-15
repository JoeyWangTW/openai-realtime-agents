# Swarm Agent API Demo

A simple Flask API demonstrating OpenAI's Swarm library with multiple agents.

## Installation

Requires Python 3.10+

1. Create and activate virtual environment:

```bash
python -m venv venv
source venv/bin/activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Run the API:

```bash
python app.py
```

Server runs at `http://localhost:5000`

## API Usage

The API has a single endpoint `/chat` that lets you interact with two agents:

- Agent A: A general helpful agent
- Agent B: An agent that speaks in Haikus (using o3-mini model)

### Example Requests

Using curl:

1. Chat with Agent A:

```bash
curl -X POST http://localhost:5000/chat \
-H "Content-Type: application/json" \
-d '{"message": "Hello, how can you help me?"}'
```

2. Chat with Agent B:

```bash
curl -X POST http://localhost:5000/chat \
-H "Content-Type: application/json" \
-d '{"message": "I want to talk to agent B"}'
```
