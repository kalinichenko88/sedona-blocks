# Гайдлайн по созданию блоков

## Простейшая разметка блока

```html
<div class="%BLOCK%">
  <div class="%BLOCK%__wrap">
    <div class="%BLOCK%__content  wysiwyg">
      …
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

### Примеры элементов

```html
<div class="%BLOCK%">
  <div class="%BLOCK%__wrap">

    <!-- Заголовок, описывающий смысл блока -->
    <div class="%BLOCK%__title  wysiwyg">
      <h2>%ЗАГОЛОВОК%</h2>
    </div>

    <!-- Контент -->
    <div class="%BLOCK%__content  wysiwyg">
      …
    </div>

    <!-- Список -->
    <div class="%BLOCK%__list">
      <div class="%BLOCK%__item">
        <div class="%BLOCK%__content  wysiwyg">
          …
        </div>
      </div>

      <div class="%BLOCK%__item">
        <div class="%BLOCK%__content  wysiwyg">
          …
        </div>
      </div>

      …
    </div>

  </div>
</div>
```
