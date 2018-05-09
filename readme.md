# Блоки

Набор типовых блоков для верстки сайта.

[Гайдлайн по созданию](https://github.com/constlab/sedona-blocks/blob/master/guidelines.md).

## Типы

### Системные

Основа без которой не обойтись.

* [scene](https://github.com/constlab/sedona-blocks/tree/master/scene) ([пример](http://sedona.stage.constlab.ru/blocks/scene/))
* [wysiwyg](https://github.com/constlab/sedona-blocks/tree/master/wysiwyg) ([пример](http://sedona.stage.constlab.ru/blocks/wysiwyg/))

### Шаблонные

Самостоятельные блоки. Не могут вкладываться в другие.

* contact
* [footer](https://github.com/constlab/sedona-blocks/tree/master/footer)
* [header](https://github.com/constlab/sedona-blocks/tree/master/header)
* heading
* notice
* pricing
* testimonials
* teams

### Содержательные

Могут использоваться как самостоятельные блоки, так и вкладываться в другие, но не сами в себя.

* carousel
* collapse
* [grid](https://github.com/constlab/sedona-blocks/tree/master/grid) ([пример](http://sedona.stage.constlab.ru/blocks/grid/))
* [slider](https://github.com/constlab/sedona-blocks/tree/master/slider)
* tabs

### Инлайновые

Не могут использоваться как самостоятельные блоки, обязательно должны вкладываться в шаблонный или содержательный типы.

* [card](https://github.com/constlab/sedona-blocks/tree/master/card)
* form
* [social](https://github.com/constlab/sedona-blocks/tree/master/social)
* [table](https://github.com/constlab/sedona-blocks/tree/master/table)

## Установка

```
npm i sedona-blocks
```

## Подключение

В файле [gulpfile.js](https://github.com/constlab/sedona-basis/blob/master/gulpfile.js):

```js
…
main: [
  'node_modules/sedona-blocks/scene/scene.less',
  'node_modules/sedona-blocks/wysiwyg/wysiwyg.less',
  'node_modules/sedona-blocks/footer/footer.less',
  'node_modules/sedona-blocks/header/header.less',
  'node_modules/sedona-blocks/grid/grid.less',
  'node_modules/sedona-blocks/slider/slider.less',
  'node_modules/sedona-blocks/card/card.less',
  'node_modules/sedona-blocks/social/social.less',
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

## Настройка

Некоторые блоки имеют свой набор переменных. Их можно переопределить, добавив в конец файла [variables.less](https://github.com/constlab/sedona-basis/blob/master/src/less/variables.less):

```less
…
@footer-font-size: @font-size-smaller;
@footer-line-height: @line-height-smaller;
@footer-color: @dark-secondary;
…
```
