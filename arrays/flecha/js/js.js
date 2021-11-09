function num(){
    let numero= Number(prompt("que numero quieres introducir"))
    let numero2= Number(prompt("que numero quieres introducir"))

    
    let resultado = (numero +numero2);
    alert(resultado);
}

function edad(){
    let edad = Number(prompt("introduce tu edad"));

    if(edad<18){
        alert("eres MENOR")
    }else if (edad>18){
        alert("eres Mayor")

    }
}

function preguntar(pregunta, si, no) {
    if (confirm(pregunta)) si();
    else no();
    }
   
    preguntar(
    "¿Estás de acuerdo?",
    function() { alert("El proceso continúa"); },
    function() { alert("Has cancelado el proceso"); }
    );
    

let confirmar = confirm("PREGUNTA")
let preguntar = confirm =>{
    if(confirmar){

    }else{

    }
    
}








