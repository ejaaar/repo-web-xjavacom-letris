# X-Javacom — Company Profile (React + Tailwind)

Minimal responsive company profile built with React + Tailwind CSS.

Run locally:

```bash
npm install
npm run dev
```

Tailwind is preconfigured in `tailwind.config.cjs` and styles in `src/index.css`.

Environment & Contact Form

- Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ENDPOINT` to your Formspree endpoint (or another form endpoint).

Git & Branching

- Create a branch and commit the current work:

```bash
git init
git add .
git commit -m "Initial X-Javacom site scaffold"
git branch -M feature/site
```

Deployment

- This project works well with Vercel or Netlify. Deploy by connecting the repository and using the default build command `npm run build` (or use `npm run dev` for local preview).

Form behavior

- If `VITE_FORMSPREE_ENDPOINT` is set the contact form will POST JSON to that endpoint.
- Without an endpoint the form shows a demo alert and logs the payload to the console.
