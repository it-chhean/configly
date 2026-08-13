# Configly

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)

**Configly** is a fast, browser-based configuration file converter. Paste or upload a config file and instantly convert it between **JSON, YAML, XML, TOML, Java Properties, and ENV** — no installs, no server uploads, no account required.

🔗 **Live demo:** [configly.onrender.com](https://configly.onrender.com/)

---

## Table of Contents

- [Why Configly](#why-configly)
- [Supported Formats](#supported-formats)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Why Configly

- 🔒 **100% Private & Secure** — All conversions happen client-side in your browser. Your configuration data never leaves your device.
- ⚡ **Instant Conversion** — Real-time output as you type, no processing delay.
- 🧑‍💻 **Developer Friendly** — Built for the config formats developers actually deal with day to day.

## Supported Formats

| Format | Typical Extension |
|---|---|
| JSON | `.json` |
| YAML | `.yaml`, `.yml` |
| XML | `.xml` |
| TOML | `.toml` |
| Java Properties | `.properties` |
| ENV | `.env` |

More formats may be added over time — see [Contributing](#contributing) if you'd like to help add one.

## Use Cases

- **Deployment & Migration** — Convert between Java Properties, JSON, XML, and TOML for Kubernetes, Docker, CI/CD pipelines, and framework migrations (e.g. Spring Boot).
- **Cross-Platform & Secure Local Conversion** — Share configuration across stacks (Python, Java, Node.js) and safely convert sensitive values (API keys, credentials) entirely in-browser, with nothing sent to a server.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4, [shadcn/ui](https://ui.shadcn.com/), Base UI
- **Icons:** lucide-react
- **Conversion engine:** `js-yaml`, `fast-xml-parser`, `smol-toml`, `dotenv`
- **Package manager:** [Bun](https://bun.sh/) (npm also supported)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (or [Bun](https://bun.sh/) — recommended, since the project ships a `bun.lock`)

### Installation

```bash
git clone https://github.com/it-chhean/configly.git
cd configly

# install dependencies
bun install
# or
npm install
```

### Run the dev server

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The converter tool itself lives at `/tools`.

## Available Scripts

| Command | Description |
|---|---|
| `dev` | Start the local development server |
| `build` | Create a production build |
| `start` | Serve the production build |
| `lint` | Run ESLint over the project |

## Project Structure

```
configly/
├── app/
│   ├── layout.tsx           # Root layout (Navbar/Footer + fonts)
│   ├── page.tsx              # Landing page
│   ├── not-found.tsx
│   └── tools/
│       └── page.tsx          # /tools — the converter UI
├── components/
│   ├── feature/               # ConvertButton, FeatureCard, InputField, UseCaseCard
│   ├── layout/                 # Navbar, Footer
│   ├── sections/                 # Landing page sections (Hero, Feature, FAQ, Reference, ...)
│   └── ui/                        # Reusable UI primitives (accordion, arrow link, ...)
├── data/                            # Static content: features, FAQs, use cases, reference data
├── lib/
│   ├── converter.ts                  # Core format-conversion engine
│   └── utils.ts
├── types/                              # Shared TypeScript types
└── public/assets/                        # Images & static assets
```

The conversion logic (parsing and generating each format) is centralized in [`lib/converter.ts`](./lib/converter.ts) — that's the best place to start if you want to understand or extend how formats are handled.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request — it covers local setup, coding conventions, and the PR process.

## License

No license has been added to this repository yet. Until one is added, all rights are reserved by the author — please reach out before reusing or redistributing this code.