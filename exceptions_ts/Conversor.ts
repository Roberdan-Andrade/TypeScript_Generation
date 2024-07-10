try{

const resultado = converte("abc");

console.log(resultado);

} catch (error: any){
    if(error instanceof TypeError){
        console.error("\nVoce digitou um numero, digite uma texto\n")
    } else {
        console.error("\nErro inesperado, contate o administrador do sistema\n");
    }
} finally {
    console.log("\nFim do codigo\n")
}

export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}
