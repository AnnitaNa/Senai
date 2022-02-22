

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
    if (validateEl (theEvent,name)) {
        document.getElementById("member-result").innerHTML = ` ${name} já é membro desse evento ou nome é inválido`;
        exit;
    }
    

    theEvent.push(name);
    document.getElementById("member-result").innerHTML = `${name} foi adicionado a ${event}. <br> Agora há ${theEvent.length} participantes`;
}



//vê se el está contido em arr ou se el é vazio
function validateEl(arr, el) {
    if(arr.includes(`${el}`) || el=="") {
        return true;
    } else {
        return false;
    }
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
        return;
    } else {
        document.getElementById("cria-event-result").innerHTML ="Data inválida!";
       exit;
    }
}

let list_events = ["a", "b", "c"];

function criaEvent() {
     
    diffDate();
    
    var newEvent = getValueFromForm ("criaEvent");
    if (validateEl(list_events,newEvent)) {
        document.getElementById("cria-event-result").innerHTML = "Esse evento já existe ou nome é inválido";
    }   else {
        list_events.push(`${newEvent}`)
        var `${newEvent}` = new Array();
        document.getElementById("cria-event-result").innerHTML = `Evento "${newEvent}" incluido. Todos os eventos: ${list_events}`;
       
        // includes the element in the list
        var option = document.createElement("option");
        option.text = `${newEvent}`;
        option.value=`${newEvent}`;
        document.getElementById("event").add(option);
}
}

