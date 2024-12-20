# Next.js React Application for INIA Biosciences

This README provides instructions for running, maintaining, and further developing the Next.js React application built during the internship with INIA Biosciences. The project uses TypeScript and SCSS for styling, with a centralized `main.scss` file to manage imports.

## Table of Contents

- [Project Setup](#project-setup)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Styling with SCSS](#styling-with-scss)
- [Adding New Features](#adding-new-features)
- [Best Practices](#best-practices)
- [FAQs](#faqs)

---

## Project Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher is recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Navigate to the project folder provided.

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

---

## Running the Application

### Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the application on `http://localhost:3000`. Open the URL in your browser to view the app.

### Build for Production

To create an optimized build for production:

```bash
npm run build
# or
yarn build
```

You can then start the production server using:

```bash
npm start
# or
yarn start
```

---

## Folder Structure

Here is an overview of the key folders in the project:

- **`pages/`**: Contains the application's pages as per the Next.js file-based routing system.
- **`components/`**: Reusable React components.
- **`styles/`**: Contains SCSS files for styling.
  - `main.scss`: Central SCSS file where all other SCSS files are imported. Imported once in `app.tsx`.
- **`public/`**: Static assets such as images, fonts, and icons.
- **`utils/`**: Utility functions or helpers used across the app.
- **`hooks/`**: Custom React hooks.
- **`api/`**: API calls or configurations.

---

## Styling with SCSS

This project uses SCSS for styling, with a centralized approach:

- **Centralized Styling**: All individual SCSS files are imported into `styles/main.scss`.
- **Global Import**: `styles/main.scss` is imported into `app.tsx` to apply styles globally.

### Adding New Styles

1. Create a new SCSS file in the `styles/` folder (e.g., `Button.scss`).
2. Import the new SCSS file into `main.scss`:
   ```scss
   @import './Button.scss';
   ```
3. The styles will now be applied globally through the `main.scss` import in `app.tsx`.

---

## Adding New Features

### Steps to Add a New Page

1. Create a new file in the `pages/` directory (e.g., `about.tsx`).
2. Add your React component for the page.
3. Navigate to `http://localhost:3000/about` to view the page.

### Steps to Add a New Component

1. Create a new file in the `components/` directory (e.g., `NewComponent.tsx`).
2. Build the component and export it.
3. Import the component where needed:
   ```typescript
   import NewComponent from '../components/NewComponent';
   ```

---

## Best Practices

- **Type Safety**: Use TypeScript to define types and interfaces for components and props.
- **Component Reusability**: Keep components small and focused.
- **Naming Conventions**: Use PascalCase for components and camelCase for variables.
- **Folder Organization**: Group related files together (e.g., components and their styles).
- **Code Quality**: Follow linting rules and use meaningful comments.
- **Version Control**: Commit changes frequently with descriptive commit messages.

---

