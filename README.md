# Template using Next.js + TypeScript

## What is inside?

- [Next.js](https://nextjs.org/)
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Stitches](https://stitches.dev/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Storybook](https://storybook.js.org/)

## Getting Started

```bash
npx degit https://github.com/explowstudio/nextjs-template [name]
```

### Install dependencies:

```bash
yarn
```

or

```bash
npm install
```

### Run development server

```bash
yarn dev
```

or

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

- `dev`: run development server
- `build`: creates the production build version
- `lint`: runs the linter in all components and pages
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Folder structure

It's important to note that the folder structure is just a base, and may vary between projects.

### Layouts Components

The `layouts` folder is used for the pages layouts.

```
- layouts
  - Layout
    - index.ts
    - Layout.tsx
    - Layout.styles.ts
    - Layout.stories.tsx
    - Layout.test.tsx
  - index.ts
```

### User Interface Components

The `ui` folder is used for the global components.

```
- ui
  - Component
    - index.ts
    - Component.tsx
    - Component.styles.ts
    - Component.stories.tsx
    - Component.test.tsx
  - index.ts
```
