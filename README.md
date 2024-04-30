Edu project to refresh and consolidate algorithms and data structures knowledge.

1.  run`npm install` - to install dev dependencies;
2.  run unit tests in a watch mode. The recommended way is using an IDE extension ([Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) if you are using VS Code). But you can also use additional commands from the list below if you prefer to show output in a terminal or in a browser based graphical UI.

Additional commands (unit testing):

-   `npm test` - to run unit tests in a watch mode;
-   `npm run test:ui` - to run unit tests in a watch mode with output both in a terminal and in a browser tab. It also generates coverage reports;
-   `npm run test:run` - to perform a single run of all tests;
-   `npm run coverage` - to generate coverage reports.

Additional commands (linting and formatting):

-   `npm run lint` - to lint code with ESLint;
-   `npm run lint:fix` - to lint and auto-fix code with ESLint;
-   `npm run format` - to format code with Prettier;
-   `npm run format:check` - to find formatting issues with Prettier (without formatting itself).

Recommended extentions (for VS Code users):

-   [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) - to run, debug, and watch Vitest tests directly in VS Code;
-   [Vitest Snippets](https://marketplace.visualstudio.com/items?itemName=deinsoftware.vitest-snippets) - to quickly write repeating code patterns like `describe` and `it` blocks;
-   [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig);
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint);
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
