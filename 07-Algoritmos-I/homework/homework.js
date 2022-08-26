'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
   // DECLARE UNA FUNCION Y SU PARAMETRO
   let result = [1];
   let i = 2 ;
   while (num > 1){
     
    
     if(num % i === 0){
       result.push(i)
       num = num / i
     } else { 
         i++
     }
   }
   //
   return result
 }
 console.log(factorear(800))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
     const arr = array; // avoid side effects
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) { // starts up to length - 1
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  };
  


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
      let n = array.length;
        for (let i = 1; i < n; i++) {
                  let current = array[i];
                     let j = i-1; 
            while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
    return array;
      }
    //const result = insertionSort(array);
  
//  let array =[15,20,4,35,55,1]; 
// insertionSort(array);

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let Value = array[i]
    let j
    for (j = i - 1; j >= 0 && array[j] > Value; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = Value
  }
  return array
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
