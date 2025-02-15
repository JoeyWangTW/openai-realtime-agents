from swarm import Swarm, Agent

class AgentSystem:
    def __init__(self):
        self.client = Swarm()
        
        def transfer_to_agent_b():
            return self.agent_b

        self.agent_a = Agent(
            name="Agent A",
            instructions="You are a helpful agent.",
            functions=[transfer_to_agent_b],
        )

        self.agent_b = Agent(
            name="Agent B",
            model="o3-mini",
            instructions="Only speak in Haikus.",
        )

        self.current_agent = self.agent_a

    def run_conversation(self, message: str) -> str:
        response = self.client.run(
            agent=self.current_agent,
            messages=[{"role": "user", "content": message}],
        )
        
        # Check if we need to transfer to agent B
        if self.current_agent == self.agent_a and "talk to agent b" in message.lower():
            self.current_agent = self.agent_b
        
        return response.messages[-1]["content"] 