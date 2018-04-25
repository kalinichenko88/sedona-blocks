# Слайдер

Блочный тип.

## Особенности

* Работает с помощью [Swiper](http://idangero.us/swiper/)
* Подключается к `.scene` или располагается внутри
* Может вкладываться во внутрь других блочных типов

## Разметка

```html
<div class="slider  swiper-container">
  <div class="slider__list  swiper-wrapper">
    <div class="slider__item  swiper-slide">
      
      <!-- Дополнительно -->
      <div class="slider__wrap">
        <div class="slider__content">
          …
        </div>
      </div>
      <!-- / -->
      
    </div>

    …
  </div>

  <div class="slider__pagination  swiper-pagination"></div>
</div>
```
