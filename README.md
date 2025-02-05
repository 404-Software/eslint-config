1- Run
```console
yarn add -D @404-software/eslint-config @typescript-eslint/eslint-plugin@^8.23.0 @typescript-eslint/parser@^8.23.0 eslint@^8.18.0 eslint-config-prettier@^10.0.1 eslint-plugin-canonical@^5.1.3 eslint-plugin-prettier@^5.2.3 eslint-plugin-react@^7.37.4 eslint-plugin-react-hooks@^5.1.0 eslint-plugin-sort-imports-es6-autofix@^0.6.0 eslint-plugin-tailwindcss@^3.18.0 prettier@^3.4.2
```

OR

```console
npm i @404-software/eslint-config @typescript-eslint/eslint-plugin@^8.23.0 @typescript-eslint/parser@^8.23.0 eslint@^8.18.0 eslint-config-prettier@^10.0.1 eslint-plugin-canonical@^5.1.3 eslint-plugin-prettier@^5.2.3 eslint-plugin-react@^7.37.4 eslint-plugin-react-hooks@^5.1.0 eslint-plugin-sort-imports-es6-autofix@^0.6.0 eslint-plugin-tailwindcss@^3.18.0 prettier@^3.4.2 --save-dev
```
</br>

2- Add this to the `package.json` in the project's root
```json
"eslintConfig": { "extends": "@404-software/eslint-config" }
```
</br>

3- Install *eslint* and *prettier* VS Code Extentions
</br>

4- Open VS Code user settings and add the following
</br>


```json
"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
},
"eslint.validate": ["javascript", "typescript", "javascriptreact", "typescriptreact"]
```

</br>
</br>
</br>

Note: To lint all the project files, run `eslint . --ext .ts --ext .tsx --fix`
