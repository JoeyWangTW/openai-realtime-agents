from flask import Flask, request, jsonify
from agents.agent_config import AgentSystem

app = Flask(__name__)
agent_system = AgentSystem()

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        message = data.get('message')
        
        if not message:
            return jsonify({'error': 'Message is required'}), 400

        response = agent_system.run_conversation(message)
        return jsonify({'response': response})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000) 