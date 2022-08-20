"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {

this.right = null;
this.left=null;
this.value = value

}
BinarySearchTree.prototype.size = function () {
  let contador = 1;
  if (this.left) {
    contador += this.left.size();
  }
  if (this.right) {
    contador += this.right.size();
  }
  return contador;
};

BinarySearchTree.prototype.insert = function(gordovalor){
if(this.value > gordovalor){
  if (!this.left){
    this.left = new BinarySearchTree (gordovalor); 
    }else {
    this.left.insert(gordovalor);
  }
}else {
  if(!this.right){
  this.right = new BinarySearchTree (gordovalor);
 }else {
  this.right.insert(gordovalor);
}
}
}


BinarySearchTree.prototype.contains = function(value){
if(this.value === value) return true;
if (this.left){
  if (this.left.contains(value))
  return true
}
if (this.right  ) {
  if (this.right.contains(value))
  return true
} return false


}
BinarySearchTree.prototype.depthFirstForEach = function(cb,order= "in-order"){

  if (order =="in-order"){
  this.left?.depthFirstForEach(cb,order)
  cb(this.value);
  this.right?.depthFirstForEach(cb,order)
  }
  ;
  if (order =="pre-order" ){
    cb(this.value);
    this.left?.depthFirstForEach(cb,order)
    this.right?.depthFirstForEach(cb,order)
  }
  ;
    if(order == "post-order"){
    this.left?.depthFirstForEach(cb,order)
   this.right?.depthFirstForEach(cb,order)
    cb(this.value)
  }
 }





BinarySearchTree.prototype.breadthFirstForEach = function(cb,colector=[]){
  
   cb(this.value)

   if(this.left)colector.push(this.left);
if(this.right)colector.push(this.right);

if(colector.length){
  colector.shift().breadthFirstForEach(cb,colector);

}







}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
