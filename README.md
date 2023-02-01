# ts-template
This project aims to build a template to start clean TypeScript projects from scratch with a standard folder structure, and Jest, Cucumber, ESLint and Prettier already configured for TS.

You can clone this repository or apply the below walkthrough to get a similar results.
Some configurations are specific to the IDE I use (WebStorm) and should be adapted to yours.

**WARNING: this template is not yet functional!!**

# Project setup
For control purposes, we will set up the project from scratch and doing it mostly manually, hence the detailed walkthrough.
The IDE used is WebStorm and the terminal is PowerShell. Here are the main steps:  
https://www.jetbrains.com/help/webstorm/application-development-guidelines.html

1. Initialise a NodeJs project in WebStorm
1. Create the folder structure



2. Setup the TS mode
2. Setup the Js/Ts standard  
   https://standardjs.com/#can-i-use-a-javascript-language-variant-like-flow-or-typescript
2. Setup the linter and auto-formatter
2. Setup the unit tests framework for TS
   https://www.jetbrains.com/webstorm/guide/tutorials/react_typescript_tdd/testing/
3. Setup the Cucumber test framework for TS


## folder structure

The project structure is as followed (excluded node_modules):

    /  
      /bin - script, helpers, binaries
      /config - global configurations
      /dist - released code (to be pushed to BitBurner)  
      /doc
        /feature
      /src  
        /module-X  
          /app-use-case
          /config - module configuration
          /domain  
          /entity   
          /port  
        /infra  
          /driven-side  
          /driver-side
      /test
        /unit
        /cucumber

To create above the structure, run the following command

    mkdir bin, config, dist, doc/feature, infra/driven-side, infra/driver-side, test/unit, test/functional,  
          src/module-X/app-use-case, src/module-X/config, src/module-X/domain, src/module-X/entity, src/module-X/port

## Initialise a NodeJs project
For control purposes, we will set up the project from scratch and doing it mostly manually, hence the detailed description.
The IDE used is WebStorm.

1. Start a new project

## Setup Eslint with Prettier
Setup Google coding standard and checks at IDE level  
Note: TSLint is deprecated from 2019. Use instead ESLint for TypeScript

       npm install --save-dev eslint
       npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin 

In the .eslintrc configuration file or under eslintConfig in package.json, add:

       {
         "parser": "@typescript-eslint/parser",
         "plugins": ["@typescript-eslint"],
         "extends": ["plugin:@typescript-eslint/recommended"]
       }
Ref.:   
https://www.jetbrains.com/help/webstorm/linting-typescript.html
https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_linters_eslint_install

2. Setup prettier at IDE level

       npm install --save-dev --save-exact prettier
       npm install --save-dev eslint-config-prettier

   Then add "prettier" at the end of the "extends" array

        {
           "extends": [
             "some-other-config-you-use",
             "prettier"
           ]
        }

   Ref.:   
   https://www.jetbrains.com/help/webstorm/prettier.html#ws_prettier_install  
   https://github.com/prettier/eslint-config-prettier

3. Start a NodeJs project on WebStorm.
4. Initialize the Node at project level

       npm init

5. Configure the project in ``package.json``

6. Install Jest

       npm install --save-dev jest

7. Configure Jest in ``package.json``

8. Install typescript tools

       npm install --save-dev typescript

9. Initialize the Node at project level

       npx tsc --init

10. Configure Typescript in ``tsconfig.json``

11. Install Jest for typescript

        npm install --save-dev ts-jest
        npm install --save-dev ts-node

12. Configure ``ts-jest`` and ``ts-node``

13. Install cucumber for js

        npm install --save-dev cucumber

14. Configure cucumber for js

15. Install cucumber for ts

16. Configure cucumber for ts

npm install --save-dev gts
npx gts init





