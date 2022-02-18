
function getEvent () {
    const event = document.getElementById("event").value;
    alert(event);
}


function getDate(d) {
    const date = new Date(document.getElementById(d).value);
    const today = new Date();
    return (today.getTime() - date.getTime()); //returns time in ms
}

function diffDate() {
    const diff = getDate("date-event");

    if (diff < 0) {
        document.getElementById("date-event-result").innerHTML = "you can upload the event";
    } else {
        document.getElementById("date-event-result").innerHTML = "The time has already passed";
       
    }
}

function getAge () {
    const age_ms = getDate("date-birth");
    const age_year = parseInt(age_ms/(1000*60*60*24*365)); //converts date from ms to years and into an integer

    if (age_year < 18) {
        document.getElementById("date-birth-result").innerHTML = "A pessoa não pode participar por ser menor de idade";
    } else {
        document.getElementById("date-birth-result").innerHTML = "participante apto";
    }
}