# Premier pas sur le JavaScript

Pour acceder au site fini - print it -, cliquer sur gitPage et ensuite cliquer sur wiev deploiement.

## Dynamiser avec JS un site statique

Ajouter un carrousel au clique sur des fleches droites et gauche, en deroulemùent infini et avec points qui indique le nombre de photos disponible et qui s'allume sur l'image en cours de visionnage.

## Etapes de realisation du code :

### Etape 1 - Mettre à jour le code HTML
  + Analyser le code HTML et CSS.
  + Repere les elements du code et les correspondansces HTML et CSS
  + Ajouter les flèches pour permettre la navigation dans le carrousel.

### Etape 2 - Ajouter des Event Listeners sur les flèches
  + Mettre une .addEventListener().
  + Verifier la fonctiannalité avec un console.log() ou un alert().
  + bien s'assurer de differencier le clic droit du clic gauche

### Etape 3 - Ajouter des bullet point au slider

  + Ajouter les bullet points sur la partie bassedu slider.
  + Il faut un point afficher par image present dansd le slider.
  + Differencier le point qui signale la diapositive en cours de visionnage, à recuperer avec la classe specifique.

### Etape 4 - Modification du slide au clic sur le bouton

  + Sur un clic droit :
    * le bullet point actif passe au suivant;
    * on change l'image;
    * on change le texte correspondant à l'image;
  * Sur un clic gauche idem au droit, mais les éléments précedents.

### Etpae 5 - Mise en place le defilement infini sur le carrousel

  + Le carrousel doit tourner en boucle indéfiniment, ajouter des **conditions**.
  + Si on est à la derniere image et que l'on clic sur droite:
    * on affiche la premiere image;
    * le point sélectionné est le premier;
  + Si on est à la premiere image et que l'on clique a gauche;
    * on affiche la dernière image;
    * le point sélectionné est le dernier;
  + Dans tous les cas, le texte change en accord avec l'image associé.




