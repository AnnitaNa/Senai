



// function to get value from the html form

function getValueFromForm (d){
    let dados = document.getElementById(`${d}`).value;
    return dados;
} 



function getMembers () {
    const event = getValueFromForm ("event");
    let index = lista_eventos.all.indexOf(event);
    let members = arr_event[index].participante;
    return members
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
    let member = getMembers ();

    memberLimit (member.length);
    getAge();
   
    let name = getValueFromForm ("member");
    if (validateEl (member,name)) {
        document.getElementById("member-result").innerHTML = ` ${name} já é membro desse evento ou nome é inválido`;
        exit;
    }
    

    member.push(name);
    document.getElementById("member-result").innerHTML = `${name} foi adicionado ao evento. <br> Agora há ${member.length} participantes`;
    
}

function verParticipantes() {
    let participantes = getMembers();
    document.getElementById("total-members").innerHTML = `participantes: ${participantes}`
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


//------------------------------------- NOVO EVENTO

//classe
class lista_eventos  {
    constructor (evento) {
        this.evento=evento;
        this.participante=[];
        lista_eventos.all.push(evento); //to log all events on the static all
    }
    static all = [];
}


let arr_event = [];

//classes padrão (exemplos)


let Carnaval = new lista_eventos("Carnaval");
Carnaval.participante.push("Amanda","Beatriz", "Catia")


arr_event.push(Carnaval);

function criaEvent() {

    diffDate();
    var newEvent = getValueFromForm ("criaEvent");

    if (validateEl(lista_eventos.all,newEvent)) {
        document.getElementById("cria-event-result").innerHTML = "Esse evento já existe ou nome é inválido";
    } else {
        var a = new lista_eventos(newEvent);
        arr_event.push(a);
       
        // includes the element in the list
        var option = document.createElement("option");
        option.text = `${newEvent}`;
        option.value=`${newEvent}`;
        document.getElementById("event").add(option);
        document.getElementById("cria-event-result").innerHTML = `Evento "${newEvent}" incluido. Todos os eventos: ${lista_eventos.all}`
    }
}

