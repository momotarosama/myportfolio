# Casdak Voyage

## OVERVIEW

Casdak Voyage est une plateforme web pour une agence de voyages. Elle présente les destinations, les séjours et les événements de l’agence, puis permet aux visiteurs d’envoyer une demande de voyage ou de réserver un séjour. Un espace d’administration centralise la gestion du catalogue et le suivi des demandes.

Le projet répond au besoin de réunir la découverte de l’offre touristique et les opérations quotidiennes de l’agence dans une même expérience.

## THE CHALLENGE

Une agence doit pouvoir mettre en valeur des offres variées tout en traitant efficacement les demandes de voyage et les réservations. Le site devait rendre les informations faciles à parcourir, fournir des formulaires adaptés aux différents parcours et offrir à l’équipe un espace pour administrer le contenu et suivre l’activité.

## THE SOLUTION

Le projet propose deux espaces complémentaires :

- **Un site public** avec une page d’accueil éditoriale, des pages de destinations et de voyages, des événements, des formulaires de demande et un parcours de réservation.
- **Un back-office** pour gérer les voyages, destinations, événements, utilisateurs, demandes et réservations, ainsi que les paramètres de l’agence.
- **Un tableau de bord** présentant des indicateurs, des graphiques et des listes d’activité.

Les données et opérations métier sont reliées à une API externe configurée par variables d’environnement.

## MY ROLE

**Full-Stack Developer**

- **Frontend :** développement des pages publiques et de l’interface d’administration.
- **Backend :** intégration des endpoints API pour l’authentification, le catalogue, les demandes, les réservations et les statistiques. Le code du serveur API n’est pas inclus dans ce dépôt.
- **Database :** consommation des données exposées par l’API. Le moteur de base de données et son schéma ne sont pas documentés dans ce dépôt.
- **UI/UX :** conception et réalisation des parcours de navigation, des formulaires, des tableaux de gestion et des vues de synthèse.
- **Déploiement :** le projet est préparé pour une exécution Next.js (`dev`, `build`, `start`) ; aucune plateforme de déploiement n’est spécifiée ici.

## TECHNOLOGIES

`Next.js 16` `React 19` `TypeScript` `Tailwind CSS 4` `Axios` `Zustand` `Recharts` `Motion` `Lucide React` `Sonner`

Le dépôt ne contient pas le backend ni la définition du schéma de base de données ; il ne permet donc pas de confirmer la technologie serveur ou le moteur de stockage utilisés.

## DESIGN & INTERFACE

L’interface comprend une vitrine avec navigation, visuels de destinations, cartes de voyages, partenaires et formulaires. Le back-office privilégie une navigation latérale, des tableaux, des fiches de gestion, des indicateurs et des graphiques. Les composants partagés et les états de chargement contribuent à garder une présentation cohérente entre les écrans.

> **Captures d’écran :** aucune capture d’écran de l’application n’est présente dans le dépôt. Ajouter des images réelles dans `docs/screenshots/`, puis remplacer les chemins ci-dessous.

<!-- Exemples à décommenter après ajout des captures :
![Accueil Casdak Voyage](docs/screenshots/accueil.png)
![Tableau de bord d’administration](docs/screenshots/dashboard.png)
![Détail d’un voyage](docs/screenshots/voyage-detail.png)
-->

## DEVELOPMENT

### Architecture

- Le routage s’appuie sur l’**App Router** de Next.js, organisé dans `app/` avec des groupes distincts pour les pages publiques et l’administration.
- Les interfaces sont assemblées à partir de composants réutilisables dans `components/`, avec des espaces dédiés au client, à l’administration et aux layouts.
- Les appels HTTP sont regroupés dans `services/` et passent par un client Axios partagé dans `lib/api.ts`.
- Les types métier se trouvent dans `types/` ; les états d’authentification et de devise sont gérés avec Zustand dans `store/`.

### Fonctionnalités et éléments techniques

- Catalogue de destinations et de voyages avec pages de détail accessibles par slug.
- Demandes de voyage et réservations avec statuts et formulaires dédiés.
- Gestion administrative des voyages, destinations, événements, utilisateurs, demandes, réservations et paramètres.
- Authentification avec tentative de renouvellement de session sur réponse `401` et parcours de récupération ou réinitialisation du mot de passe.
- Devise publique sélectionnable et persistée dans le stockage local du navigateur ; les prix sont récupérés/présentés selon la devise configurée.
- Tableau de bord alimenté par des statistiques et des graphiques issus de l’API.
- Chargement d’images depuis l’API, avec ressources locales dans `public/` pour les logos, partenaires et visuels de secours.

### Configuration

Le client utilise notamment `NEXT_PUBLIC_API_URL` pour l’API et `NEXT_PUBLIC_API_IMG_URL` pour construire les URL des images. Les valeurs réelles sont à définir dans l’environnement d’exécution ; aucun secret ne doit être ajouté à ce document.

Scripts disponibles : `npm run dev`, `npm run build`, `npm run start` et `npm run lint`.

## RESULT

Le résultat est une application couvrant le parcours public de découverte jusqu’à la demande ou la réservation, ainsi que les principaux outils internes de gestion d’une agence. Les éléments disponibles dans le dépôt ne fournissent pas de métriques d’usage, de résultats commerciaux ni d’informations confirmées sur la mise en production.
