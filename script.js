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

/* 1. Cree un nouveau tableau pour ajouter une phrase de presentation */

const presentations = fellowship.map(member => `Ce personnage s'appel : ${member.name}.`);

console.log(presentations);

/* 2. Coupe la premiere partie du tableau */

const cutTab = fellowship.slice(0, 4);

console.log("Les 4 premiers membres :", cutTab);

/* 3. Cree une nouvelle copie du tableau que l'on modifie */

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

/* 4. Meme chose en retirant Legolas et Gimli  */ 

let change2Tab = [...fellowship];

    const spliceTab = change2Tab.splice(3, 2);

    console.log(spliceTab);

    console.log(change2Tab);

/* 5. Tri alphabetique des noms */ 

let alphaTab = [...fellowship];

    alphaTab.sort((a, b) => a.name.localeCompare(b.name));

    console.log("Ordre alphabétique :", alphaTab);

/* 6. Vérifier si un membre est gandalf  */ 

const gandalfIn = fellowship.map(member => member.name === "Gandalf");

console.log(gandalfIn);

/* 7. Verifier si un membre est un homme */ 

const men = fellowship.some(member => member.species === "Homme");//.include(true);

console.log(men);

/* 8. Verifier les membres avec epees */

const sword = fellowship.every(member => member.hasSword === true);

console.log(sword);

/* 9. Compter les membres avec des epees */ 

const countSwords = fellowship.reduce((acc, member) => member.hasSword ? acc + 1 : acc, 0);

console.log(countSwords);

/* 10. Longueur du tableau */ 

console.log(fellowship.length);

/* 11. Affiche tout les membres de la communauté */

fellowship.forEach(member => console.log(member.name));

/* 12. Tableau des longueur de nom de chaque membres */

const charName = fellowship.map(member => member.name.length);
console.log(charName);

/* 13. Trier les cinq premiers */ 

const firstFive = fellowship.slice(0, 5);
    firstFive.sort((a, b) => a.name.localeCompare(b.name));

console.log(firstFive);

/* 14. Ajouter des membres */ 

let ajouterGollumEtFaramir = [...fellowship];

    ajouterGollumEtFaramir.push({ name: "Gollum", species: "Hobbit", hasSword: false });
    ajouterGollumEtFaramir.unshift({ name: "Faramir", species: "Homme", hasSword: true });

    console.log(ajouterGollumEtFaramir);

/* 15. Retirer Boromir trier le reste */

let spliceBoromirAndSort = [...fellowship]

    const spliceBoromir = spliceBoromirAndSort.splice(5, 1)
    
console.log(spliceBoromirAndSort.sort((a, b) => a.name.localeCompare(b.name)))

/* 16. Verfier si un membre à une epee et si Aragorn est dans le communauté

const UnePersonneAUneEpee = fellowship.some(member => member.hasSword === true);
UnePersonneAUneEpee = fellowship.includes(Aragorn);

console.log(UnePersonneAUneEpee)

*/
