# Ndeanasia Starson Macha — Portfolio

A personal portfolio site built with React + Vite + Tailwind CSS, featuring a fixed sidebar with scroll-tracking navigation and a dark/light mode toggle (saved between visits).

## Run it locally

You need [Node.js](https://nodejs.org) installed (version 18 or newer).

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Edit the content

All of the CV content lives in one file, so you don't need to touch the components to update text:

```
src/data/profile.js
```

Change the name, summary, experience, leadership history, education, skills, languages, hobbies, or referees there.

To change the profile photo, replace `src/assets/profile.jpg` with a new image (keep the same file name, or update the `import profilePhoto from '../assets/profile.jpg'` line in `src/components/Sidebar.jsx`). The same photo is also used as the browser tab icon — update `public/favicon.jpg` too if you change it.

To change the WhatsApp number, edit `WHATSAPP_NUMBER` at the top of `src/components/WhatsAppButton.jsx` (digits only, country code first, no `+` or spaces).

## Deploy to GitHub Pages

1. Create a new GitHub repository (for example, `ndeanasia-portfolio`).
2. Push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Open `vite.config.js` and set `base` to match your repo name:
   ```js
   base: '/<repo-name>/',
   ```
   (If you're deploying to a custom domain, or to `<your-username>.github.io` as the root site, set `base: '/'` instead.)
4. Install the deploy dependency (already listed in `package.json`) and publish:
   ```bash
   npm install
   npm run deploy
   ```
   This builds the site and pushes the `dist` folder to a `gh-pages` branch.
5. In your GitHub repo, go to **Settings → Pages**, and set the source to the `gh-pages` branch.
6. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a couple of minutes.

## Project structure

```
src/
  components/     Sidebar, ThemeToggle, and each content section
  context/        Dark/light mode state (ThemeContext.jsx)
  data/           All CV content (profile.js) — edit this to update text
  assets/         Profile photo
  App.jsx         Assembles the page
  main.jsx        Entry point
```
