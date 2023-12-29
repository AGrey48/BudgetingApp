//display time
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('date-time').innerText = new Date().toLocaleTimeString();
// update data without making a new web page
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

function budgetFunct(evt, budget_tab){
    var i, tabContent, tabLinks;
    //get all elements with class="tabContent" and hide them
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    //Get all elements with class="tablinks" and remove the class "active"
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(budget_tab).style.display = "block";
    evt.currentTarget.className += "active";
    document.getElementById("defaultOpen").click();
}

document.addEventListener("DOMContentLoaded", budgetFunct);

document.getElementById('budgetForm').addEventListener('submit', function(e) {
    e.preventDefault(); <!--Prevents default form submission-->

    var formData = new FormData(this); <!-- Grabs the data from your form -->

    <!-- AJAX request to your Flask route -->
    fetch('/submit_budget', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json()) // assuming the response is JSON>
.
    then(data => {
        <!-- Display the result -->
        document.getElementById('result').innerHTML = 'Result' + data.result;

    })
        .catch(error => console.error('Error', error));
});
