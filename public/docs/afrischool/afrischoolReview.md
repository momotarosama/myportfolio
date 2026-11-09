# AfriSchool — étude de projet

## OVERVIEW

AfriSchool est une interface web de gestion scolaire conçue pour réunir dans un même espace les informations utiles au suivi quotidien d’un établissement. Le projet présente des vues dédiées aux élèves, enseignants, classes, cours, évaluations, emplois du temps et finances, ainsi qu’un tableau de bord.

L’objectif est de rendre ces informations plus faciles à consulter et à organiser grâce à une navigation centralisée et à des vues adaptées à chaque domaine.

## THE CHALLENGE

Les informations scolaires et administratives sont souvent réparties entre plusieurs outils ou documents. Cette dispersion complique le suivi des élèves, la coordination des équipes et la consultation rapide des activités et indicateurs de l’établissement.

Le défi du projet était de concevoir une interface cohérente qui regroupe ces usages, tout en restant lisible malgré la diversité des données et des fonctionnalités.

## THE SOLUTION

AfriSchool propose une application web organisée autour d’un tableau de bord et d’une navigation latérale. Elle comprend des pages pour les élèves, enseignants, classes, cours, évaluations, finances, messages, rapports, emplois du temps, paramètres et fil social. Les classes disposent également d’une vue détaillée avec des onglets de présentation, programme, élèves, planning, devoirs, discussion et analyses.

Le dépôt montre une interface frontend alimentée principalement par des fichiers JSON statiques. Il ne contient pas de serveur applicatif ni de base de données connectée ; les données visibles servent donc de contenu de démonstration.

## MY ROLE

**Full-Stack Developer**

Le périmètre vérifiable dans ce dépôt concerne principalement le frontend :

- **Frontend :** développement des pages et composants avec React, navigation entre les vues et intégration des données de démonstration.
- **Backend :** aucun backend n’est présent dans le dépôt consulté.
- **Database :** aucune base de données n’est configurée ; les exemples de données sont stockés dans des fichiers JSON.
- **UI/UX :** organisation des écrans, navigation, composants réutilisables et prise en charge du français et de l’anglais.
- **Deployment :** la configuration de déploiement et l’environnement de production ne sont pas documentés dans le dépôt.

## TECHNOLOGIES

`React 19` `JavaScript` `React Router` `i18next` `Recharts` `Axios` `Lucide React` `CSS`

Les données de démonstration sont servies depuis des fichiers JSON dans le dossier `client/public/data`. TypeScript et PostgreSQL ne sont pas utilisés dans le code présent.

## DESIGN & INTERFACE

L’interface s’articule autour d’une mise en page avec barre latérale et en-tête, puis de pages spécialisées. Le tableau de bord affiche notamment des indicateurs, des graphiques financiers, des activités récentes et des événements à venir. Les graphiques sont réalisés avec Recharts et les icônes avec Lucide React.

**Captures d’écran :** aucune capture de l’application n’est fournie dans le dépôt. Ajouter ici des captures réelles après lancement de l’application :

| Écran | Capture |
| --- | --- |
| Tableau de bord | À ajouter |
| Liste des élèves | À ajouter |
| Détail d’une classe | À ajouter |

## DEVELOPMENT

L’application est construite avec Create React App. `client/src/App.js` définit les routes avec React Router et charge les principales pages de façon différée avec `React.lazy`. Une mise en page partagée (`MainLayout`) accueille les vues de l’application.

Les fonctionnalités et éléments techniques visibles comprennent :

- des pages distinctes pour les principales activités scolaires et administratives ;
- une page de détail de classe avec plusieurs onglets fonctionnels ;
- des composants réutilisables pour les cartes, boutons, menus, indicateurs et éléments du tableau de bord ;
- des graphiques en courbes, secteurs, barres et aires avec Recharts ;
- une interface français/anglais basée sur i18next, avec le choix de langue conservé dans `localStorage` ;
- des fichiers JSON séparés pour les élèves, enseignants, classes, finances, événements et activités.

Pour lancer le frontend depuis le dossier `client` :

```bash
npm install
npm start
```

## RESULT

Le résultat disponible dans le dépôt est un prototype frontend de gestion scolaire comprenant un tableau de bord et un ensemble étendu de pages métier. Les données de démonstration permettent d’illustrer les écrans et les visualisations.

Aucun indicateur de résultat mesuré, déploiement public ou retour utilisateur n’est documenté dans le projet ; ces éléments pourront être ajoutés lorsqu’ils seront disponibles.
