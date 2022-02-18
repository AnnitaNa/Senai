

// contst declaration (events)

let evento1 = ["a", "b", "c"];
let evento2 = ["teste1", "teste2"];
let evento3 = ["as", "bs", "cs", "ds"];


// function to get value from the html form

function getValueFromForm (d){
    let dados = document.getElementById(`${d}`).value;
    return dados;
} 

//function to show names  of memmbers

function getEvent () {
    const event = getValueFromForm ("event");
    const theEvent = whichEvent(event);
    document.getElementById("event-part").innerHTML = theEvent;
    
}


// discover which event was selected
function whichEvent (event) {
    switch (event) {
        case "Evento 1": 
            return evento1;

        case "Evento 2": 
            return evento2;

        case "Evento 3": 
            return evento3;
    }
}


//get the number of participants given an event
function memberLimit(n) {

    if (n >= 5) {
        return true;
    } else {
        return false;
    }
}


//add new members

function participante() {
    const event = getValueFromForm ("event");
    const theEvent = whichEvent(event);
    let n_part = memberLimit (theEvent.length);

    if(n_part)  {
        document.getElementById("member-result").innerHTML = `Não é mais possível cadastrar! <br>Número máximo de participantes atingido no ${event}`;
        exit;
    } 

    let name = getValueFromForm ("member");
    theEvent.push(name);
    document.getElementById("member-result").innerHTML = `${name} foi adicionado a ${event}. <br> Agora há ${theEvent.length} participantes`;
}

// get the difference between a given date and today (in miliseconds)
function getDate(d) {
    const date = new Date(getValueFromForm (d));
    const today = new Date();
    return (today.getTime() - date.getTime()); //returns time in ms
}

// discover if the date is after today or not
function diffDate() {
    const diff = getDate("date-event");

    if (diff < 0) {
        document.getElementById("date-event-result").innerHTML = "Data válida";
    } else {
        document.getElementById("date-event-result").innerHTML = "Data inválida!";
       
    }
}

//discover the age of a person given birth (in ms) and transform it to years
function getAge () {
    const age_ms = getDate("date-birth");
    const age_year = parseInt(age_ms/(1000*60*60*24*365)); //converts date from ms to years and into an integer

    if (age_year < 18) {
        document.getElementById("date-birth-result").innerHTML = "A pessoa não pode participar por ser menor de idade";
    } else {
        document.getElementById("date-birth-result").innerHTML = "participante apto";
    }
}




//   ----  class event? 
/*
class lista_eventos {
    constructor (name) {
        this._name = name;
    }
}


function criaEvent() {
    var name = getValueFromForm ("criaEvent");
    let nuev_evento = new lista_eventos(name);
 
    document.getElementById("cria-event-result").innerHTML = nuev_evento._name;
}

*/

// -------------------------------------------------------


