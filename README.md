1- Run 
```console 
yarn add -D @404-software/eslint-config eslint@8.18.0 prettier@2.7.1
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
