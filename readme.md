# Блоки [дизайн-системы](https://github.com/constlab/sedona)

Набор типовых блоков для сайта.

* header
* footer
* [scene](https://github.com/constlab/sedona-blocks/tree/master/scene)
* contacts
* features
* teaser
* form
* table
* [wysiwyg](https://github.com/constlab/sedona-blocks/tree/master/wysiwyg)

## Установка

```js
npm i sedona-blocks
```

## Подключение

В файле [gulpfile.js](https://github.com/constlab/sedona-basis/blob/master/gulpfile.js):

```js
…
main: [
    'node_modules/sedona-blocks/scene/scene.less',
    'node_modules/sedona-blocks/wysiwyg/wysiwyg.less',
    …
    'src/less/main.less'
]
…
```
