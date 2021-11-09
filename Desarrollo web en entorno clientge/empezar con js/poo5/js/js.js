class Fecha{
    constructor(dia,mes,año){
    this.dia= dia;
    this.mes= mes;
    this.año= año;
}

static metodo(){
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var ano = fecha.getFullYear();

    let fechas = new Fecha(dia,mes,ano);
console.log(fechas)

}
toString(){
    le
}
}