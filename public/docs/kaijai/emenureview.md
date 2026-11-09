# E‑Menu — présentation du projet

## OVERVIEW

E‑Menu est une application web de consultation de menu et de préparation de commande, pensée pour un restaurant. Depuis une interface adaptée au mobile, le client explore les plats par catégorie, consulte leurs détails et compose son panier avant de choisir un mode de paiement.

Le projet répond au besoin de rendre le menu plus accessible et la sélection des plats plus simple qu’avec une carte papier, notamment sur téléphone.

## THE CHALLENGE

Présenter un menu riche — catégories, sous-catégories, photos, formats, prix et suppléments — dans une interface facile à parcourir sur des écrans de tailles différentes. Le parcours devait aussi permettre de passer de la découverte d’un plat à sa personnalisation et au récapitulatif du panier sans perdre les choix déjà faits.

## THE SOLUTION

Une application React organisée autour de plusieurs vues : accueil et catégories, liste des plats, détail d’un plat et panier. Le menu et les plats sont récupérés depuis une API ; le panier est conservé localement afin de rester disponible au fil de la navigation et après rechargement de la page.

Le parcours de commande comprend la sélection du format, de la quantité et des suppléments, puis l’affichage d’un récapitulatif et de choix de paiement (espèces, mobile money ou carte) dans l’interface.

## MY ROLE

**Full-Stack Developer** — contribution couvrant les volets suivants :

- **Frontend :** pages, composants React, navigation et intégration des données du menu.
- **Backend / API :** consommation des routes de menu d’un service API externe. Le code du serveur n’est pas présent dans ce dépôt.
- **Database :** aucune base de données ni technologie de base de données n’est spécifiée dans le code disponible.
- **UI/UX :** conception du parcours de navigation et de commande, cartes de plats, panier et adaptations responsive.
- **Déploiement :** le client est configuré avec Create React App. L’API utilisée par défaut est hébergée sur Render ; les informations de déploiement du frontend ne figurent pas dans le dépôt.

## TECHNOLOGIES

`React 19` `JavaScript` `React Router` `Axios` `CSS` `Framer Motion` `Create React App` `API REST`

> Le dépôt ne contient pas de TypeScript. L’URL de l’API est configurable via `REACT_APP_API_URL` ; aucune technologie de base de données n’est confirmée côté client.

## DESIGN & INTERFACE

L’interface met les catégories et les plats en avant avec des visuels, des cartes compactes et une navigation conçue pour s’adapter au mobile, à la tablette et aux écrans plus larges. Les styles responsive sont répartis dans `client/src/styles/`.

Les fichiers présents dans `client/public/assets/` sont principalement des visuels de menu, pas des captures d’écran de l’application. Ajouter ici des captures réelles une fois celles-ci exportées :

- **Accueil et catégories** — `docs/screenshots/accueil.png`
- **Liste des plats** — `docs/screenshots/plats.png`
- **Personnalisation et panier** — `docs/screenshots/commande-panier.png`

## DEVELOPMENT

L’application cliente est organisée par responsabilités dans `client/src/` :

- `pages/` contient les vues d’accueil, de catégorie, de commande et la page À propos.
- `components/` regroupe les cartes, filtres, barre de navigation, panier flottant et panneau récapitulatif.
- `context/CartContext.js` centralise l’état du panier et le synchronise avec `localStorage`.
- `services/api.js` configure Axios et expose les appels aux routes de catégories et de plats.
- `styles/` contient les règles principales et les adaptations responsive.

Le routage est géré par React Router. Les plats sont regroupés par sous-catégorie dans leur vue dédiée. La page de commande expose des options de format et de suppléments ; les choix de paiement sont affichés côté client. Le dépôt ne documente pas de traitement de paiement ni de création de commande sur le serveur.

Pour lancer le client en développement :

```bash
cd client
npm install
npm start
```

La compilation de production est prévue via `npm run build`. Le projet utilise Create React App.

## RESULT

Le dépôt contient un prototype fonctionnel côté interface pour parcourir un menu alimenté par API, configurer des plats et préparer un panier persistant dans le navigateur. Aucun indicateur d’usage, résultat métier ou preuve de paiement réel n’est fourni dans les fichiers du projet ; le résultat présenté ici se limite donc aux fonctionnalités visibles dans le code.
