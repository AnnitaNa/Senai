
class lista_eventos {
    constructor (name) {
        this._name = name;
    }
}


function criaEvent() {
    var name = document.getElementById("cevent").value;
    let nuev_evento = new lista_eventos(name);
 
    document.getElementById("cria-event-result").innerHTML = nuev_evento._name;
}




// -------------------------------------------------------


let participante = ["a", "b", "c"];

function getEvent () {
    const event = document.getElementById("event").value;

    switch (event) {
        case "um": 
            document.getElementById("event-result").innerHTML =`participantes (${participante.length}): ` + participante;
            break;
        case "dois":
            alert("dois, 1, 2, 3");
            break;
        case "três":
            alert("três, 1, 2 e 3");
            break;
    }
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