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

В контентной части крайне желательно присутствие дополнительного блока [`wysiwyg`](https://github.com/constlab/sedona-blocks/tree/master/wysiwyg), отвечающего за форматирование.

### Варианты размещения

```html
<!-- Внутри сцены. В этом случае разные или одни и те же блоки могут идти друг за другом -->

<section class="scene">
  <div class="%BLOCK%">
    …
  </div>
</section>


<!-- На уровне сцены. В этом случае блок может быть только один. Повторяться могут только его внутренние части -->

<section class="scene  %BLOCK%">
  …
</section>
```
