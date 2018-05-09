# Сцена

Секция, внутри которой строятся или находятся остальные блоки.

Системный тип. [Пример](http://sedona.stage.constlab.ru/blocks/scene/).

## Особенности

* Располагается только внутри `.main`
* Может идти только на одном уровне, то есть друг за другом. Вкладывать друг в друга нельзя
* По-умолчанию имеет тон всего сайта. Может принудительно иметь светлый и темный тон


## Настройка

```less
@scene-lighten-color: @dark-primary;
@scene-lighten-background: @light-primary;

@scene-darken-color: @light-primary;
@scene-darken-background: @dark-primary;
```

## Разметка

```html
<section class="scene">
  …
</section>

<section class="scene">
  …
</section>

<section class="scene">
  …
</section>

…
```

## Модификаторы

### `scene`

* `scene--lighten` — делает сцену в светлых тонах
* `scene--darken` — делает сцену в темных тонах
* `scene--fill` — добавляет отступ сверху
