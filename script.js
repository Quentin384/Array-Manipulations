const fellowship = [
    { name: "Frodo", species: "Hobbit", hasSword: false },
    { name: "Aragorn", species: "Homme", hasSword: true },
    { name: "Gandalf", species: "Maiar", hasSword: true },
    { name: "Legolas", species: "Elfe", hasSword: true },
    { name: "Gimli", species: "Nain", hasSword: true },
    { name: "Boromir", species: "Homme", hasSword: true },
    { name: "Sam", species: "Hobbit", hasSword: false },
    { name: "Merry", species: "Hobbit", hasSword: false },
    { name: "Pippin", species: "Hobbit", hasSword: false },
    { name: "Gollum", species: "Hobbit", hasSword: false },
    { name: "Sauron", species: "Maiar", hasSword: true },
    { name: "Saruman", species: "Maiar", hasSword: true },
    { name: "Faramir", species: "Homme", hasSword: true },
    { name: "Eowyn", species: "Homme", hasSword: true },
    { name: "Arwen", species: "Elfe", hasSword: false },
    { name: "Theoden", species: "Homme", hasSword: true },
    { name: "Elrond", species: "Elfe", hasSword: true }
];

/* Cree un nouveau tableau pour ajouter un ephrase de presetation */

const presentations = fellowship.map(member => `Ce personnage s'appel : ${member.name}.`);

console.log(presentations);

/* Coupe la premiere partie du tableau */

const cutTab = fellowship.slice(0, 4);

console.log("Les 4 premiers membres :", cutTab);

/* Cree une nouvelle copie du tableau que l'on modifie */

let changeTab = [...fellowship];

    // Ajout de Gollum 

    changeTab.unshift({ name: "Gollum", species: "Hobbit", hasSword: false });

    // Retrait du dernier élément

    const popTab = changeTab.pop();

    console.log("Élément retiré :", popTab);

    // Ajout de Faramir à la fin
    
    changeTab.push({ name: "Faramir", species: "Homme", hasSword: true });

    // Retrait du premier élément (shift)

    const shiftTab = changeTab.shift();

    console.log("Élément retiré :", shiftTab);

    // Rendu final :

    console.log("Tableau final :", changeTab);

/* Meme chose en retirant Legolas et Gimli  */ 

let change2Tab = [...fellowship];

    const spliceTab = change2Tab.splice(3, 2);

    console.log(spliceTab);

    console.log(change2Tab);

/* Tri alphabetique des noms */ 

let alphaTab = [...fellowship];

    alphaTab.sort((a, b) => a.name.localeCompare(b.name));

    console.log("Ordre alphabétique :", alphaTab);

/* Vérifier si un membre est gandalf  */ 

const gandalfIn = fellowship.map(member => member.name === "Gandalf").includes(true); 

console.log(gandalfIn);

/* Verifier si un membre est un homme */ 

const men = fellowship.some(member => member.species === "Homme");//.include(true);

console.log(men);

/* Verifier les membres avec epees */

const sword = fellowship.every(member => member.hasSword === true);

console.log(sword);

/* Compter les membres avec des epees */ 

const countSwords = fellowship.reduce((acc, member) => member.hasSword ? acc + 1 : acc, 0);

console.log(countSwords);

/* Longueur du tableau */ 

