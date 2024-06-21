interface Command {
    name: string,
    description: string,
    run: (args: string) => any
}

const command: Command = {
    name: "teste",
    description: "teste2",
    run(args){
        
    }
}