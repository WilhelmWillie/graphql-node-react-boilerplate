# GraphQL + Node + React Boilerplate
This is a generic boilerplate for a full stack web app that uses GraphQL + Node + React.

The main goal of this repository is for it to be a good template for most full stack web apps so developers can focus less on set-up and more on building cool projects. This boilerplate will be developed with adaptability in mind so developers can customize and extend upon the code for their own project needs.

In addition, this boilerplate will be designed to be production ready so you can fire it up on services like Heroku or Digital Ocean with minimal setup and headache (details to come soon).

If you use this boilerplate for any of your projects, feel free to let me know so I can add you to this README 🙂

## The Boilerplate App: Backlog

The app I built for this boilerplate is Backlog: an app that let's users create and share their to-do lists. Users can sign-in with a Google account, create a to-do list (a backlog), and follow other user's backlogs. This sample app will hopefully lay the foundation for future apps built with this tech stack.

## Tech Details
* Front-end
  * React
    * Context + Hook API for State Management
    * Apollo Client for GraphQL
    * Styled Components
  * Bootstrap
* Back-end
  * Node.js + Express
    * Apollo Server for GraphQL
    * Passport.js for Google Auth
    * Mongoose as a MongoDB ORM
* Database
  * MongoDB
