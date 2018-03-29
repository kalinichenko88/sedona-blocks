# Рекомендации по созданию блоков

## Простейшая разметка блока

```html
<div class="%BLOCK%">
  <div class="%BLOCK%__wrap">
    <div class="%BLOCK%__content  wysiwyg">
      
    </div>
  </div>
</div>
```

Где `%BLOCK%` — уникальное имя блока, `%BLOCK%__wrap` — обертка (обычно задающая максимальную ширину) и `%BLOCK%__content` — контентная часть.

**В контентной части обязательно присутствие дополнительного блока `wysiwyg`.**

### Варианты размещения

```html
<!-- Внутри сцены -->

<section class="scene">
  <div class="%BLOCK%">
    …
  </div>
</section>


<!-- На уровне сцены -->

<section class="scene  %BLOCK%">
  …
</section>
```
