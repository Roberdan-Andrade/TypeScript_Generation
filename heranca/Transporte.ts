export class Transporte{
    //Atributos
    private _capacidade: number;

    //Construtor
	constructor(capacidade: number) {
		this._capacidade = capacidade;
	}

    //Get e Set
	public get capacidade(): number {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}

    //Visualizar
    public visualizar(){
        console.log("******************************");
        console.log("Dados do transporte:");
        console.log("******************************");
        console.log(`Capacidade: ${this._capacidade}`);
    }
}
