# Micro frontend demo
Fiddling around with micro frontend architecture &amp; module federation

## Architecture & Project Structure
- _Container_ - React application orchestrating communication & rendering of the different micro apps
- _Auth_ - React application handling authentication for accessing the dashboard app.
- _Dashboard_ - Vue.js application rendering graphs & visual data. - Secured behind authentication flow (Auth app). 
- _Marketing_ - React application handling the rendering of marketing content

> The Container app is hosted on Azure Static Web App, while the other apps are hosted & served as static files on Azure Storage.
> Orchestrating the communication between the different micro apps using tiered routing, module federation & Azure CDN.

## Stack
- React (incl. React Router)
- Vue (incl. Vue router)
- Material UI,
- Webpack 5,
- Babel,
- Azure Static Web Apps,
- Azure Storage 
- Azure CDN
- Github Actions (CI / CD) 
