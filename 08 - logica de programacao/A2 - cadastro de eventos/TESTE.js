// const declaration (events)


class lista_eventos  {
    constructor (evento) {
        this.evento=evento;
        this.participante=[];
        lista_eventos.all.push(evento); //to log all events on the static all
    }
    static all = [];
}

let arr_event = [];

let a = new lista_eventos("teste");
a.participante.push("Amanda","Beatriz", "Catia")
let natal = new lista_eventos("natal")
natal.participante.push("Papai Noel", "Duendes", "Rudolph")
arr_event.push(natal)
arr_event.push(a)
console.log(arr_event)
console.log(lista_eventos.all)

console.log(arr_event[0].participante)