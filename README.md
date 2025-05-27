# III-ACSAD | Case Study Compilation

A modern Single Page Application (SPA) built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), showcasing a collection of website case studies. Each card displays an overview, tech stack, and authors, with a focus on accessibility, modularity, and beautiful UI/UX.

## Features

- **Astro** for fast, modern static site generation
- **Tailwind CSS** for utility-first, responsive styling
- **Modular Components**: Reusable `Card`, `Dialog`, `Button`, and `TechBadge` components
- **Accessibility**: Keyboard navigation, ARIA roles, focus management, and semantic HTML
- **Dynamic Data**: Website and author data loaded from a JSON API file
- **Tech Stack Pills**: Color-coded badges for each technology
- **Multiple Authors**: Supports multiple authors per website, formatted as `SURNAME, Firstname`
- **Dialog Overlays**: Detailed view for each website with focus trap and keyboard support

## Project Structure

```
├── src/
│   ├── data/websites.json         # Website and author data (JSON)
│   ├── components/
│   │   ├── Card.astro           # Website card component
│   │   ├── Dialog.astro         # Website dialog overlay component
│   │   └── ui/
│   │       ├── Button.astro     # Reusable button component
│   │       └── TechBadge.astro  # Reusable tech stack badge
│   ├── layouts/
│   │   └── Layout.astro         # Main layout
│   ├── pages/
│   │   └── index.astro          # Main page
│   ├── styles/globals.css       # Tailwind and global styles
│   ├── types/index.ts           # Shared TypeScript types
│   └── utils/
│       └── techColors.ts        # Tech stack color mapping
├── public/                      # Static assets
├── README.md                    # Project documentation
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
$ git clone <repo-url>
$ cd <repo-directory>

# Install dependencies
$ pnpm install # or npm install or yarn install
```

### Development

```bash
# Start the development server
$ pnpm dev # or npm run dev or yarn dev
```

Visit [http://localhost:4321](http://localhost:4321) to view the app.

### Build

```bash
$ pnpm build # or npm run build or yarn build
```

## Customization

- **Add/Edit Websites:** Edit `src/api/websites.json` to add or update website entries.
- **Add/Edit Tech Colors:** Edit `src/utils/techColors.ts` to customize tech stack badge colors.
- **Add/Edit Authors:** Each website can have multiple authors, formatted as `{ "surname": "DOE", "firstName": "John" }`.

## Accessibility

- All interactive elements are keyboard accessible
- Dialog overlays use focus trap and can be closed with `Esc` or by clicking outside
- Proper ARIA roles and labels are used throughout

## Contributing

Pull requests and suggestions are welcome! Please open an issue or submit a PR.

## License

[MIT](LICENSE)

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
