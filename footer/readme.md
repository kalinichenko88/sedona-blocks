# Подвал

Шаблонный тип.

## Особенности

* Подключается к `<footer>` или располагается внутри него
* По-умолчанию элементы идут друг под другом. Начиная с ширины `@footer-breakpoints-desktop`, выстраиваются на 100% ширину родителя с воздухом между (space-between)

## Настройка

```bash
@footer-padding-top-smaller: 0;
@footer-padding-top-larger: 0;
@footer-padding-bottom-smaller: @indent-block-smaller;
@footer-padding-bottom-larger: @indent-block-larger;

@footer-font-size: inherit;
@footer-line-height: inherit;
@footer-color: inherit;
@footer-background: none;

@footer-link-color: @link-primary;

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
