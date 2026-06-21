# Kaviya B — Pokémon Neon Theme React Portfolio

A sleek, premium single-page React portfolio featuring a **Pokémon-inspired dark neon** aesthetic (like a futuristic Pokédex / sci-fi command console). 

Built using React (Vite), Tailwind CSS v4, and Framer Motion, with high-performance canvas physics for trailing particle networks and Web Audio synth tones.

---

## ⚡ Tech Stack & Features

* **Framework:** React 19 (Vite 8)
* **Styling:** Tailwind CSS v4 (native `@tailwindcss/vite` integration)
* **Animations:** Framer Motion (page transitions, scroll reveals, draggable carousel physics, 3D tilt cards)
* **Particles:** Custom HTML5 2D Canvas engine (cyan & pink interactive spark networks reacting to mouse parallax)
* **Preloader:** Pokédex terminal diagnostic boot sequencer with synthesized retro 8-bit Audio Context clicks
* **ScrollSpy:** Native `IntersectionObserver` driving active headers on the glassmorphism navigation
* **Deployment:** Pre-configured for **Render** Static Sites

---

## 📁 Directory Structure & Assets

Before deploying or running in production, please place your custom assets in their designated folders:

### 1. Resume Document
Create a folder named `resume` inside the `/public/` directory and drop your PDF resume there:
* **Target Path:** `/public/resume/Kaviya_B_Resume.pdf`

### 2. Achievement & Profile Pictures
Create a folder named `images/achievements` inside the `/public/` directory and drop your images there (maintaining these exact filenames):
* **Profile Photo:** `/public/images/achievements/profile.jpg`
* **Budding Bright Engineer Award:** `/public/images/achievements/budding-engineer.jpg`
* **Smart India Hackathon (SIH 2025):** `/public/images/achievements/sih-certificate.jpg`
* **Paper Presentation — 1st Prize:** `/public/images/achievements/paper-presentation.jpg`

*(Note: The codebase has automatic image placeholder fallbacks built in. If the files are missing or named differently, the site will display clean terminal-inspired HUD placeholders so it won't crash.)*

---

## 🚀 Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   *The server will boot locally (typically at `http://localhost:5173`).*

3. **Verify Lint Checks:**
   ```bash
   npm run lint
   ```

4. **Compile Production Bundle:**
   ```bash
   npm run build
   ```
   *This compiles the site into high-performance static files within the `dist/` directory.*

---

## 🌐 Deploying to Render

This repository is pre-configured with a Render blueprint. To deploy:

1. Push your code (including your uploaded asset files in `/public/`) to a GitHub repository.
2. Log in to [Render.com](https://render.com).
3. Click **New +** and select **Blueprint**.
4. Link your GitHub repository. Render will automatically parse the `render.yaml` file and configure the service:
   * **Environment:** `Static Site`
   * **Build Command:** `npm run build`
   * **Publish Directory:** `dist`
5. Click **Apply** and wait for the build to finish! Your live URL will be generated.
