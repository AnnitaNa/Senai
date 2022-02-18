

// contst declaration (events)

let evento1 = ["a", "b", "c"];
let evento2 = ["teste1", "teste2"];
let evento3 = ["as", "bs", "cs", "ds"];



// function to get value from the html form

function getValueFromForm (d){
    let dados = document.getElementById(`${d}`).value;
    return dados;
} 

//function to get the event by calling the switch function

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


// see if the maximum number of members was reached

function memberLimit(n) {

    if (n >= 5) {
        document.getElementById("member-result").innerHTML = `Não é mais possível cadastrar! <br>Número máximo de participantes atingido nesse evento!`;
        exit;
    }
}

//see if the member is already at the event and if the string is not empty
function validateName (theEvent,name) {

    if (theEvent.includes(`${name}`)) {
        document.getElementById("member-result").innerHTML = ` ${name} já é membro desse evento`;
        exit;
    }

    if (name == "") {
        document.getElementById("member-result").innerHTML ="Por favor, coloque um nome válido";
        exit;
    }
}


//get the age
function getAge () {
    const age_ms = getDate("date-birth");
    const age_year = parseInt(age_ms/(1000*60*60*24*365)); //converts date from ms to years and into an integer

    if (age_year > 18) {
        return
    } else {
        document.getElementById("member-result").innerHTML = "idade não é válida. Mín de 18 anos";
        exit
    }
}

//see all conditions to add a new member to the event
function participante() {
    const event = getValueFromForm ("event");
    const theEvent = whichEvent(event);
    memberLimit (theEvent.length);

    getAge();
   
    let name = getValueFromForm ("member");
    validateName (theEvent,name)
    

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

//   ----  class event? 

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


// -------------------------------------------------------


/**   try to create event using arrays
 
 let list_arr = ["evento1", "evento2", "evento3"]
 
  function criaEvent() {
    var name = getValueFromForm ("criaEvent");
    
    if (name.lenght > 0) {
        
    } else {
        let name = new Array()
    }
 
    
}


 */