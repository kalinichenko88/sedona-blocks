# Карточка

Инлайновый тип. [Пример](http://sedona.stage.constlab.ru/blocks/card/).

## Особенности

* Располагается только внутри блочного типа
* По-умолчанию имеет тон всего сайта. Может принудительно иметь светлый и темный тон

## Настройка

```less
// Base

@card-border-width: 1px;
@card-border-radius: @radius;

// Darken

@card-darken-color: @light-primary;
@card-darken-background: @dark-primary;
@card-darken-border-color: @light-divider;

// Lighten

@card-lighten-color: @dark-primary;
@card-lighten-background: @light-primary;
@card-lighten-border-color: @dark-divider;
```

## Разметка

```html
<div class="card">
  <div class="card__frame">
    <div class="card__img">
      <img src="#" alt="">
    </div>
  </div>

  <div class="card__content  wysiwyg">
    …
  </div>
</div>
```

## Модификаторы

### `card`

* `card--dark-contour` — добавляет карточке темную обводку
* `card--light-contour` — добавляет карточке светлую обводку
* `card--darken` — делает карточку в темных тонах
* `card--lighten` — делает карточку в светлых тонах
