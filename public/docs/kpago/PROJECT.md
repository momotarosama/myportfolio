# KPAGO — Refonte de la plateforme web

## OVERVIEW

KPAGO est une plateforme web de commerce et de restauration conçue pour présenter les produits de la marque, vendre en ligne et faire découvrir son offre de restaurant. Le projet vise à remplacer un site construit avec Wix par une expérience plus flexible, cohérente avec les besoins métier et maîtrisée par l’équipe.

La plateforme réunit une boutique, un espace restaurant, des contenus institutionnels et des parcours dédiés aux cartes cadeaux et au retrait de commande.

## THE CHALLENGE

Le site Wix limitait la personnalisation de l’interface, des animations et des parcours d’achat. La gestion de la boutique et du restaurant partageait des mécanismes peu adaptés à leurs besoins distincts. La traduction et l’organisation de la boutique rendaient également certaines interactions moins fluides : navigation interrompue lors du changement de langue, filtres et présentation des produits perfectibles.

L’enjeu était de gagner en contrôle sur l’expérience utilisateur et de pouvoir faire évoluer séparément les fonctionnalités propres à la boutique et au restaurant.

## THE SOLUTION

Une nouvelle interface web a été développée avec des pages et des parcours dédiés :

- Une boutique avec catalogue, catégories, fiches produits, recherche et panier.
- Un espace restaurant avec menu et parcours de commande à emporter, comprenant le choix du retrait et le suivi de commande côté interface.
- Des pages de présentation, contact et cartes cadeaux.
- Une interface disponible en français, allemand et anglais, avec changement de langue sans rechargement complet.
- Une base d’interface personnalisable, avec composants dédiés et animations conçues pour les besoins de la marque.

## MY ROLE

**Full-Stack Developer** — rôle indiqué pour le projet.

- **Frontend :** développement de l’application et des parcours avec React et TypeScript.
- **Backend :** le périmètre serveur n’est pas présent dans le dépôt consulté ; les services et API ne peuvent donc pas être décrits ici.
- **Database :** aucune configuration ni schéma de base de données n’est fourni dans ce dépôt.
- **UI/UX :** conception et intégration des interfaces de boutique, restaurant, navigation et commande.
- **Deployment :** le dépôt contient une configuration Vercel pour le client, mais ne documente pas de mise en production effective.

## TECHNOLOGIES

`React` `TypeScript` `Vite` `Tailwind CSS` `React Router` `i18next` `Leaflet` `React Leaflet` `Lucide React`

Le client utilise également `ESLint` et `Prettier` pour la qualité et le formatage du code. Aucune technologie backend ou base de données n’est identifiable dans le dépôt fourni.

## DESIGN & INTERFACE

Les visuels ci-dessous sont des ressources du projet, et non des captures d’écran de l’application. Le dépôt ne contient pas de captures d’écran exportées. Il comprend notamment des images de produits et d’ambiance, ainsi que des designs de cartes cadeaux.

| Visuel | Aperçu |
| --- | --- |
| Univers du restaurant | ![Restaurant KPAGO](client/src/assets/images/restaurant.jpeg) |
| Carte cadeau — design 1 | ![Design de carte cadeau 1](client/src/assets/images/cardDesign1.jpg) |
| Carte cadeau — design 2 | ![Design de carte cadeau 2](client/src/assets/images/cardDesign2.jpg) |
| Carte cadeau — design 3 | ![Design de carte cadeau 3](client/src/assets/images/cardDesign3.jpg) |

## DEVELOPMENT

### Architecture

Le dépôt est organisé autour d’un client React démarré avec Vite. L’application utilise React Router pour ses routes, des composants et layouts partagés pour les espaces du site, et des pages chargées à la demande (`lazy` / `Suspense`). Les contenus de traduction sont regroupés par langue et par section dans des fichiers JSON.

### Fonctionnalités et détails techniques

- Routes dédiées à l’accueil, à la boutique, aux catégories, aux produits, au restaurant, au retrait, au statut de commande, aux cartes cadeaux et aux pages éditoriales.
- Catalogue de produits et menu restaurant structurés dans des modules de données côté client.
- Traductions françaises, allemandes et anglaises intégrées avec `i18next` et `react-i18next`.
- Carte intégrée avec Leaflet et React Leaflet.
- Composants spécialisés pour le panier, la recherche, les fiches produits, le paiement et la sélection d’un créneau de retrait.
- Configuration Vercel présente pour le client.

Le dépôt ne contient pas de code serveur dans le dossier `server`. Les traitements réels de paiement, la persistance des commandes, l’authentification, la base de données et les métriques de production ne sont donc pas vérifiables à partir du code disponible.

## RESULT

Le résultat disponible dans le dépôt est une application frontend structurée autour des expériences de boutique et de restaurant, avec des pages dédiées, une interface multilingue et des composants spécialisés pour les parcours de commande.

Aucun indicateur chiffré (ventes, trafic, conversion ou performance) ni preuve de mise en production n’est fourni. Les résultats business et l’état du backend restent à compléter avec des données validées.
