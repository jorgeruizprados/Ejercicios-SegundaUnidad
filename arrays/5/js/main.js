function cubo(){
    alert("jo");
    let numero = Number(prompt("introduce el numero a elevar al cubo"));

    let resultado=(numero*numero*numero);
    alert(resultado);

    let resultado2= function(numero){
        return numero*nuemro*numero
    }
    console.log("resultado2"+resultado2(numero))

    
    resultado3 = (numero) => {return nuemro*nuemro*numero};
    console.log("resultado3" + resultado3);

    resultado4 = (numero) => {return nuemro*nuemro*numero};
    console.log("resultado4" + resultado4);


}