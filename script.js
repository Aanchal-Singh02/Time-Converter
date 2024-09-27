document.getElementById("time-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertTime();  // Call the convert function when Enter is pressed
    }
});

function convertTime() {
    const timeInput = document.getElementById('time-input').value.trim();
    if (timeInput === "") {
        document.getElementById('result').innerText = "Enter Time";  // Display message for empty input
        return;  // Exit the function if no input
    }
    let time = timeInput;
    let [timePart, period] = time.split(' ') || [time, ""];
    let [hours, minutes] = timePart.split(':');

    hours = parseInt(hours);

    period = period || "";

    let result;

    //Convert from 24-hour to 12-hour clock
    if(period.trim() == "") {
        if (hours == 0) {
            period = "AM";
            hours = 12;
        }
        else if (hours == 12) {
            period = "PM";
        }
        else if (hours > 12) {
            hours -= 12;
            period = 'PM';
        }
        else {
            period = "AM";
        }
        if (minutes == 0) {
            minutes = "00";
        }
        result = `12-hour formate: ${hours}:${minutes} ${period}`;
    }
    else {
        //Convert from 12-hour clock to 24-hour clock
        if (period.toUpperCase() == "AM") {
            if (hours == 12) {
                hours = "00";
            }
        }
        else if (period.toUpperCase() == "PM") {
            if (hours < 12) {
                hours += 12;
            }
        }
        result = `24-hour formate: ${hours}:${minutes}`;
    }
    document.getElementById('result').innerText = result;
    document.getElementById('time-input').value = "";
}