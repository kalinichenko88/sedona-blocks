# Form

Инлайновый тип. [Пример](http://sedona.stage.constlab.ru/blocks/form/).

## Настройка

```less
@form-control-border-width: 1px;
@form-control-border-color: @base-divider;
@form-control-border-radius: @radius;

@form-control-padding-top: 6px;
@form-control-padding-bottom: @form-control-padding-top;
@form-control-padding-left: @indent;
@form-control-padding-right: @form-control-padding-left;

@form-control-color: @base-primary;

@form-control-background-color: transparent;
@form-control-background-image: none;
@form-control-background-repeat: repeat;
@form-control-background-position: 0 0;
@form-control-background-size: auto auto;

@form-control-hover-border-color: @base-hint;
@form-control-hover-background-color: @form-control-background-color;

@form-control-focus-outline-width: 2px;
@form-control-focus-outline-color: @form-control-border-color;
@form-control-focus-border-color: @form-control-hover-border-color;
@form-control-focus-background-color: @form-control-hover-background-color;

@form-control-disabled-border-color: @form-control-border-color;
@form-control-disabled-background-color: @form-control-disabled-border-color;

@form-hint-color: @base-hint;

@form-breakpoints: @grid-breakpoints-md;
```

## Дополнительно

* Маски: [Inputmask](https://github.com/RobinHerbots/Inputmask)
