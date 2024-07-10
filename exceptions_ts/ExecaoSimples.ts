export class ExecaoSimples extends Error{

    constructor(message: string){
        super();
        this.name = "Exeção Simples";
        this.message = message;
    }
}
