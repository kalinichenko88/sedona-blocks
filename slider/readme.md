# Слайдер

Содержательный тип. [Пример](http://sedona.stage.constlab.ru/blocks/slider/).

## Особенности

* Работает с помощью [Swiper](http://idangero.us/swiper/)
* Подключается к `.scene` или располагается внутри
* Может вкладываться во внутрь других блочных типов
* По-умолчанию имеет тон всего сайта. Может принудительно иметь светлый и темный тон

## Настройка

```less
// Base

@slider-item-background-color: transparent;
@slider-item-background-repeat: no-repeat;
@slider-item-background-position: 50%;
@slider-item-background-size: cover;
@slider-max-width: @grid-breakpoints-xl;
@slider-bullet-width: 7px;
@slider-bullet-height: 7px;
@slider-bullet-radius: 50%;

// Darken

@slider-item-darken-color: @light-primary;
@slider-item-darken-background-color: @dark-primary;

// Lighten

@slider-item-lighten-color: @dark-primary;
@slider-item-lighten-background-color: @light-primary;
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

* `slider--darken` — делает слайдер в темных тонах
* `slider--lighten` — делает слайдер в светлых тонах
* `slider--scene` — делает слайдер сценой (добавляет отступы у итемов сверху и снизу)
