# Слайдер

Содержательный тип.

## Особенности

* Работает с помощью [Swiper](http://idangero.us/swiper/)
* Подключается к `.scene` или располагается внутри
* Может вкладываться во внутрь других блочных типов
* По-умолчанию имеет тон всего сайта. Может принудительно иметь светлый и темный тон

## Настройка

```less
@slider-item-background-color: transparent;
@slider-item-background-repeat: no-repeat;
@slider-item-background-position: 50%;
@slider-item-background-size: cover;

@slider-item-lighten-color: @dark-primary;
@slider-item-lighten-background-color: @light-primary;

@slider-item-darken-color: @light-primary;
@slider-item-darken-background-color: @dark-primary;

@slider-max-width: @grid-breakpoints-xl;

@slider-bullet-width: 7px;
@slider-bullet-height: 7px;
@slider-bullet-radius: 50%;
```

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

## Модификаторы

### `slider`

* `slider--scene` — делает слайдер сценой (добавляет отступы у итемов сверху и снизу)
* `slider--lighten` — делает слайдер в светлых тонах
* `slider--darken` — делает слайдер в темных тонах
