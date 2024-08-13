# Book store application with TDD, ATDD

## 🎉 Tech stack

- **React** - JavaScript library for building user interfaces.
- **Vite** - Fast, opinionated frontend build tool.
- **TypeScript** - Typed superset of JavaScript that compiles to plain JavaScript.
- **Redux** - Predictable state manager to managing application state.
- **Cypress** - UI testing framework for E2E test.
- **Material UI** - Open-source react component library.
- **ESLint** - Pluggable linting utility for TypeScript.
- **json-server** - Rapid protoyping, mocking and testing of web application.

### Installation

```shell
pnpm install
```

### Running the application

```shell
pnpm run dev
```

### Test

```shell
# unit tests
pnpm run test

# unit test in watch mode
pnpm run test:watch

# unit test with coverage
pnpm run test:cov
```

## 📚 High level feature list + Acceptance criteria

- [ ] **Book list**
  - [ ] `As a user, I want to see a list of books, so that I can learn something new`
  - [ ] Acceptance criteria
    - [ ] `Given there are 10 books in the system, a user should view 10 items on the page`
    - [ ] `Each item should have the following information: book name, author, price and rating`
- [ ] **Book detail**
  - [ ] `As a user, I want to see the details of a book, so that I can know what it's about`
  - [ ] Acceptance criteria
    - [ ] `A user can click an item in the book list and is redirected to details page`
    - [ ] `Detail page should display the book name, author, price, description and any reviews`
- [ ] **Search book**
  - [ ] `As a user, I want to search a book by its name, so that I can find what I'm interested in`
  - [ ] Acceptance criteria
    - [ ] `User is able to type a value as a search word in the input`
    - [ ] `Books with the predefined search term will be displayed in the book list`
- [ ] **Book review**
  - [ ] `As a user, I want to able to add a review to a book I have read previously, so that other users who have the same interests can decide to read it`
  - [ ] Acceptance criteria
    - [ ] `A user can read the reviews on the details page`
    - [ ] `A user can post a review to a particular book`
    - [ ] `A user can edit the review they have posted`

## 🚀 React + TypeScript + Vite Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
