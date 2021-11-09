let arrayMedia=[1,1.2,2,2.5,3,3.5,4,5,6,7,7.5,8,9,9.5,10]

let media = arrayMedia.reduce((valorAnt,valorAct) => (valorAct+valorAnt /15));
console.log(media);

let arraylista=[1,2,3,4,5,6,7,8,9,10,11,12]
let suma = arraylista.reduce((valorAnt,valorAct) => {
    if(valorAnt<valorAct){
        return valorAct ;
    }else{
        return valorAnt;
    }
}


//let sumaiva = arraylista.reduce((valorAnt,valorAct) => (valorAct)+(valorAnt));

//console.log(suma);