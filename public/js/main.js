// exo 1 
let reverseNumber = (num) => {
    num = parseInt(num.toString().split('').reverse().join(''));
    return num;
}
let nbr = prompt('donner un chiffre');
console.log(reverseNumber(nbr));
console.log("---------");
// exo2
let divPar2 = (a) => {
    if (a %2 == 0) {
        return `le num ${a} est divisible par 2`
    } else {
        return `ce nombre n'est pas divisible par 2`
    }
}

let divisible = parseInt(prompt ("donne un chiffre"));
console.log(divPar2(divisible));

console.log("---------");
//exo 3
let logIn = () => {
    let compt = 0;
    do {
        var pass = prompt("quel est ton mdp")
        if (pass === "mdp") {
            return alert('vous etes connecté');
        } else {
            alert('Reessayez');
            compt++
        }
    } while (compt !== 3 && pass != "mdp");
    return alert('echec apres 3 fautes')
}

logIn()

// exo 4

let coding16 = [];

let rentrer = (a) => {
    let tab = a.split(" ");
    coding16.push(...tab);
    console.log(coding16);
    coding16.forEach (el => {
        console.log(`${el} est rentré, Salut! `);
    });
}

let sortir = (a) => {
    coding16 = coding16.filter((el) => {
        return el != a
    })
}

// SCENARIO
do {
    var a = prompt('Veux-tu ajouter ou supprimer une personne (oui ou non)')
    if (a === 'oui') {
        let name = prompt('qui veux tu ajouter ou supprimer (prenom)');
        if (coding16.indexOf(name) != -1) {
            sortir(name)
            console.log(`${name} est sorti de la classe`);
        } else {
            rentrer(name)
        }
    } else if (a === 'non') {
        if (coding16.length === 0) {
            console.log('Il ya personne');
        } else {
            console.log(`D'accord, voici la classe ${coding16}`);
        }
    } else {
        alert('Erreur, demande oui et non');
    }
} while (coding16.length < 19 && a === "oui");


console.log(coding16);
