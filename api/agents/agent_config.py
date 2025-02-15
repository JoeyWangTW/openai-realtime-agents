from swarm import Swarm, Agent

class AgentSystem:
    def __init__(self):
        self.message_queue = []
        self.client = Swarm()
        
        # def transfer_to_agent_b():
        #     return self.agent_b

        def think(message):
            response_message = self.client.run(
                agent=self.agent_b,
                messages=[{"role": "user", "content": message}],
            )
            self.message_queue.append(response_message)
            
        self.agent_a = Agent(
            name="Agent A",
            instructions="You are a helpful agent. if the task requires a lot of thought use the think tool",
            functions=[think],
        )

        self.agent_b = Agent(
            name="Agent B",
            #model="o3-mini",
            instructions="BigBrain",
        )


    def run_conversation(self, message: str) -> str:
        if len(self.message_queue) > 0:
            return "Here's a response to an earlier question" + self.message_queue.pop().messages[-1]["content"] 

        response = self.client.run(
            agent=self.agent_a,
            messages=[{"role": "user", "content": message}],
        )
        
        print(response)
        return response.messages[-1]["content"] 