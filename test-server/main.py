from flask import Flask, request

app = Flask(__name__)

@app.route("/login", methods=["POST"])
def hello_world():
    print(request.form)
    return "<p>Hi</p>"
