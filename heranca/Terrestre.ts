import { Transporte } from "./Transporte";

export class Terrestre extends Transporte{
    //Atributos
    private _numeroRodas: number;
    private _Velocidade: number;

    //Construtor
	constructor(capacidade: number, numeroRodas: number, Velocidade: number) {
        super(capacidade);
		this._numeroRodas = numeroRodas;
		this._Velocidade = Velocidade;
	}

    //Get e Set
	public get numeroRodas(): number {
		return this._numeroRodas;
	}

	public get Velocidade(): number {
		return this._Velocidade;
	}

	public set numeroRodas(value: number) {
		this._numeroRodas = value;
	}

	public set Velocidade(value: number) {
		this._Velocidade = value;
	}

    //Visualizar
    public visualizar(){
        super.visualizar();
        console.log(`Numero de rodas: ${this._numeroRodas}`);
        console.log(`Velocidade: ${this._Velocidade}`);
    }    
}
