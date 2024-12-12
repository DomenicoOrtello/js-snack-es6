// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// Funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
function filterArray(array, a, b) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (a <= i && i <= b) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// Risultato in console
const resultArray = [10, 20, 30, 40, 50, 60];
console.log(filterArray(resultArray, 1, 4));
