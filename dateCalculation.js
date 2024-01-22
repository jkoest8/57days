
function calculateDate() {
    var selectedDate = new Date(document.getElementById("selectedDate").value);
    if (!isNaN(selectedDate.getTime())) {
        // Subtract 57 days
        selectedDate.setDate(selectedDate.getDate() - 57);

        var date57DaysAgo = selectedDate.toDateString(); // Formatting to a readable string
        document.getElementById("date57DaysAgo").innerHTML = date57DaysAgo;
    } else {
        document.getElementById("date57DaysAgo").innerHTML = "Please select a valid date.";
    }
}
