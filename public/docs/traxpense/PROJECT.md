# Traxpense — présentation du projet

## OVERVIEW

Traxpense est une application mobile de gestion des finances personnelles. Elle permet de suivre les revenus et les dépenses, de consulter les soldes de ses comptes et de garder une trace des prêts et emprunts. L’application vise à réunir ces informations dans une interface simple, avec des données enregistrées localement sur l’appareil.

## THE CHALLENGE

Le suivi financier peut être dispersé entre plusieurs comptes et notes, tandis que les prêts entre proches sont souvent difficiles à suivre dans le temps. Le projet répond au besoin de visualiser les mouvements d’argent, de comprendre leur effet sur les soldes et de retrouver l’historique des remboursements.

## THE SOLUTION

Traxpense propose une expérience mobile pour :

- créer et consulter plusieurs comptes, avec un compte principal ;
- enregistrer des revenus et des dépenses et consulter leur historique ;
- gérer les sommes prêtées ou empruntées, leurs soldes et leurs remboursements ;
- afficher les montants dans une devise choisie, avec le franc CFA (XOF) comme devise de référence ;
- exporter les données financières au format CSV et les partager depuis l’appareil ;
- modifier les préférences et réinitialiser les données de l’application.

## MY ROLE

**Full-Stack Developer**

- **Frontend :** écrans mobiles, navigation, formulaires et affichage des comptes, transactions et dettes.
- **Backend / logique métier :** opérations de création, modification, suppression et remboursement, avec mise à jour des soldes associés.
- **Database :** conception et accès à une base SQLite embarquée ; persistance locale des préférences avec AsyncStorage.
- **UI/UX :** parcours d’accueil, navigation par onglets, vues détaillées et composants de présentation des montants.
- **Deployment :** configuration du projet Expo et des builds Android/iOS avec EAS ; l’application est configurée, mais aucune publication en boutique n’est documentée dans le dépôt.

## TECHNOLOGIES

`React Native` `React` `JavaScript` `Expo` `Expo Router` `SQLite` `AsyncStorage` `Zustand` `React Native SVG` `Lucide` `EAS Build`

> Le code du dépôt est en JavaScript (fichiers `.js` et `.jsx`) ; TypeScript et PostgreSQL ne sont pas utilisés dans la configuration actuelle.

## DESIGN & INTERFACE

L’interface est conçue pour mobile et s’appuie sur une navigation par onglets, des écrans de détail et des formulaires dédiés aux opérations financières. La palette utilise notamment le violet comme couleur d’accent, avec des couleurs distinctes pour les revenus et les dépenses. La police Lato est incluse dans les ressources du projet.

### Captures d’écran

Les captures d’écran de l’application ne sont pas présentes dans le dépôt. Ajoutez-les dans `docs/screenshots/`, puis remplacez les exemples ci-dessous par les fichiers disponibles :

<!-- Exemple : ![Accueil](docs/screenshots/accueil.png) -->
<!-- Exemple : ![Comptes et transactions](docs/screenshots/comptes-transactions.png) -->

## DEVELOPMENT

### Architecture

- `app/` contient les routes et écrans Expo Router, organisés en groupes pour l’application, l’accueil initial, les formulaires et les réglages.
- `src/database/db.js` initialise la base SQLite et regroupe les opérations de persistance pour les comptes, les transactions et les dettes.
- `stores/userStore.js` utilise Zustand pour l’état partagé de l’utilisateur et s’appuie sur AsyncStorage pour certaines préférences persistantes.
- `src/services/currencyService.js` gère les taux et les conversions de devises, mis en cache dans AsyncStorage.
- `src/utils/` contient les utilitaires de formatage, de configuration et d’export CSV.

### Fonctionnalités et éléments techniques

- Les comptes, transactions et dossiers de dette sont modélisés dans SQLite, avec des clés étrangères entre transactions, comptes et dettes.
- Une transaction associée à un compte ajuste son solde ; sa suppression ou sa modification peut appliquer l’opération inverse ou recalculer l’impact.
- Un prêt ou un emprunt peut être lié à un compte. Les remboursements diminuent le solde restant et enregistrent le mouvement correspondant.
- Les dettes peuvent être suivies jusqu’à leur clôture, avec un historique des mouvements et une progression basée sur le montant initial et le solde restant.
- Les montants sont stockés en XOF puis convertis pour l’affichage selon la devise sélectionnée.
- L’export crée des fichiers CSV distincts pour les comptes, les transactions et les dettes, puis ouvre le partage natif pour le fichier des transactions.

## RESULT

Le dépôt contient une application Expo fonctionnelle sur le plan de la structure et des fonctionnalités implémentées : suivi multi-comptes, opérations financières, prêts et emprunts, préférences de devise et export CSV. Aucun chiffre d’usage, résultat de lancement public ou retour utilisateur n’est fourni ; les résultats d’adoption ne peuvent donc pas être quantifiés à partir des éléments disponibles.
