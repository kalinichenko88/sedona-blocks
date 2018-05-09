# Карточка

Инлайновый тип. [Пример](http://sedona.stage.constlab.ru/blocks/card/).

## Особенности

* Располагается только внутри блочного типа
* По-умолчанию имеет тон всего сайта. Может принудительно иметь светлый и темный тон

## Настройка

```less
@card-radius: @radius;

@card-border-width: 1px;
@card-border-color: @base-divider;

@card-lighten-color: @dark-primary;
@card-lighten-background: @light-primary;

@card-darken-color: @light-primary;
@card-darken-background: @dark-primary;
```

## Разметка

```html
<div class="card">
  <div class="card__wrap">
    <div class="card__frame">
      <div class="card__img">
        <img src="#" alt="">
      </div>
    </div>

    <div class="card__content  wysiwyg">
      …
    </div>
  </div>
</div>
```

## Модификаторы

### `card`

* `card--border` — делает карточке обводку
* `card--lighten` — делает карточку в светлых тонах
* `card--darken` — делает карточку в темных тонах
