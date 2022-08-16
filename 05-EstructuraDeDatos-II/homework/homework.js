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
function LinkedList(){
 this.head = null;
  };

function Node(value){
  this.value = value;
  this.next = null;
};
LinkedList.prototype.add=function(value){
let newNode = new Node(value);
    if (!this.head){
      this.head = newNode;
    } else {
      let current = this.head;
      while( current.next){
      current = current.next;
      }
      current.next = newNode;
    return newNode;
    } 
  }
  LinkedList.prototype.remove= function(){
    if(this.head==null){
    return null;
    }if(this.head.next==null){ // si mi primer nodo su next es null
      let save= {}//
      save = this.head.value// guarda el valor de ese node en save cortando la funcion
      this.head= null// estas borrando el primer nodo
      return save
    }else {//si el primer nodo si tiene un valor en next ejecuto esto
      let current = this.head//me posiciono en le primer nodo sabeiendo que existe un segundo
      let save = {}
      while(current.next){//si existe current. next hace...
        if(!current.next.next== null) //si current.next.next es distinto de null
        current=current.next//posiciona a current en el sigueinte nodo
        else (current.next.next== null)//si current.next.next es igual a null 
         save = current.next.value//guarda y devolveme el valor de current. next
         current.next= null
         return save
  
      }
    }
  }

  LinkedList.prototype.search= function(value){
    if(!this.head) return null;
    let current= this.head;
    while(current){
      if(current.value=== value) return current.value;
      else if(typeof value == 'function') {
        if(value(current.value)){
          return current.value
        }
      }
      current = current.next
    } 
    return null
  }
/*delete(data) {

let list = new LinkedList;
console.log(list);
list.add(10);
list.add(5);
console.log(list);
*/

    /*}
  list.prototype.getAll= function(){
    let current = this.head;
    if(!current){
      return null;
    }
  }*/






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

function HashTable() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
