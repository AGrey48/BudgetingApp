from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route('/')
def home():  # put application's code here
    return render_template('home.html')


@app.route('/process_data', methods=['POST'])
def process_data():
    """
    Receive data from AJAX request.
    Allows for website to update parts of it without having to reload the entire webpage
    :return:jsonify
    """
    data = request.get_json()  # dictionary, JSON results come back as a dictionary
    income = data['income']
    expense = data['expense']
    result = income - expense

    # jsonify converts the python dictionary into a JSON object.
    # The JSON object can be sent as a response to an HTTP request.
    return jsonify({'result': 'test'})


@app.route('/submit_budget', methods=['POST'])
def submit_budget():
    try:
        print("request received:", request.form)
        income = request.form['income']
        expense = request.form['expense']
        print("Income:", income, "Expense", expense)

        print("Received data:", request.form)
        balance = float(income) - float(expense)
        print("Sending data:", balance)
        return jsonify({'result': 'Success'})
    except Exception as e:
        print("Error: ", e)
        return jsonify({'error': str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)
