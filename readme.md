# Блоки

Набор типовых блоков для верстки сайта.

[Гайдлайн по созданию](https://github.com/constlab/sedona-blocks/blob/master/guidelines.md).

## Типы

### Системные

Основа без которой не обойтись.

* [scene](https://github.com/constlab/sedona-blocks/tree/master/scene)
* [wysiwyg](https://github.com/constlab/sedona-blocks/tree/master/wysiwyg)

### Шаблонные

Самостоятельные блоки. Не могут вкладываться в другие.

* [header](https://github.com/constlab/sedona-blocks/tree/master/header)
* [footer](https://github.com/constlab/sedona-blocks/tree/master/footer)
* contact
* testimonials
* pricing
* teams
* heading

### Сущности

Могут использоваться как самостоятельные блоки, так и вкладываться в другие, но не сами в себя.

* [slider](https://github.com/constlab/sedona-blocks/tree/master/slider)
* [grid](https://github.com/constlab/sedona-blocks/tree/master/grid)
* carousel
* collapse
* card

### Инлайновые

Не могут использоваться как самостоятельные блоки, обязательно должны вкладываться в блочный или инлайно-блочный тип.

* [table](https://github.com/constlab/sedona-blocks/tree/master/table)
* form
* social

## Установка

```
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
