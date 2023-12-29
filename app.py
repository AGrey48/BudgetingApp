from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route('/')
def home():  # put application's code here
    return render_template('home.html')

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
        return jsonify({'result': balance})
    except Exception as e:
        print("Error: ", e)
        return jsonify({'error': str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)
