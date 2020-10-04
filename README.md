# Prototyping-Builder <!-- omit in toc -->
> Static HTML Boilerplate

- [Install](#install)
- [Refer](#refer)
- [Usage](#usage)
- [File Structure](#file-structure)
  - [assets](#assets)
  - [pages](#pages)
  - [components](#components)
  - [scss](#scss)
- [Design pattern](#design-pattern)
  - [HTML Tag](#html-tag)
  - [CSS](#css)
- [Commit Formmat](#commit-formmat)
  
## Install

**安裝環境**

```
npm i 
```

**啟動專案**

```
yarn start
```


如果啟動失敗

- 刪除 `node_modules`
- 重新執行 `npm i`、`yarn start`

## Refer

- https://dev.to/caiojhonny/html-includes-with-gulp-js-2def
- https://github.com/getbase/starter/
  
## Usage

**打包css**

```
yarn build
``` 

打包後的資料夾為`public`

**載入共用html**

```html
  @@include('../components/header.html')
  <main>
    <!-- content -->
  </main>
  @@include('../components/footer.html')
```
## File Structure

- assets
- pages
- scss
- components
- demo
- dist


### assets

in assets folder , classifying file by type 

ex: `png`,`jpeg` is classifying to `images` folders


```
 - assets
    - images 
    - icons (icon...)
    - fonts 
```

### pages
one page one file,  `Avoid too much nesting`

```
 - pages
    - index.html (entry page)
    - about.html (about page)
    ...
```

### components
html 元件，可以重用的html


### scss
write css by `scss`, and file structure follow by `scss style`

this project base from [Sass Guidelines](https://sass-guidelin.es/#architecture)

## Design pattern 

### HTML Tag 

### CSS 

follow **BEM** : http://getbem.com/

more refer: 
- [MindBEMding – getting your head ’round BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

## Commit Formmat

**Refer**

- [Commit Lint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)

**Example**

`be careful error of empty char!!`

```sh
type(scope?): subject  #scope is optional
```
**Format** : 

```sh
<type> (scope): title
- do something
- do another 
````

Allowed type : `* required`

| type     | comment                             |
| -------- | ----------------------------------- |
| feat     | feature                             |
| fix      | bug fix                             |
| docs     | document                            |
| style    | formatting, missing semi colons,... |
| refactor | refactor                            |
| test     | when adding missing tests           |
| chore    | maintain                            |

**中文說明**

| type     | comment                                         |
| -------- | ----------------------------------------------- |
| feat     | 新功能（feature）                               |
| fix      | 修补bug                                         |
| docs     | 文档（documentation）                           |
| style    | 格式（不影响代码运行的变动）                    |
| refactor | 重构（即不是新增功能，也不是修改bug的代码变动） |
| test     | 增加测试                                        |
| chore    | 构建过程或辅助工具的变动                        |


Allowed scope : `not requried`

```
Scope can be anything specifying place of the commit change. 
```

| scope      | comment             |
| ---------- | ------------------- |
| components | componetns folder   |
| root       | root project config |

Allowed title : `* required`

```md
This is a very short description of the change.
- use imperative, present tense: “change” not “changed” nor “changes”
- don't capitalize first letter
- no dot (.) at the end
```
