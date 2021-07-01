import EventEmiter from "events";

const myEmitter = new EventEmiter();
const event = "user:click";
const otherEvent = "user:start";

myEmitter.on(event, (nome) => {
    console.log(`botão foi clicado.${nome}`)
})

myEmitter.on(otherEvent, (nome) => {
    console.log(`outro evento disparado: ${nome}`)
})

setInterval(() => {
    myEmitter.emit(event, "usuario bryan");
    myEmitter.emit(otherEvent, "usuário lan");
},1400);













;;ZR'