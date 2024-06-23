import { Message } from "discord.js";
import { ExtendedCliente } from "./structs/ExtendClient"
export * from "colors";

const Client = new ExtendedCliente();

Client.start();

export { Client }

Client.on("ready", () => {
    console.log("Bot online!". green)
})

Client.on("messageCreate", (Message) => {
    if (Message.author.id == Client.user?.id) return;


    Message.reply({
        content: `Olá, ${Message.author.displayName} meu pai é o @_thurow, também conhecido como pai da indanidade!`
    })
})