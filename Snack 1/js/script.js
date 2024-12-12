// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Creazione dell'array di oggetti
const bici = [
    {nome: 'Bianchi', peso: 10},
    {nome: 'Pininfarina', peso: 20},
    {nome: 'Bottecchia', peso: 30}
]

// Stampare a schermo le bici con peso minore
function biciLeggera(bici) {
    let biciMinore = bici[0];
    for (let i = 1; i < bici.length; i++) {
        if (bici[i].peso < biciMinore.peso) {
            biciMinore = bici[i];
    }
}
return biciMinore;
}

const biciMenoPesante = biciLeggera(bici)
alert(`La bici meno pesante è la ${biciMenoPesante.nome} e pesa ${biciMenoPesante.peso} kg`);