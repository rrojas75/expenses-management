# Expense Management

A modern Angular project demonstrating best practices in architecture, state management, routing, and developer tooling. This repository is designed as a reference for scalable Angular applications, focusing on maintainability, modularity, and developer productivity.

---

## Features

- **Best-practice Angular project structure**
- **Modular feature organization**
- **Centralized and secure Angular routing**
- **Authentication with route guards**
- **State management using NgRx with recommended structure**
- **Prettier configuration for consistent code formatting**
- **VS Code editor setup for faster development**
- **Reusable shared components**
- **Separation of core, shared, and feature modules**

---

## Project Structure

```
src/
│
├── app/
│   ├── core/         # Singleton services, guards, interceptors
│   ├── shared/       # Reusable components, directives, pipes
│   ├── features/     # Feature modules (dashboard, expenses, auth, etc.)
│   ├── app.routes.ts # Centralized routing configuration
│   └── app.module.ts
│
├── assets/
├── environments/
└── ...
```

---

## State Management

- Uses **NgRx** for scalable, predictable state management.
- Follows best practices for organizing actions, reducers, selectors, and effects by feature.
- Encourages separation of state logic from UI components.

---

## Routing

- Centralized routing in `app.routes.ts`
- Feature modules use their own routing modules
- Route guards for authentication and access control
- Lazy loading for feature modules

---

## Developer Tooling

- **Prettier** for automatic code formatting (see `.prettierrc`)
- **VS Code** recommended extensions in `.vscode/extensions.json`
- Editor settings for Angular and TypeScript development

---

## Getting Started

1. **Install dependencies**

   ```sh
   npm install
   ```

2. **Run the development server**

   ```sh
   ng serve
   ```

3. **Open in browser**
   ```
   http://localhost:4200
   ```

---

## Recommended VS Code Extensions

See `.vscode/extensions.json` for recommended extensions:

- [Angular Language Service (`angular.ng-template`)](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or questions.

---

## License

MIT
