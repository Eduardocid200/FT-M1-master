'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 if ( array.length < 1){
  return [];
 }
var left = [];
var right = [];
var pivote = array[0];
for (var i = 1; i < array.length; i++) {
  if (array[i] < pivote){
    left.push(array [i]);
  }
  else {
    right.push(array[i]);
  }  
}
return [].concat(quickSort(left), pivote, quickSort(right));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <=1){
    return array;
  }

  const mitad = Math.floor(array.lenght / 2);
  const izquierda = array.slice(0, mitad);
  const derecha = array.slice(mitad);
return mergeSort(mergeSort(izquierda), mergeSort(derecha))
  
}
function mergearriba (izquierda, derecha){
 const array = [];
 while (izquierda.lenght && derecha.lenght){
  if (izquierda[0] < derecha[0]) {
    array.push(izquierda.shift());
  } else {
    array.push(derecha.shift());

 } 
 return array.concat(izquierda.slice()).concat(derecha.slice());
}
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
