[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-brightgreen?logo=netlify)](https://goldgymworkout.netlify.app/)

## Live Demo
[View the deployed site on Netlify](https://goldgymworkout.netlify.app/)

![App Screenshot](Screenshot%20from%202025-05-14%2016-43-11.png)

# CodeAXWorlD Gym Web App

A modern, responsive gym exercise web application built with React. This app features categorized exercise GIFs, a beautiful dark theme, and a fully client-side experience—no external APIs required.

## Features
- Browse exercises by category: Back, Chest, Shoulders, Arms, Legs, Abs & Cardio
- Search exercises by name
- Responsive design for all devices
- Interactive and visually appealing UI
- Exercise details with GIFs and bullet-point tips
- No external API dependencies (all data and media are local)

## Getting Started

### Prerequisites
- Node.js (v16 or later recommended)
- npm (v8 or later)

### Installation
1. Clone this repository or download the source code.
2. Install dependencies:
   ```bash
   npm install
   ```
### Running the App
Start the development server:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure
- `public/assets/gifs/` — All exercise GIFs, organized by category
- `src/components/` — All React components (cards, navbar, search, etc.)
- `src/pages/` — Main pages (Home, ExerciseDetails)
- `src/App.css` — Main styling (dark theme, responsive, interactive)

## Customization
- To add new exercises, place GIFs in the appropriate folder under `public/assets/gifs/` and update `EXERCISE_GIFS` in `src/components/SearchExercises.js`.
- To change branding, update the logo in `public/assets/images/Logo.png` and the footer in `src/components/Footer.js`.

## Credits
- Exercise GIFs: Various open sources
- UI/UX: Designed and developed by CodeAXWorlD

---

Made with ❤️ by CodeAXWorlD


