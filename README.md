1- Run `yarn add -D @404web/eslint-config eslint prettier`
</br>
</br>
2- Run `yarn global add eslint`
</br>
</br>
3- Add this to the `package.json` in the project's root 
```json
"eslintConfig": { "extends": "@404web/eslint-config" }
```
</br>
4- Install *eslint* and *prettier* VS Code Extentions
</br>
</br>
5- Open VS Code user settings and add the following
</br>
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
