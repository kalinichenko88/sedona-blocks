# Блоки [дизайн-системы](https://github.com/constlab/sedona)

Набор типовых блоков для сайта.
[Гайдлайн по созданию](https://github.com/constlab/sedona-blocks/blob/master/guidelines.md).

## Типы

### Системные

* [scene](https://github.com/constlab/sedona-blocks/tree/master/scene)
* [wysiwyg](https://github.com/constlab/sedona-blocks/tree/master/wysiwyg)

### Блочные

* [grid](https://github.com/constlab/sedona-blocks/tree/master/grid)
* header
* footer
* contacts
* features
* teaser

## Инлайновые

* form
* table

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
  'node_modules/sedona-blocks/grid/grid.less',
  'node_modules/sedona-blocks/wysiwyg/wysiwyg.less',
  …
  'src/less/main.less'
]
…
```
