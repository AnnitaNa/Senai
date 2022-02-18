
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

//function participante {}

// -------------------------------------------------------





let evento1 = ["a", "b", "c"];
let evento2 = ["teste1", "teste2"];
let evento3 = ["as", "bs", "cs", "ds"];
evento1.push("ha");

function getValueFromForm (d){
    let dados = document.getElementById(`${d}`).value;
    return dados;
} 

function getEvent () {
    const event = getValueFromForm ("event");
   
    switch (event) {
        case "um": 
            document.getElementById("event-part").innerHTML = evento1;
            getParticipanteNum (evento1.length);
            break;

        case "dois":
            document.getElementById("event-part").innerHTML = evento2;
            getParticipanteNum (evento2.length);
            break;

        case "três":
            document.getElementById("event-part").innerHTML = evento3;
            getParticipanteNum (evento3.length);
            break;
    }
}

function getParticipanteNum(n_part) {

    if (n_part >= 100) {
        document.getElementById("n-part").innerHTML = "número máximo de participantes atingido";
    } else {
        document.getElementById("n-part").innerHTML =`nº de participantes: ${n_part}. Ainda é posível cadastrar `
    }
}


function getDate(d) {
    const date = new Date(getValueFromForm (d));
    const today = new Date();
    return (today.getTime() - date.getTime()); //returns time in ms
}

function diffDate() {
    const diff = getDate("date-event");

    if (diff < 0) {
        document.getElementById("date-event-result").innerHTML = "Data válida";
    } else {
        document.getElementById("date-event-result").innerHTML = "Data inválida!";
       
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