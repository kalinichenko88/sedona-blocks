# Подвал

Шаблонный тип.

## Особенности

* Подключается к `<footer>` или располагается внутри него
* По-умолчанию элементы идут друг под другом. Начиная с ширины `@footer-breakpoints-desktop`, выстраиваются на 100% ширину родителя с воздухом между (space-between)
* По-умолчанию имеет тон всего сайта. Может принудительно иметь светлый и темный тон

## Настройка

```less
@footer-padding-top-smaller: 0;
@footer-padding-top-larger: 0;
@footer-padding-bottom-smaller: @indent-block-smaller;
@footer-padding-bottom-larger: @indent-block-larger;

@footer-font-size: inherit;
@footer-line-height: inherit;

@footer-color: @base-primary;
@footer-background: none;
@footer-link-color: @link-primary;

@footer-lighten-color: @dark-primary;
@footer-lighten-background: @light-primary;
@footer-lighten-link-color: @footer-link-color;

@footer-darken-color: @light-primary;
@footer-darken-background: @dark-primary;
@footer-darken-link-color: @footer-link-color;

@footer-breakpoints-desktop: @grid-breakpoints-md;
@footer-max-width: @grid-breakpoints-xl;
```

## Разметка

```html
<footer class="footer">
  <div class="footer__wrap">
    <div class="footer__content">
      © «Рога и копыта», 2000–2018
    </div>
    
    <div class="footer__content">
      <a href="#">Конфиденциальность</a>
      ∼
      <a href="#">Правила пользования</a>
    </div>

    <div class="footer__content">
      Создано в&nbsp;<a href="https://constlab.ru" target="_blank">Const&nbsp;Lab</a> в&nbsp;2018&nbsp;году
    </div>
  </div>
</footer>
```

## Модификаторы

### `footer`

* `footer--lighten` — делает подвал в светлых тонах
* `footer--darken` — делает подвал в темных тонах
