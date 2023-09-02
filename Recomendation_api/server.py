from flask import Flask, request, jsonify

# Create a Flask application
app = Flask(__name__)

# Define a route and a view function to receive JSON data
@app.route('/json_endpoint', methods=['POST'])
def receive_json():
    try:
        # Get the JSON data from the request
        data = request.body()
        
        # Process the JSON data (e.g., print it)
        print(data)

        # You can also send a JSON response
        response_data = {"message": "JSON received successfully"}
        return jsonify(response_data), 200  # Respond with a JSON object and a 200 status code
    except Exception as e:
        return jsonify({"error": str(e)}), 400  # Respond with an error message and a 400 status code

# Run the Flask application
if __name__ == '__main__':
    app.run()
