# Подвал

Блочный тип.

## Особенности

* Подключается к `<footer>` или располагается внутри него
* По-умолчанию имеет максимальную для контента ширину — `@grid-breakpoints-xl`
* По-умолчанию элементы идут друг под другом. Начиная с ширины `@grid-breakpoints-md`, выстраиваются на 100% ширину родителя с воздухом между
* Имеет встраиваемые дополнительные элементы (указаны в разметке)

## Разметка

```html
<footer class="footer">
  <div class="footer__wrap">
    <div class="footer__copyright">
      © «Рога и копыта», 2000–2018
    </div>
    
    <!-- Дополнительно -->
    <div class="footer__extra">
      <a href="#">Конфиденциальность</a>
      ∼
      <a href="#">Правила пользования</a>
    </div>
    <!-- / -->

    <div class="footer__developer">
      Создано в&nbsp;<a href="//constlab.ru" target="_blank">Const&nbsp;Lab</a> в&nbsp;2018&nbsp;году
    </div>
  </div>
</footer>
```
