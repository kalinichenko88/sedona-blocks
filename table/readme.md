# Таблица

Инлайновый тип. [Пример](http://sedona.stage.constlab.ru/blocks/table/).

## Особенности

* Располагается только внутри блочного типа
* По-умолчанию — блочно-строчный (изменяется через [модификаторы](#Модификаторы)) и равен ширине контента внутри
* Если содержимое не помещается — появляется горизонтальная прокрутка
* Имеет встроенные иконки (указаны в разметке)
* По-умолчанию имеет тон всего сайта. Может принудительно иметь светлый и темный тон

## Настройка

```less
// Base

@table-head-font: normal @font-size-smaller/@line-height-smaller @font-family-primary;
@table-head-color: @base-secondary;
@table-divider: @base-divider;
@table-tr-hover-background-color: @table-divider;

// Darken

@table-darken-head-color: @light-secondary;
@table-darken-divider: @light-divider;
@table-darken-tr-hover-background-color: @table-darken-divider;

// Lighten

@table-lighten-head-color: @dark-secondary;
@table-lighten-divider: @dark-divider;
@table-lighten-tr-hover-background-color: @table-lighten-divider;
```

## Разметка

```html
<div class="table">
  <div class="table__wrap">
    <table>
      <thead>
        <tr>
          <th>…</th>
          …
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>…</td>
          <td><span class="table__icon  table__icon--no">Нет</span></td>
          <td><span class="table__icon  table__icon--yes">Есть</span></td>
          …
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

## Модификаторы

### `table`

* `table--lighten` — делает таблицу в светлых тонах
* `table--darken` — делает таблицу в темных тонах
* `table--block` — делает таблицу блочной, то есть растягивает на 100% доступной ширины

## Дополнительно

* Сортировка: [tablesort](https://github.com/tristen/tablesort)
