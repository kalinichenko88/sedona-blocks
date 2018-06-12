# Form

Инлайновый тип. [Пример](http://sedona.stage.constlab.ru/blocks/form/).

## Настройка

```less
@form-control-color: @base-primary;

@form-control-border-width: 1px;
@form-control-border-color: @base-divider;
@form-control-border-radius: @radius;

@form-control-padding-top: 6px;
@form-control-padding-bottom: @form-control-padding-top;
@form-control-padding-left: @indent;
@form-control-padding-right: @form-control-padding-left;

@form-control-background-color: transparent;
@form-control-background-image: none;
@form-control-background-repeat: repeat;
@form-control-background-position: 0 0;
@form-control-background-size: auto auto;

@form-control-hover-border-color: darken(@form-control-border-color, 15%);
@form-control-hover-background-color: @form-control-background-color;

@form-control-focus-outline-color: @form-control-border-color;
@form-control-focus-border-color: @form-control-hover-border-color;
@form-control-focus-background-color: @form-control-hover-background-color;

@form-control-danger-border-color: lighten(@alert-danger, 25%);
@form-control-danger-background-color: @form-control-background-color;

@form-control-danger-hover-border-color: darken(@form-control-danger-border-color, 10%);
@form-control-danger-hover-background-color: @form-control-danger-background-color;

@form-control-danger-focus-outline-color: @form-control-danger-border-color;
@form-control-danger-focus-border-color: @form-control-danger-hover-border-color;
@form-control-danger-focus-background-color: @form-control-danger-hover-background-color;

@form-hint-color: @base-hint;
@form-hint-danger-color: @alert-danger;

@form-hint-font-size: @font-size-smaller;
@form-hint-line-height: @line-height-smaller;

@form-breakpoints: @grid-breakpoints-md;
```

## Дополнительно

* Маски: [Inputmask](https://github.com/RobinHerbots/Inputmask)
* Календарь: [air-datepicker](https://github.com/t1m0n/air-datepicker)
