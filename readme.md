# Блоки

## Типы

### Системные
Строящие лейаут

* [scene](https://github.com/constlab/sedona-blocks/tree/master/scene)

### Блочные
То есть цельные большие блоки, занимаемые всю ширину экрана

* contacts
* 
* features
* teaser

### Встраиваемые

* form
* table
* [wysiwyg](https://github.com/constlab/sedona-blocks/tree/master/wysiwyg)

## Установка

`$ npm i sedona-blocks --save`

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
