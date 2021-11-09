const button = document.createElement('button'); 
button.type = 'button'; 
button.innerText = 'Haz Click'; 
document.body.appendChild(button); 
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

// var boton1 =document.getElementById('boton')
// boton1.addEventListener(click,)
// function cambio()


function boton(){
let primer = setInterval(()=>{
    alert('holaa');
    },3000);
    let idInterval=setInterval(() => {
    alert('Interval cada 3 seg. Ejecución nº: '+ i++);
    if (i==2) {
    clearInterval(idInterval);
    alert('La función se ha ejecutado 2veces');
    }
    }, 7000);
}