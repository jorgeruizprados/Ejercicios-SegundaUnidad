class Animal{
    constructor(especie, habitat,edad){
    this.especie=especie;
    this.habitat=habitat;
    this.edad= edad;
    }

 getEspecie (){
    return  this.especie
}
getHabitat(){
    return this.habitat 
}
getEdad(){
    return this.edad;
}
 
}
class AnimalDomenstico extends Animal{
    constructor(especie, habitat, edad, nombre, identificador, vacunado) {
        super(especie, habitat, edad)
        this.nombre= nombre;
        this.vacunado= vacunado
        this.identificador= identificador
        
    }
     
    getNombre(){
        return this.nombre

    }
    getVacunado(){
        return this.vacunado
    }
    getIdentificador(){
        return this.identificador
    }
    valoress(){
        let array = new Array(this.peligroExtincion,this.vacunado,this.nombre);
        for(i=0;i<array.length;i++){

        }
    }
}
let AnimalDomenstico1 = new Object();
AnimalDomenstico1.vacunado= true;

class AnimalSalvaje extends Animal{
    constructor(especie,habitat,edad,cautivo,peligroExtincion) {
        super(especie,habitat,edad)
        this.cautivo=cautivo;
        this.peligroExtincion= peligroExtincion;
    }
    getCautivo(){
        return this.cautivo;
    }
    getPeligroExtincion()
    {
        return this.peligroExtincion
    }

    valores(){
let arrayy = new Array[this.cautivo,this.peligroExtincion]
    }
}
let AnimalSalvaje1 = new Object();
AnimalSalvaje1.cautivo= true;
AnimalSalvaje1.peligroExtincion= false;
