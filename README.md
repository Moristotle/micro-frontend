# Micro frontend demo
Fiddling around with micro frontend architecture &amp; module federation
live demo: https://blue-cliff-0fcc74103.1.azurestaticapps.net/

## Architecture & Project Structure
- _Container_ - React Single Page application orchestrating communication, routing & rendering of the different micro apps.
- _Auth_ - React Single Page application handling authentication for accessing the dashboard app. </br> Renders content on /auth/sign & /auth/signup. 
  (click login & then sign in to redirect to dashboard)
- _Dashboard_ - Vue.js Single Page application rendering graphs & visual data. - Secured behind authentication flow (Auth app). </br> Renders content on /dashboard.
- _Marketing_ - React Single Page application handling the rendering of marketing content. Renders content on / & /pricing.

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
