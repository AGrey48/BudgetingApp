document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('date-time').innerText = new Date().toLocaleTimeString();

    document.getElementById('budgetForm').addEventListener('submit', function(e) {
        e.preventDefault() //prevent default form submission

        var formData = new FormData(document.getElementById('budgetForm')); //grabs the data from your form

        fetch('/submit_budget', {
            method: 'POST',
            body: formData
            })
        .then(response => response.json())
        .then(data => {
            console.log("Response data:", data);
            // Additional code to update your page with the response data
            document.getElementById('resultDisplay').innerText = 'Calculated Balance: ' + data.result;
        })
        .catch(error => console.error('Error', error));
        });
    });
