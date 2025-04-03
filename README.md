Énoncé : Crée un tableau contenant les noms de tous les membres de la communauté de l'anneau et applique une transformation pour ajouter une phrase de présentation à chaque personnage.

slice()
Énoncé : Utilise slice() pour créer un sous-tableau avec les premiers 4 membres de la communauté de l'anneau.

push(), pop(), shift(), unshift()
Énoncé : Ajoute Gollum au début de la communauté avec unshift(), retire Boromir avec pop(), puis ajoute Faramir à la fin avec push(). Utilise également shift() pour retirer le premier membre.

splice()
Énoncé : Utilise splice() pour retirer Gimli et Legolas du tableau et les stocker dans un tableau séparé, puis affiche les deux tableaux.

sort()
Énoncé : Trie la communauté de l'anneau par ordre alphabétique.

includes()
Énoncé : Vérifie si Gandalf est dans la communauté de l'anneau.

some()
Énoncé : Vérifie si au moins un membre de la communauté de l'anneau est un homme.

every()
Énoncé : Vérifie si tous les membres de la communauté de l'anneau ont une épée.

reduce()
Énoncé : Utilise reduce() pour compter le nombre de membres ayant une épée dans la communauté de l'anneau.
length
Énoncé : Affiche le nombre total de membres de la communauté de l'anneau en utilisant la propriété length.

forEach()
Énoncé : Utilise forEach() pour afficher le nom de chaque membre de la communauté de l'anneau.

Combinaison de map() et length
Énoncé : Crée un tableau des longueurs de noms des membres de la communauté de l'anneau et affiche-le.

Combinaison de slice() et sort()
Énoncé : Utilise slice() pour obtenir les 5 premiers membres de la communauté, puis trie-les par nom avec sort().

Combinaison de push() et unshift()
Énoncé : Ajoute "Gollum" à la fin du tableau avec push() et "Faramir" au début avec unshift().

Combinaison de splice() et sort()
Énoncé : Utilise splice() pour retirer Boromir de la communauté et trier le reste des membres par ordre alphabétique.

Combinaison de some() et includes()
Énoncé : Vérifie si au moins un membre de la communauté a une épée en utilisant some(), puis vérifie si "Aragorn" est dans la communauté avec includes().

Combinaison de every() et reduce()
Énoncé : Vérifie si tous les membres ont une épée avec every(), puis calcule le nombre total de membres avec reduce().

Combinaison de find() et map()
Énoncé : Utilise find() pour trouver un membre avec une épée et ensuite utilise map() pour créer un tableau avec les noms des membres.

Combinaison de filter() et length
Énoncé : Utilise filter() pour obtenir les membres ayant une épée et calcule leur nombre avec la propriété length.

Combinaison de forEach() et includes()
Énoncé : Utilise forEach() pour vérifier si chaque membre a un nom dans un tableau donné.
Thème ? Seigneur des Anneaux, Objectif Maitriser les autres méthodes des Array (après nous explorerons les boucles, objets et conditions mais nous aurons déjà une solide base sur les tableaux !
Voici le tableau d'exemple à copier/coller pour réaliser l'exo : const fellowship = [
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