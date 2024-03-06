# Welcome to Moovee World

This template provides a minimal guide to get Movee World application to run on your local server.

Follow these steps in order:

- Navigate to code on this repository page and download the zip folder of this application.
- When download is completed, extract the folder and open with visual studio code or any other code editor.
- Next, open the terminal on your code editor, make sure the path is correct, enter this command "npm install" to download all the node packages and dependencies.
- When download is completed successfully, enter this command "npm run dev" and navigate to the url on the terminal to view the app.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
