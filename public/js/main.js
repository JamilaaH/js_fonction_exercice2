// exo 1 
let reverseNumber = (num) => {
    return parseFloat(num.toString().split('').reverse().join(''))
}
let nbr = reverseNumber(2345);
console.log(nbr);
console.log("---------");
// exo2
let divPar2 = (a) => {
    if (a %2 == 0) {
        return `le num ${a} est divisible par 2`
    } else {
        return `ce nombre n'est pas divisible par 2`
    }
}

let divisible = divPar2(5);
console.log(divisible);

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

let entrer = (nom) => {
    
}