from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    move = data.get("move", "Unknown")
    print(f"Received move: {move}")

    # Write the move to a text file
    with open("move.txt", "w") as file:
        file.write(move)
    
    # Return a response to the front-end (optional)
    return "Move written to file", 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
