## Prerequisites

- `nodejs` version: latest
- `npm` version: latest
- `yarn` version: latest

## Setup project

```shell
$ yarn install              # install dependencies 
$ yarn env                  # create .env file
```

**_Don't forget to setup `CSSComb`, `ESLint`, `.editorconfig` for productive and error-free development_**

#### Commands
- `yarn start:dev` - start application in development mode
- `yarn start:prod` - start application in production mode
- `analyze:bundle` - run analyzer for production build
- `analyze:eslint` - run eslint analyzer for the whole application
- `env` - create `.env` file from default

## .editorconfig

_We have `.editorconfig` file in our project root._

Config properties:

- `charset = utf-8` - use utf-8 encoding,
- `indent_style = space` - indent with spaces,
- `indent_size = 4` - indent size 4,
- `trim_trailing_whitespace = true` - will trim any useless trailing whitespaces,
- `insert_final_newline = true` - add new line at the end of the file;

##### Make sure that EditorConfig plugin is activated:
_Intellij Idea / WebStorm IDE -> Preferences/Settings -> Plugins -> EditorConfig_

## ESLint

_All config properties are in `.eslintrc` in our root._

1. You can see all ESLint errors in your console/terminal after every build or re-build of your project.
2. If there are some errors, project will be built anyway, errors are shown just for you :)
3. Before push your branch into remote repository be sure that there are no ESLint errors

For more information about rules you can check link below:

- `ES5/ES6 rules` - http://eslint.org/docs/rules/{rule-name}.html
- `JSX/React rules` - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/{rule-name}.md


##### If you have problem in WebStorm/Intellij Idea with warnings about "Empty tag" change settings:
_Preferences/Settings -> Editor -> Inspections -> HTML -> Empty Tag_

## CSSComb

_Open Intellij Idea / WebStorm IDE -> Preferences -> External Tools -> Add:_

- Name: CSSComb
- Program: `/path/to/node_modules/csscomb/bin/csscomb`
- Parameters: `$FilePath$`
- Working directory: `path/to/your/project`

_Go to Intellij Idea / WebStorm IDE -> Preferences -> Keymap -> Search for CSSComb -> Add Keyboard Shortcut (for example ALT+CMD+R for MacOS) -> write some css/scss -> use your keyboard shortcut_

