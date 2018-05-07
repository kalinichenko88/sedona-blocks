# Таблица

Инлайновый тип.

## Особенности

* Располагается только внутри блочного типа
* По-умолчанию — блочно-строчный (изменяется через [модификаторы](#Модификаторы)) и равен ширине контента внутри
* Если содержимое не помещается — появляется горизонтальная прокрутка
* Имеет встроенные иконки (указаны в разметке)

## Настройка

```less
@table-divider: @base-divider;

@table-head-font: normal @font-size-smaller/@line-height-smaller @font-family-primary;
@table-head-color: @base-secondary;
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

### `.table`

* `table--block` — делает таблицу блочной, то есть растягивает на 100% доступной ширины

## Дополнительно

* Сортировка: [tablesort](https://github.com/tristen/tablesort)
