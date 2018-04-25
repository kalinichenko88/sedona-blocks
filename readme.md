# Блоки

Набор типовых блоков для сайта.

[Гайдлайн по созданию](https://github.com/constlab/sedona-blocks/blob/master/guidelines.md).

## Типы

### Системные

* [scene](https://github.com/constlab/sedona-blocks/tree/master/scene)
* [wysiwyg](https://github.com/constlab/sedona-blocks/tree/master/wysiwyg)

### Блочные

* [header](https://github.com/constlab/sedona-blocks/tree/master/header)
* [footer](https://github.com/constlab/sedona-blocks/tree/master/footer)
* [grid](https://github.com/constlab/sedona-blocks/tree/master/grid)
* [slider](https://github.com/constlab/sedona-blocks/tree/master/slider)
* carousel
* contact

### Инлайновые

* [table](https://github.com/constlab/sedona-blocks/tree/master/table)
* card
* form
* social

## Установка

```js
npm i sedona-blocks
```

## Подключение

В файле [gulpfile.js](https://github.com/constlab/sedona-basis/blob/master/gulpfile.js):

```js
…
main: [
  'node_modules/sedona-blocks/header/header.less',
  'node_modules/sedona-blocks/footer/footer.less',
  'node_modules/sedona-blocks/scene/scene.less',
  'node_modules/sedona-blocks/wysiwyg/wysiwyg.less',
  'node_modules/sedona-blocks/grid/grid.less',
  'node_modules/sedona-blocks/slider/slider.less',
  'node_modules/sedona-blocks/table/table.less',
  'src/less/main.less'
]
…
app: [
  'src/js/app.js',
  'node_modules/sedona-blocks/header/header.js',
  'node_modules/sedona-blocks/slider/slider.js',
  'node_modules/sedona-blocks/table/table.js'
]
…
```
