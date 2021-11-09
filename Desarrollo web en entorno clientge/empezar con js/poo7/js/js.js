function notass(){
    let notasComas = prompt("notas separadas por comas")
    let nota = notasComas.split(",");
    console.log(nota);
   let media = nota.reduce((valorAnt, valorAct)=> (valorAct+valorAnt)/nota.length)
    console.log(media)
    console.log(media.substring(0,2))
}

    let numero = parseInt(prompt("introduce un num"));
 if(numero %1!=0){
    alert("ma");

    }else{
        
        console.log(Math.pow(numero,3));
    }




    let numero = prompt("introduce numero dni")
    let letra = prompt("introduce la letra")
    letra = letra.toUpperCase();
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if(numero < 0 || numero > 99999999) {
        alert("El número proporcionado no es válido");
      }
      else {
        var letraCalculada = letras[numero % 23];
        if(letraCalculada != letra) {
          alert("La letra o el número proporcionados no son correctos");
        }
        else {
          alert("El número de DNI y su letra son correctos");
        }
      }


 var minu= prompt("introduce un texto")
 var minu = minu.toLocaleLowerCase()
console.log(minu)

function pares(minu){
  const fil = minu.filter((num, index)=>index%2==0)
  return fil
}
  /*     for(i=0;i%2==0;i++){
          var par 
      } */


  