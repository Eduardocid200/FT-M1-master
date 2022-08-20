"use strict";

const { add } = require("@11ty/eleventy/src/TemplateCache");
const { listenerCount } = require("@11ty/eleventy/src/Util/AsyncEventEmitter");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
 this.head = null;
  };

function Node(value){
  this.value = value;
  this.next = null;
};
LinkedList.prototype.add=function(value){
let newNode = new Node(value);
    if (!this.head){ //this.head=null
      this.head = newNode; // this.head va a ser un nuevo nodo
    } else {
      let current = this.head; // current=actual nodo  
      while(current.next){ //mientras actual sea true
      current = current.next; //actual va a ser el siguiente
      }
      current.next = newNode; // se va a hacer un nodo siguiente
    return newNode; //devuelve el nuevonodo
    } 
  }
  LinkedList.prototype.remove= function(){
    if(this.head==null){ //si head es null
    return null; //devuelve null
    }if(this.head.next==null){ // si mi primer nodo => next es null
      let save= {}// creo una variable como objeto
      save = this.head.value// guarda el valor de ese node en save cortando la funcion
      this.head= null// estas borrando el primer nodo
      return save //devuelvo el save
    }else {//si el primer nodo si tiene un valor en next ejecuto esto
      let current = this.head//me posiciono en le primer nodo sabeiendo que existe un segundo
      let save = {}
      while(current.next){//si existe current. next hace...
        if(!current.next.next== null) //si current.next.next es distinto de null 
        current=current.next//posiciona a current en el sigueinte nodo retrocedo al 2 
        else (current.next.next== null)//si current.next.next es igual a null 
         save = current.next.value//guarda y devolveme el valor de current.next
         current.next= null //actual va a ser null
         return save //devuelvo el valor del ultimo nodo 

      }
    }
  }

  LinkedList.prototype.search= function(value){ //creamos la funcion "buscar"
    if(!this.head) return null; //si this.head es null devuelvo null
    let current= this.head; //creamos variable actaul y la hacemos head
    while(current){ //mientras actual sea true
      if(current.value=== value) return current.value; // si=> el valor del modulo actual tiene un valor
      else if(typeof value == 'function') { //entonces si el valor de la funcion es "funcion en string"
        if(value(current.value)){ // si el valor 
          return current.value
        }
      }
      current = current.next
    } 
    return null
  }


/*Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
this.numBuckets = 35;
this.buckets = new Array(this.numBuckets);
}

HashTable.prototype.hash = function(key) {
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum = sum + key.charCodeAt(i);
       }
  return sum % 35;
}


HashTable.prototype.set = function (key,value) {
  if(typeof key != 'string') throw new TypeError('Keys must be strings');
  let posarr = this.hash(key);
 if(this.buckets[posarr] === undefined) {
  this.buckets[posarr] = {};
 }
this.buckets[posarr][key] = value;
};
HashTable.prototype.get = function() {
  let posarr = this.hash(key);
  return this.buckets[posarr][key]
}
HashTable.prototype.hasKey = function(key) {
  let bucketNumber = this.hash(key)
  return this.buckets.bucketNumber.hasOwnProperty(key)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
