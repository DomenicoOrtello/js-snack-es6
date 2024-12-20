// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Array di oggetti di squadre di calcio
const squadre = [
    {nome: 'Juventus', puntiFatti: 0, falliSubiti : 0},
    {nome: 'Inter', puntiFatti: 0, falliSubiti : 0},
    {nome: 'Milan', puntiFatti: 0, falliSubiti : 0}
]

// Numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”
for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = Math.floor(Math.random() * 100);
    squadre[i].falliSubiti = Math.floor(Math.random() * 100);
}

// Nuovo array i cui elementi contengono solo nomi e falli subiti
const nuovoArray = [];
for (let i = 0; i < squadre.length; i++) {
    nuovoArray.push({
        nome: squadre[i].nome,
        falliSubiti: squadre[i].falliSubiti
    });
}

// Stampa in console
console.log(nuovoArray);