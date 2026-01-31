from flask import Flask, request, jsonify
import openai

app = Flask(__name__)
openai.api_key = "YOUR_OPENAI_KEY"

@app.route("/ai", methods=["POST"])
def ai():
    user_query = request.json["query"]

    # Example AI logic
    prompt = f"Convert this request into coordinates: {user_query}"

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )

    # Fake example response
    return jsonify({
        "lat": 40.7128,
        "lng": -74.0060
    })

app.run(debug=True)
