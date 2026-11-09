# Moustapha & Rouguyatou — site de mariage

## OVERVIEW

Ce projet est un site web de mariage conçu pour Moustapha et Rouguyatou. Il rassemble l’invitation, les informations pratiques, la confirmation de présence et les souvenirs photo dans une expérience accessible aux invités depuis un même site.

Le site répond à un besoin concret : communiquer les détails du mariage et centraliser les réponses des invités, en complément d’une invitation personnalisée.

## THE CHALLENGE

Les invités ont besoin de retrouver facilement la date, les lieux et les horaires de la cérémonie et du dîner, ainsi que de confirmer leur présence. Il fallait présenter ces informations de façon claire et chaleureuse, tout en proposant une expérience cohérente avec l’identité d’un événement personnel.

## THE SOLUTION

Une invitation web responsive composée d’une page d’accueil narrative, d’un formulaire RSVP relié à une API, d’une page répertoriant les confirmations et d’une galerie photo. Une enveloppe animée introduit l’expérience. Les détails pratiques comprennent des liens vers les cartes et un itinéraire Yango pour la cérémonie.

## MY ROLE

**Full-Stack Developer**

- **Frontend :** pages, composants React, navigation et interactions.
- **Backend :** intégration des appels à l’API pour les inscriptions, la liste des invités et le décompte. Le serveur API lui-même n’est pas présent dans ce dépôt.
- **Database :** la persistance des invités est déléguée à l’API externe ; le dépôt ne contient ni schéma ni moteur de base de données.
- **UI/UX :** conception et réalisation de l’expérience visuelle, du parcours RSVP et des mises en page adaptatives.
- **Deployment :** configuration de déploiement non documentée dans le dépôt ; aucune URL de production n’est fournie.

## TECHNOLOGIES

`Next.js 16` · `React 19` · `TypeScript` · `Tailwind CSS 4` · `Axios` · `Sonner` · `Lucide React`

L’URL de l’API est lue dans `NEXT_PUBLIC_API_URL`. La technologie utilisée côté serveur ou pour la base de données n’est pas précisée par le code de ce dépôt.

## DESIGN & INTERFACE

Direction visuelle éditoriale et romantique : photographies pleine largeur, palette sobre, typographie mêlant caractères serif et script, transitions douces et composants qui s’adaptent aux petits et grands écrans.

### Captures d’écran

Les images du projet sont disponibles dans `public/images/rouguy/`. Les captures d’écran de l’interface ne sont pas encore incluses dans le dépôt. Emplacements suggérés pour les ajouter :

| Écran | Emplacement suggéré | Page |
| --- | --- | --- |
| Accueil et enveloppe | `docs/screenshots/accueil.png` | `/` |
| Confirmation RSVP | `docs/screenshots/rsvp.png` | `/#rsvp` |
| Liste des invités | `docs/screenshots/invites.png` | `/guests` |
| Galerie et agrandissement photo | `docs/screenshots/galerie.png` | `/gallery` |

Après avoir ajouté les fichiers, les afficher ici avec, par exemple, `![Page d’accueil](docs/screenshots/accueil.png)`.

## DEVELOPMENT

### Architecture

- `app/` contient les routes App Router : accueil, galerie, liste des invités et page de démonstration de l’enveloppe.
- `components/home/` regroupe les sections de la page principale ; `components/pages/` compose la page d’accueil.
- `services/guests.service.ts` centralise les opérations sur les invités, et `lib/api.ts` configure le client Axios avec `NEXT_PUBLIC_API_URL`.
- `types/guest.d.ts` décrit le modèle d’invité consommé par l’interface.
- `public/images/` contient les photos et les éléments graphiques de l’invitation.

### Fonctionnalités et détails techniques

- Enveloppe d’invitation animée à l’arrivée sur le site.
- Page d’accueil composée d’un hero/carrousel, d’une invitation, d’un compte à rebours, de l’histoire du couple, du programme, du formulaire RSVP et d’un aperçu de la galerie.
- Formulaire RSVP avec nom et prénom obligatoires, téléphone facultatif, état de chargement et notifications de succès ou d’erreur. Le code traite également une réponse HTTP `409` comme une limite de capacité atteinte.
- Page invités alimentée par les routes API `/guests` et `/guests/count`, affichant confirmations, capacité et places restantes.
- Galerie responsive de onze photos avec ouverture d’une image en grand format.
- Animations d’apparition avec le composant local `Reveal` et retours utilisateur via `Sonner`.

Pour lancer l’application en développement, utiliser `npm install`, définir `NEXT_PUBLIC_API_URL` dans un fichier d’environnement local, puis exécuter `npm run dev`. Les pages dépendant de l’API nécessitent un service compatible disponible à cette adresse.

## RESULT

Le dépôt contient une application de mariage fonctionnelle côté interface, avec les parcours de consultation, de confirmation RSVP et de visualisation des invités connectés à une API configurable. Le code documente une capacité affichée de 70 invités et un mariage daté du 6 septembre 2026. Aucun chiffre réel de participation, retour utilisateur, URL publique ou preuve de déploiement n’est fourni ; ces résultats ne peuvent donc pas être confirmés ici.
