import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"

@app.route('/data', methods=['POST'])
def data(req):
    return jsonify(req.body)



def main():
    app.run()

if __name__ == '__main__': main()