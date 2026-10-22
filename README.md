# UdeM AI Website v3 (Astro + TUI + Markdown Collections)

This is the **v3** website for **UdeM AI** (Artificial Intelligence Club @ Université de Montréal), built with **Astro** and **Markdown Content Collections** and styled in a **Terminal User Interface (TUI)** aesthetic inspired by [QUARCC](https://www.quarcc.com/).

## Key Features

1. **Multi-Page QUARCC-Style TUI Architecture**:
   - **Main Page (`/`, `/en`, `/fr`)**: Displays the two-column TUI Hero Dashboard with the ASCII logo and **Posts & Meeting Notes** on the left, paired with `── Club Details ──`, `── System Navigation ──`, and `── Project Status ──` on the right.
   - **Dedicated Section Pages**: Each section lives on its own individual page in both English and French:
     - `/about` (`/fr/about`) — Club mission, Focus tracks, and AA-1207 session details
     - `/events` (`/fr/events`) — Upcoming & past sessions and workshops
     - `/papers` (`/fr/papers`) — Paper of the Week & previous papers archive
     - `/presentations` (`/fr/presentations`) — Workshop slide decks (PDFs with inline viewer)
     - `/projects` (`/fr/projects`) — Student research lab tracks
     - `/teams` (`/fr/teams`) — Executive Council & Club Advisors
     - `/join` (`/fr/join`) — Member, executive, and sponsor/collaboration tracks
     - `/faq` (`/fr/faq`) — Frequently asked questions
     - `/posts/[slug]` (`/fr/posts/[slug]`) — Individual articles and meeting notes
   - **Interactive Bottom CLI Prompt**: Type commands (`help`, `home`, `about`, `events`, `papers`, `presentations`, `projects`, `teams`, `join`, `faq`, `ls`, `cd <page>`, `cat <page>.md`, `lang`, `discord`, `clear`) into the `[user@udem-ai ~]$` prompt at the bottom of the screen to navigate between pages.
2. **100% Markdown-Driven Content (`src/content/`)**:
   - **Posts / Meeting Notes (`src/content/posts/*.md`)**: Add a new `.md` file to publish a new meeting note or article on the main page and at `/posts/<slugId>` (`/fr/posts/<slugId>`).
   - **Papers (`src/content/papers/*.md`)**: Set `featured: true` on any paper to make it the **Paper of the Week** on `/papers`, or `featured: false` to list it in the archive.
   - **Events (`src/content/events/*.md`)**: Add or edit upcoming (`upcoming: true`) or past (`upcoming: false`) sessions on `/events`.
   - **Presentations (`src/content/presentations/*.md`)**: Drop slide PDFs in `public/presentations/` and add a `.md` entry to list them on `/presentations`.
   - **Team Members (`src/content/members/*.md`)**: Add or update Executive Council (`role: "executive"`) and Club Advisors (`role: "advisor"`) on `/teams`.
   - **Prose Pages (`src/content/sections/*.md`)**: Edit `about`, `projects`, `join`, and `faq` in English (`*-en.md`) and French (`*-fr.md`).

## Quick Start

```bash
# Start local development server
npm run dev

# Build static production site into ./dist
npm run build

# Preview production build locally
npm run preview
```
