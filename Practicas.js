//clouser (suma, resta, multi)
/*clouser: forma de asignar una variable definida inamovible con una function de autollamado dentro de otra,se guarda de forma temporal en la memory*/
function suma(a){
       return function (b){
       return(a + b);
     }
}
var funcionsuma= suma(3);

console.log (funcionsuma(2)); 
/*-----------------------------------*/
function resta(a){
    return function (b){
    return(a - b);
  }
}
var funcionresta= resta(3);
console.log (funcionresta(2)); 
/*-----------------------------------*/
function multi(a){
    return function (b){
    return(a * b);
  }
}
var funcionmulti= multi(3);
console.log (funcionmulti(2)); 
/*-----------------------------------*/
function subiendodeauno(subir){
    var i = 0
    return function (mas){
        return ++i;

    }
}
var subodeauno  = subiendodeauno(1);
subodeauno(1)
/* mi puto espacio no te pases Edu*/

function ClouserDeSuma(a){
  return function(b){
    return a+b
  }
  }
  
var suma5=ClouserDeSuma(5)
console.log(suma5(1));
/*haber si me sale el contador */
function ClouserDeContador(){
    var i=0
    return function(x){
    return ++i}
}
contando=ClouserDeContador()
console.log(contando())

/* mi espacio no te pases Fede*/


function counter() {
    var suma = 0;
    return function nuevo(){
      console.log(++suma)
    }
     
    }
    var contador = counter()
    contador()
    contador()
    contador()
/*---------------------------*/
/*---------------------------*/
var personas ={
    nombre: "carlos",
    apellido: "elvergas",
    edad : 25,
    ciudad:"yapeyu",
    
}

function nombreDePersonas(){
    return this.
}
function nombreDePersonas(){
    return this.
}
function nombreDePersonas(){
    return this.
}