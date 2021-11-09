let nodo = document.getElementById('apellido1')
let nodo2= document.getElementsByTagName('p');
let nodo3 = document.querySelector ('#seleccionTercera p');
let nodo4 = document.getElementsByTagName('input')
let nodo5 = document.querySelector;
let nodo6  = document.getElementsByClassName('par')


let elemento= document.getElementById("seccionPrimera").firstElementChild();
let elemento1 = document.getElementById("seccionPrimera").lastElementChild();
let elementoo = document.getElementsByTagName("")
let elemento2 = (((document.getElementById("seccionLista")).lastElementChild).lastElementChild);
let elemento3 = (document.getElementById("nombre")).previousSibling;

let elementos11 = ((document.getElementsByName("sexo"))[1].value;

let elementos22= (((document.querySelector("input[type='radio']:checked"))).value

let j = document.getElementById("boton1").addEventListener("click", function (event){




    
    
})
let h2 = document.createElement('h2');
h2 = document.createTextNode("Lorem Ipsum de nuevo")
 
let idTimeout=setTimeout(() => {
    alert('Tiemout que se ejecuta, una vez, pasados 3segundos');
    }, 3000);
    let i=1;
    let idInterval=setInterval(() => {
    alert('Interval cada 3 seg. Ejecución nº: '+ i++);
    if (i==5) {
    clearInterval(idInterval);
    alert('La función se ha ejecutado 5 veces');
    }
    }, 3000);

