/*****************************
* 029-1 - Boucles et itérations
*/

// BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS

// 1. Boucle for

/*
for (initialisation; condition; étape) {
    // instructions exécutées tant que la condition est vérifiée
}
  - initialisation : on initialise un compteur pour dire OÙ ON COMMENCE
  - condition : on écrit une condition sur le compteur pour dire QUAND ON S'ARRÊTE
  - étape : on incrémente le compteur pour dire COMMENT ON AVANCE dans la boucle
*/

/*
EXEMPLE 1 :
Affichez les nombres de 1 à 10
- 1°) sans utiliser de boucle : écrivez toutes les instructions à la main, une par une
- 2°) en utilisant la boucle FOR
*/

// 1°) sans boucle

// 2°) avec boucle FOR


/*
N.B. TABLE D'ÉVOLUTION DES VARIABLES :
  nbre      nbre < =10           console.log(nbre)        nbre++
nbre = 1,   1 < 5 true,           affiche 1,          nbre passe à 1+1 = 2
nbre = 2,   2 < 5 true,           affiche 2,          nbre passe à 2+1 = 3
...
nbre = 10,  10 <= 10 true,        affiche 2,          nbre passe à 10+1 = 11
nbre = 11,  11 <= 10 FALSE,       on sort de la boucle !
*/

/*
EXEMPLE 2 : 
Complétez ce programme pour qu'il fasse 10 tours de manège
en affichant le numéro du tour à chaque tour.
Vous devez afficher dans la console les phrases suivantes :
Le manège démarre
C'est le tour numéro 1
C'est le tour numéro 2
...
C'est le tour numéro 10
Le manège s'arrête
*/




/*
EXEMPLE 3 : 
Affichez les nombres pairs entre 0 et 20
*/




/* EXEMPLE 4 :
Affichez les 10 premières valeurs de la table de multiplication choisie par l'utilisateur
1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
  "Je voudrais afficher les 10 premières valeurs de la table de multiplication par"
2. Affichez le résultat avec :
  - un titre : "Voici les 10 premières valeurs de la table de multiplication par …"
  - pour chaque valeur, le calcul et le résultat (par exemple : 1 * 7 = 7)
*/





// Boucler à l'envers 

/* Affichez dans la console : "3, 2, 1, partez !" */





// 2. Boucle While 

// La boucle `while` permet de répéter des instructions tant qu'une condition est vérifiée.

/*
while (condition) {
  // instructions exécutées tant que la condition est vérifiée
}
*/

/* EXEMPLE 1 :
Affichez
- Début du programme
- les nombres de 1 à 5 à l'aide d'une boucle WHILE
- Fin du programme
*/



/*
EXEMPLE 2 : 
Complétez ce programme pour qu'il fasse 10 tours de manège
en affichant le numéro du tour à chaque tour.
Vous devez afficher dans la console les phrases suivantes :
Le manège démarre
C'est le tour numéro 1
C'est le tour numéro 2
...
C'est le tour numéro 10
Le manège s'arrête
*/



/*
EXEMPLE 3 : 
Affichez les nombres pairs entre 0 et 20
*/



/* EXEMPLE 4 :
Affichez les 10 premières valeurs de la table de multiplication choisie par l'utilisateur
1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
  "Je voudrais afficher les 10 premières valeurs de la table de multiplication par"
2. Affichez le résultat avec :
  - un titre : "Voici les 10 premières valeurs de la table de multiplication par …"
  - pour chaque valeur, le calcul et le résultat (par exemple : 1 * 7 = 7)
*/




/* EXEMPLE 5 :
- Affichez en boucle une boîte de dialogue dans laquelle vous permettez à l'utilisateur
d'entrer une lettre et informez-le qu'il doit saisir "X" pour sortir.
Le message pourrait être : "Tapez une lettre ou X pour sortir : ".
- BONUS : Affichez ensuite dans la console la chaîne complète saisie par l'utilisateur
*/





/* FOR ou WHILE ?
Toutes les boucles peuvent s'écrire avec un WHILE.
En fait, WHILE est la boucle la plus générale.
FOR est juste une écriture plus pratique lorsqu'on connaît à l'avance le nombre d'itérations.
- Si on peut prévoir à l'avance le nombre de tours de boucles à effectuer,
  la boucle FOR est le meilleur choix (parce que la boucle FOR a l'avantage
  d'intégrer la modification du compteur dans sa syntaxe,
  ce qui élimine le problème des boucles infinies.
  Mais son utilisation implique que le nombre de tours de boucle soit connu à l'avance…).
- Si on ne peut pas prévoir à l'avance le nombre de tours de boucles à effectuer,
  il vaut mieux utiliser le WHILE. C'est notamment le cas lorsque la boucle
  sert à contrôler une donnée saisie par l'utilisateur.
*/


// 3. Des boucles imbriquées

/* On peut très bien imbriquer une boucle dans une boucle, comme ceci */



/* 
- => Faire la table d'évolution des variables
- PRINCIPE :
  C'est d'abord la boucle interne qui boucle (c'est celle qui boucle le plus vite)
  et puis la boucle externe (c'est celle qui boucle le plus lentement)
*/

