# Pokédoke - a pokemon webbapplication built using React, Tailwind, Vite and PokeAPI

## Run instructions

cd pokeguesser
npm install
npm run dev

## Functionality

    Search - search for pokémons using PokeAPI
    Pokédex - store your pokémons in a pokédex (using localStorage)
    Game - classic "Who's that pokémon?" game where you get a silhuette of a pokémon and guess which pokémon it is

## PokeAPI - the api that provides all the data for the application

Uses GET methods to retrieve info about pokémons.
Used endpoints are: - /pokemon/{name} - /pokemon-species/{name} - /generation/{id} - /type/{name}

## React - for a component based SPA

Different part of each page is split up into smaller components that can be (mostly) reused anywhere in the application.

### Structure

src/

└── api/ # PokeAPI endpoint functions

└── components/ # Reusable UI components

└───── game/ # Game-specific components

└── pages/ # Main application pages

└── utils/ # Helper functions

└── App.jsx # Router and main app setup

## Tailwind CSS - for styling and design

Utility-first CSS framework providing pre-built classes for UI development. Enables responsive design and consistent styling
across components without writing custom CSS.

## Vite - for development and build tooling

Fast build tool and development server with hot module replacement for instant updates during development.

# Comparison between frameworks

According to ([stateofjs.com](https://2025.stateofjs.com/en-US/libraries/)) and surveys by ([stackoverflow](https://survey.stackoverflow.co/2025/technology)), React is as of 2025 the most used library for JS development, followed by Vue and Angular.
In a blog by ([GeeksForGeeks](https://www.geeksforgeeks.org/blogs/why-choose-react-for-web-development/)) it's stated that one of the main reasons to use React is due to its simplicity. Another article by ([flexmonster](https://www.flexmonster.com/blog/web-development/react-angular-vue-framework-guide/?gad_source=1&gad_campaignid=23446180074&gbraid=0AAAAADjH-3cTzQlNuVv0gQFJdkid3an9g&gclid=CjwKCAjwxITRBhBYEiwA6mZm7fMniX72y33DmOTo70gWm8aE5PA27dM5G28T7jTjEhGVu-CIxumPhBoCCA0QAvD_BwE)) describes the component based architecture as one of the key features, as it makes it possible to build complex elements with the use of several smalller components.

In comparison Angular is a much more full-fledged framework than React, not only focusing on the UI but the complete structure of tools and utils needed to build a web app. However, due to its extensive set of features Angular comes with a bit of a learning curve.

Vue is often seen as the middle ground between the former two, and its popularity is due to its syntax being easy to understand for those who have previous experience of JS and HTML.

Ultimately we choose to use React since it's the framework we have the most experience with, and according to the stats it's the most utilized framework. In addition to this, when applying for work, React is the frontend framework which is most often among the requirements.
