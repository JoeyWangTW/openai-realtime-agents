from swarm import Swarm, Agent

class AgentSystem:
    def __init__(self):
        self.client = Swarm()
        
        # def transfer_to_agent_b():
        #     return self.agent_b

        def think(message):
            return self.client.run(
                agent=self.agent_b,
                messages=[{"role": "user", "content": message}],
            )
            
        self.agent_a = Agent(
            name="Agent A",
            instructions="You are a helpful agent. if the task requires a lot of thought use the think tool and return that",
            functions=[think],
        )

        self.agent_b = Agent(
            name="Agent B",
            #model="o3-mini",
            instructions="BigBrain",
        )


    def run_conversation(self, message: str) -> str:
        response = self.client.run(
            agent=self.agent_a,
            messages=[{"role": "user", "content": message}],
        )
        
        return response.messages[-1]["content"] 