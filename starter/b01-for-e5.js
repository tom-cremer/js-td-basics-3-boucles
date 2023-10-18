/*****************************
 * BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

/* 6.1. Boucle FOR
  Syntaxe :
    for (initialisation; condition; étape) {
        // instructions exécutées tant que la condition est vérifiée
    }
  Ingrédients :
    - initialisation : on initialise un compteur pour dire OÙ ON COMMENCE
    - condition : on écrit une condition sur le compteur pour dire QUAND ON S'ARRÊTE
    - étape : on incrémente le compteur pour dire COMMENT ON AVANCE dans la boucle
*/

/* EXEMPLE 5 : Boucler à l'envers
- Affichez dans la console : "3, 2, 1, partez !"
*/

// il est possible de faire plusieurs actions dans le for en les séparant par une "," (virgule) pareil pour les declarations de variables

for (let i = 10, j = 0; i > -1; i--, j++){
    console.log(i,j);
}
