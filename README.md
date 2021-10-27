1- Run `yarn add -D @404web/eslint-config eslint prettier`
</br>
2- Add this to the `package.json` in the project's root 
```json
"eslintConfig": { "extends": "@404web/eslint-config" }
```
  
</br>
3- Install *eslint* and *prettier* VS Code Extentions
4- Open VS Code user settings and add the following:
</br>

```json
"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
},
"eslint.validate": ["javascript", "typescript", "javascriptreact", "typescriptreact"]
```
