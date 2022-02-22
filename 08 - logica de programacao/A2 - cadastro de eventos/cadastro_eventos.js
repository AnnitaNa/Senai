//******************************************************************************************************
//**********************************  CADASTRO DE EVENTOS (FORMULÁRIO) *********************************
//******************************************************************************************************
//************************ by: Tatiane A. Nicchetti | tanicchetti@hotmail.com **************************
//******************************************************************************************************
//                                                                                           22/02/2022
//
// criar formulário para cadastro de eventos. 
//Requisitos: Ver participante por evento. Participantes > 18 anos e com limite máximo de pessoas



// ----------------------  FUNÇÕES GERAIS ------------------------

//retorna valor do formulário
function getValueFromForm (d){
    let valor = document.getElementById(`${d}`).value;
    return valor;
} 

//vê se elemento está contido em uma array ou se ele é vazio
function validateEl(arr, el) {
    if(arr.includes(`${el}`) || el=="") {
        return true;
    } else {
        return false;
    }
}

// ----------------------- NOVO EVENTO ----------------------------


//        --------    1º) restrição da data     -------

// diferença entre uma data e hoje (em ms)
function getDate(d) {
    const date = new Date(getValueFromForm (d));
    const today = new Date();
    return (today.getTime() - date.getTime()); //returns time in ms
}

// descobre se uma data é posterior a hoje
function diffDate() {
    const diff = getDate("date-event");

    if (diff < 0) {
        return;
    } else {
        document.getElementById("cria-event-result").innerHTML ="Data inválida!";
       exit;
    }
}


//         --------   2º) adicionar nome do novo elemento   ----------

// fabrica de classes para armazenar eventos
class lista_eventos  {
    constructor (evento) {
        this.evento=evento;
        this.participante=[];
        lista_eventos.all.push(evento); 
    }
    static all = []; //salva todos os eventos com essa classe
}

//classes padrão (exemplos)
let Carnaval = new lista_eventos("Carnaval");
Carnaval.participante.push("Amanda","Beatriz", "Catia")

//array que salva todos os objetos da classe lista_eventos
let arr_event = [];
arr_event.push(Carnaval);


// função para criar um evento
function criaEvent() {

    diffDate();
    var newEvent = getValueFromForm ("criaEvent");

    if (validateEl(lista_eventos.all,newEvent)) {
        document.getElementById("cria-event-result").innerHTML = "Esse evento já existe ou nome é inválido";
    } else {
        var a = new lista_eventos(newEvent);
        arr_event.push(a);  //adiciona objeto a arr de eventos
       
        // inclui o novo elemento na lista de "escolha seu evento"
        var option = document.createElement("option");
        option.text = `${newEvent}`;
        option.value=`${newEvent}`;
        document.getElementById("event").add(option);
        document.getElementById("cria-event-result").innerHTML = `Evento "${newEvent}" incluido`
    }
}





// ----------------------  PARTICIPANTES ------------------


//mostrar os aprticipantes de certo evento
function verParticipantes() {
    let participantes = getMembers();
    document.getElementById("total-members").innerHTML = `participantes(${participantes.length}): ${participantes} `
}


//vê se todas as condições foram atingidas para add o participantes
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

//localiza os participantes do objeto evento
//para isso, acha o index do objeto correspondente na arr com todos os objetos
function getMembers () {
    const event = getValueFromForm ("event");
    let index = lista_eventos.all.indexOf(event);
    let members = arr_event[index].participante;
    return members
    } 

// confere se nº max de participantes foi atingido
function memberLimit(n) {

    if (n >= 5) {
        document.getElementById("member-result").innerHTML = `Não é mais possível cadastrar! <br>Número máximo de participantes atingido nesse evento!`;
        exit;
    }
}


//Vê a idade do participante e se ele é >18 anos
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












