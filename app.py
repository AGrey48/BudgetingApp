from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def home():  # put application's code here
    return render_template('home.html')

@app.route('/submit_budget', methods = ['POST'])
def submit_budget():
    income = request.form['income']
    expense = request.form['expense']
    #process budget data here
    return render_template('results.html', income=income, expense=expense)


if __name__ == '__main__':
    app.run(debug=True)
