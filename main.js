/* Generated on: Wed Feb 08 2023 01:05:04 GMT+0000 (Coordinated Universal Time) */
/* ==========================================================================
   normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css 
   ========================================================================== */
/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
html {
    font - family: sans - serif; - ms - text - size - adjust: 100 % ; - webkit - text - size - adjust: 100 %
}
body {
    margin: 0
}
article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display: block
}
audio, canvas, progress, video {
    display: inline - block;vertical - align: baseline
}
audio: not([controls]) {
    display: none;height: 0
} [hidden], template {
    display: none
}
a {
    background - color: transparent
}
a: active, a: hover {
    outline: 0
}
abbr[title] {
    border - bottom: 1 px dotted
}
b, strong {
    font - weight: bold
}
dfn {
    font - style: italic
}
h1 {
    font - size: 2 em;
    margin: .67 em 0
}
mark {
    background: #ff0;color: #000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type= "button"], input[type = "reset"] {
    -webkit - appearance: button;
    cursor: pointer
}
button[disabled], html input[disabled] {
    cursor: default
}
button::-moz - focus - inner, input::-moz - focus - inner {
    border: 0;padding: 0
}
input {
    line - height: normal
}
input[type = 'checkbox'], input[type = 'radio'] {
    box - sizing: border - box;
    padding: 0
}
input[type = 'number']::-webkit - inner - spin - button, input[type = 'number']::-webkit - outer - spin - button {
    height: auto
}
input[type = 'search'] {
    -webkit - appearance: none
}
input[type = 'search']::-webkit - search - cancel - button, input[type = 'search']::-webkit - search - decoration {
    -webkit - appearance: none
}
fieldset {
    border: 1 px solid# c0c0c0;margin: 0 2 px;padding: .35 em .625 em .75 em
}
legend {
    border: 0;padding: 0
}
textarea {
    overflow: auto
}
optgroup {
    font - weight: bold
}
table {
    border - collapse: collapse;
    border - spacing: 0
}
td, th {
    padding: 0
}

/* ==========================================================================
   Start of base Webflow CSS - If you're looking for some ultra-clean CSS, skip the boilerplate and see the unminified code below.
   ========================================================================== */
@font - face {
    font - family: 'webflow-icons';
    src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format('truetype');
    font - weight: normal;
    font - style: normal
} [class ^= "w-icon-"], [class *= " w-icon-"] {
    font - family: 'webflow-icons'!important;
    speak: none;
    font - style: normal;
    font - weight: normal;
    font - variant: normal;
    text - transform: none;
    line - height: 1; - webkit - font - smoothing: antialiased; - moz - osx - font - smoothing: grayscale
}.w - icon - slider - right: before {
    content: "\e600"
}.w - icon - slider - left: before {
    content: "\e601"
}.w - icon - nav - menu: before {
    content: "\e602"
}.w - icon - arrow - down: before, .w - icon - dropdown - toggle: before {
    content: "\e603"
}.w - icon - file - upload - remove: before {
    content: "\e900"
}.w - icon - file - upload - icon: before {
    content: "\e903"
}*{
    -webkit - box - sizing: border - box; - moz - box - sizing: border - box;box - sizing: border - box
}
html {
    height: 100 %
}
body {
    margin: 0;min - height: 100 % ;background - color: #fff;font - family: Arial,
    sans - serif;font - size: 14 px;line - height: 20 px;color: #333}img{max-width:100%;vertical-align:middle;display:inline-block}html.w-mod-touch *{background-attachment:scroll !important}.w-block{display:block}.w-inline-block{max-width:100%;display:inline-block}.w-clearfix:before,.w-clearfix:after{content:" ";display:table;grid-column-start:1;grid-row-start:1;grid-column-end:2;grid-row-end:2}.w-clearfix:after{clear:both}.w-hidden{display:none}.w-button{display:inline-block;padding:9px 15px;background-color:# 3898 EC;color: white;border: 0;line - height: inherit;text - decoration: none;cursor: pointer;border - radius: 0
}
input.w - button {
    -webkit - appearance: button
}
html[data - w - dynpage][data - w - cloak] {
    color: transparent!important
}.w - webflow - badge, .w - webflow - badge * {
    position: static;left: auto;top: auto;right: auto;bottom: auto;z - index: auto;display: block;visibility: visible;overflow: visible;overflow - x: visible;overflow - y: visible;box - sizing: border - box;width: auto;height: auto;max - height: none;max - width: none;min - height: 0;min - width: 0;margin: 0;padding: 0;float: none;clear: none;border: 0 none transparent;border - radius: 0;background: none;background - image: none;background - position: 0 % 0 % ;background - size: auto auto;background - repeat: repeat;background - origin: padding - box;background - clip: border - box;background - attachment: scroll;background - color: transparent;box - shadow: none;opacity: 1;transform: none;transition: none;direction: ltr;font - family: inherit;font - weight: inherit;color: inherit;font - size: inherit;line - height: inherit;font - style: inherit;font - variant: inherit;text - align: inherit;letter - spacing: inherit;text - decoration: inherit;text - indent: 0;text - transform: inherit;list - style - type: disc;text - shadow: none;font - smoothing: auto;vertical - align: baseline;cursor: inherit;white - space: inherit;word - break: normal;word - spacing: normal;word - wrap: normal
}.w - webflow - badge {
    position: fixed!important;display: inline - block!important;visibility: visible!important;z - index: 2147483647!important;top: auto!important;right: 12 px!important;bottom: 12 px!important;left: auto!important;color: #AAADB0!important;background - color: #fff!important;border - radius: 3 px!important;padding: 6 px 8 px 6 px 6 px!important;font - size: 12 px!important;opacity: 1!important;line - height: 14 px!important;text - decoration: none!important;transform: none!important;margin: 0!important;width: auto!important;height: auto!important;overflow: visible!important;white - space: nowrap;box - shadow: 0 0 0 1 px rgba(0, 0, 0, 0.1),
    0 1 px 3 px rgba(0, 0, 0, 0.1);cursor: pointer
}.w - webflow - badge > img {
    display: inline - block!important;visibility: visible!important;opacity: 1!important;vertical - align: middle!important
}
h1, h2, h3, h4, h5, h6 {
    font - weight: bold;
    margin - bottom: 10 px
}
h1 {
    font - size: 38 px;
    line - height: 44 px;
    margin - top: 20 px
}
h2 {
    font - size: 32 px;
    line - height: 36 px;
    margin - top: 20 px
}
h3 {
    font - size: 24 px;
    line - height: 30 px;
    margin - top: 20 px
}
h4 {
    font - size: 18 px;
    line - height: 24 px;
    margin - top: 10 px
}
h5 {
    font - size: 14 px;
    line - height: 20 px;
    margin - top: 10 px
}
h6 {
    font - size: 12 px;
    line - height: 18 px;
    margin - top: 10 px
}
p {
    margin - top: 0;
    margin - bottom: 10 px
}
blockquote {
    margin: 0 0 10 px 0;padding: 10 px 20 px;border - left: 5 px solid# E2E2E2;font - size: 18 px;line - height: 22 px
}
figure {
    margin: 0;margin - bottom: 10 px
}
figcaption {
    margin - top: 5 px;
    text - align: center
}
ul, ol {
    margin - top: 0 px;
    margin - bottom: 10 px;
    padding - left: 40 px
}.w - list - unstyled {
    padding - left: 0;
    list - style: none
}.w - embed: before, .w - embed: after {
    content: " ";display: table;grid - column - start: 1;grid - row - start: 1;grid - column - end: 2;grid - row - end: 2
}.w - embed: after {
    clear: both
}.w - video {
    width: 100 % ;position: relative;padding: 0
}.w - video iframe, .w - video object, .w - video embed {
    position: absolute;top: 0;left: 0;width: 100 % ;height: 100 % ;border: none
}
fieldset {
    padding: 0;margin: 0;border: 0
}
button, [type = 'button'], [type = 'reset'] {
    border: 0;cursor: pointer; - webkit - appearance: button
}.w - form {
    margin: 0 0 15 px
}.w - form - done {
    display: none;padding: 20 px;text - align: center;background - color: #dddddd
}.w - form - fail {
    display: none;margin - top: 10 px;padding: 10 px;background - color: #ffdede
}
label {
    display: block;margin - bottom: 5 px;font - weight: bold
}.w - input, .w - select {
    display: block;width: 100 % ;height: 38 px;padding: 8 px 12 px;margin - bottom: 10 px;font - size: 14 px;line - height: 1.42857143;color: #333333;vertical-align:middle;background-color:# ffffff;border: 1 px solid# cccccc
}.w - input: -moz - placeholder, .w - select: -moz - placeholder {
    color: #999}.w-input::-moz-placeholder,.w-select::-moz-placeholder{color:# 999;opacity: 1
}.w - input: -ms - input - placeholder, .w - select: -ms - input - placeholder {
    color: #999}.w-input::-webkit-input-placeholder,.w-select::-webkit-input-placeholder{color:# 999
}.w - input: focus, .w - select: focus {
    border - color: #3898EC;outline:0}.w-input[disabled],.w-select[disabled],.w-input[readonly],.w-select[readonly],fieldset[disabled] .w-input,fieldset[disabled] .w-select{cursor:not-allowed}.w-input[disabled]:not(.w-input-disabled),.w-select[disabled]:not(.w-input-disabled),.w-input[readonly],.w-select[readonly],fieldset[disabled]:not(.w-input-disabled) .w-input,fieldset[disabled]:not(.w-input-disabled) .w-select{background-color:# eeeeee
}
textarea.w - input, textarea.w - select {
        height: auto
    }.w - select {
        background - color: #f3f3f3
    }.w - select[multiple] {
        height: auto
    }.w - form - label {
        display: inline - block;cursor: pointer;font - weight: normal;margin - bottom: 0 px
    }.w - radio {
        display: block;margin - bottom: 5 px;padding - left: 20 px
    }.w - radio: before, .w - radio: after {
        content: " ";display: table;grid - column - start: 1;grid - row - start: 1;grid - column - end: 2;grid - row - end: 2
    }.w - radio: after {
        clear: both
    }.w - radio - input {
        margin: 4 px 0 0;margin - top: 1 px\ 9;line - height: normal;float: left;margin - left: -20 px
    }.w - radio - input {
        margin - top: 3 px
    }.w - file - upload {
        display: block;margin - bottom: 10 px
    }.w - file - upload - input {
        width: .1 px;height: .1 px;opacity: 0;overflow: hidden;position: absolute;z - index: -100
    }.w - file - upload -
    default, .w - file - upload - uploading, .w - file - upload - success {
        display: inline - block;color: #333333}.w-file-upload-error{display:block;margin-top:10px}.w-file-upload-default.w-hidden,.w-file-upload-uploading.w-hidden,.w-file-upload-error.w-hidden,.w-file-upload-success.w-hidden{display:none}.w-file-upload-uploading-btn{display:flex;font-size:14px;font-weight:normal;cursor:pointer;margin:0;padding:8px 12px;border:1px solid # cccccc;background - color: #fafafa
    }.w - file - upload - file {
        display: flex;flex - grow: 1;justify - content: space - between;margin: 0;padding: 8 px 9 px 8 px 11 px;border: 1 px solid# cccccc;background - color: #fafafa
    }.w - file - upload - file - name {
        font - size: 14 px;
        font - weight: normal;
        display: block
    }.w - file - remove - link {
        margin - top: 3 px;
        margin - left: 10 px;
        width: auto;
        height: auto;
        padding: 3 px;
        display: block;
        cursor: pointer
    }.w - icon - file - upload - remove {
        margin: auto;font - size: 10 px
    }.w - file - upload - error - msg {
        display: inline - block;color: #ea384c;padding: 2 px 0
    }.w - file - upload - info {
        display: inline - block;line - height: 38 px;padding: 0 12 px
    }.w - file - upload - label {
        display: inline - block;font - size: 14 px;font - weight: normal;cursor: pointer;margin: 0;padding: 8 px 12 px;border: 1 px solid# cccccc;background - color: #fafafa
    }.w - icon - file - upload - icon, .w - icon - file - upload - uploading {
        display: inline - block;margin - right: 8 px;width: 20 px
    }.w - icon - file - upload - uploading {
        height: 20 px
    }.w - container {
        margin - left: auto;
        margin - right: auto;
        max - width: 940 px
    }.w - container: before, .w - container: after {
        content: " ";display: table;grid - column - start: 1;grid - row - start: 1;grid - column - end: 2;grid - row - end: 2
    }.w - container: after {
        clear: both
    }.w - container.w - row {
        margin - left: -10 px;
        margin - right: -10 px
    }.w - row: before, .w - row: after {
        content: " ";display: table;grid - column - start: 1;grid - row - start: 1;grid - column - end: 2;grid - row - end: 2
    }.w - row: after {
        clear: both
    }.w - row.w - row {
        margin - left: 0;
        margin - right: 0
    }.w - col {
        position: relative;float: left;width: 100 % ;min - height: 1 px;padding - left: 10 px;padding - right: 10 px
    }.w - col.w - col {
        padding - left: 0;
        padding - right: 0
    }.w - col - 1 {
        width: 8.33333333 %
    }.w - col - 2 {
        width: 16.66666667 %
    }.w - col - 3 {
        width: 25 %
    }.w - col - 4 {
        width: 33.33333333 %
    }.w - col - 5 {
        width: 41.66666667 %
    }.w - col - 6 {
        width: 50 %
    }.w - col - 7 {
        width: 58.33333333 %
    }.w - col - 8 {
        width: 66.66666667 %
    }.w - col - 9 {
        width: 75 %
    }.w - col - 10 {
        width: 83.33333333 %
    }.w - col - 11 {
        width: 91.66666667 %
    }.w - col - 12 {
        width: 100 %
    }.w - hidden - main {
        display: none!important
    }
@media screen and(max - width: 991 px) {
    .w - container {
        max - width: 728 px
    }.w - hidden - main {
        display: inherit!important
    }.w - hidden - medium {
        display: none!important
    }.w - col - medium - 1 {
        width: 8.33333333 %
    }.w - col - medium - 2 {
        width: 16.66666667 %
    }.w - col - medium - 3 {
        width: 25 %
    }.w - col - medium - 4 {
        width: 33.33333333 %
    }.w - col - medium - 5 {
        width: 41.66666667 %
    }.w - col - medium - 6 {
        width: 50 %
    }.w - col - medium - 7 {
        width: 58.33333333 %
    }.w - col - medium - 8 {
        width: 66.66666667 %
    }.w - col - medium - 9 {
        width: 75 %
    }.w - col - medium - 10 {
        width: 83.33333333 %
    }.w - col - medium - 11 {
        width: 91.66666667 %
    }.w - col - medium - 12 {
        width: 100 %
    }.w - col - stack {
        width: 100 % ;left: auto;right: auto
    }
}
@media screen and(max - width: 767 px) {
    .w - hidden - main {
        display: inherit!important
    }.w - hidden - medium {
        display: inherit!important
    }.w - hidden - small {
        display: none!important
    }.w - row, .w - container.w - row {
        margin - left: 0;
        margin - right: 0
    }.w - col {
        width: 100 % ;left: auto;right: auto
    }.w - col - small - 1 {
        width: 8.33333333 %
    }.w - col - small - 2 {
        width: 16.66666667 %
    }.w - col - small - 3 {
        width: 25 %
    }.w - col - small - 4 {
        width: 33.33333333 %
    }.w - col - small - 5 {
        width: 41.66666667 %
    }.w - col - small - 6 {
        width: 50 %
    }.w - col - small - 7 {
        width: 58.33333333 %
    }.w - col - small - 8 {
        width: 66.66666667 %
    }.w - col - small - 9 {
        width: 75 %
    }.w - col - small - 10 {
        width: 83.33333333 %
    }.w - col - small - 11 {
        width: 91.66666667 %
    }.w - col - small - 12 {
        width: 100 %
    }
}
@media screen and(max - width: 479 px) {
    .w - container {
        max - width: none
    }.w - hidden - main {
        display: inherit!important
    }.w - hidden - medium {
        display: inherit!important
    }.w - hidden - small {
        display: inherit!important
    }.w - hidden - tiny {
        display: none!important
    }.w - col {
        width: 100 %
    }.w - col - tiny - 1 {
        width: 8.33333333 %
    }.w - col - tiny - 2 {
        width: 16.66666667 %
    }.w - col - tiny - 3 {
        width: 25 %
    }.w - col - tiny - 4 {
        width: 33.33333333 %
    }.w - col - tiny - 5 {
        width: 41.66666667 %
    }.w - col - tiny - 6 {
        width: 50 %
    }.w - col - tiny - 7 {
        width: 58.33333333 %
    }.w - col - tiny - 8 {
        width: 66.66666667 %
    }.w - col - tiny - 9 {
        width: 75 %
    }.w - col - tiny - 10 {
        width: 83.33333333 %
    }.w - col - tiny - 11 {
        width: 91.66666667 %
    }.w - col - tiny - 12 {
        width: 100 %
    }
}.w - widget {
    position: relative
}.w - widget - map {
    width: 100 % ;height: 400 px
}.w - widget - map label {
    width: auto;display: inline
}.w - widget - map img {
    max - width: inherit
}.w - widget - map.gm - style - iw {
    text - align: center
}.w - widget - map.gm - style - iw > button {
    display: none!important
}.w - widget - twitter {
    overflow: hidden
}.w - widget - twitter - count - shim {
    display: inline - block;vertical - align: top;position: relative;width: 28 px;height: 20 px;text - align: center;background: white;border: #758696 solid 1px;border-radius:3px}.w-widget-twitter-count-shim *{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w-widget-twitter-count-shim .w-widget-twitter-count-inner{position:relative;font-size:15px;line-height:12px;text-align:center;color:# 999;font - family: serif
}.w - widget - twitter - count - shim.w - widget - twitter - count - clear {
    position: relative;display: block
}.w - widget - twitter - count - shim.w--large {
    width: 36 px;height: 28 px
}.w - widget - twitter - count - shim.w--large.w - widget - twitter - count - inner {
    font - size: 18 px;
    line - height: 18 px
}.w - widget - twitter - count - shim: not(.w--vertical) {
    margin - left: 5 px;
    margin - right: 8 px
}.w - widget - twitter - count - shim: not(.w--vertical).w--large {
    margin - left: 6 px
}.w - widget - twitter - count - shim: not(.w--vertical): before, .w - widget - twitter - count - shim: not(.w--vertical): after {
    top: 50 % ;left: 0;border: solid transparent;content: ' ';height: 0;width: 0;position: absolute;pointer - events: none
}.w - widget - twitter - count - shim: not(.w--vertical): before {
    border - color: rgba(117, 134, 150, 0);
    border - right - color: #5d6c7b;border-width:4px;margin-left:-9px;margin-top:-4px}.w-widget-twitter-count-shim:not(.w--vertical).w--large:before{border-width:5px;margin-left:-10px;margin-top:-5px}.w-widget-twitter-count-shim:not(.w--vertical):after{border-color:rgba(255,255,255,0);border-right-color:white;border-width:4px;margin-left:-8px;margin-top:-4px}.w-widget-twitter-count-shim:not(.w--vertical).w--large:after{border-width:5px;margin-left:-9px;margin-top:-5px}.w-widget-twitter-count-shim.w--vertical{width:61px;height:33px;margin-bottom:8px}.w-widget-twitter-count-shim.w--vertical:before,.w-widget-twitter-count-shim.w--vertical:after{top:100%;left:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}.w-widget-twitter-count-shim.w--vertical:before{border-color:rgba(117,134,150,0);border-top-color:# 5 d6c7b;
    border - width: 5 px;
    margin - left: -5 px
}.w - widget - twitter - count - shim.w--vertical: after {
    border - color: rgba(255, 255, 255, 0);
    border - top - color: white;
    border - width: 4 px;
    margin - left: -4 px
}.w - widget - twitter - count - shim.w--vertical.w - widget - twitter - count - inner {
    font - size: 18 px;
    line - height: 22 px
}.w - widget - twitter - count - shim.w--vertical.w--large {
    width: 76 px
}.w - background - video {
    position: relative;overflow: hidden;height: 500 px;color: white
}.w - background - video > video {
    background - size: cover;
    background - position: 50 % 50 % ;
    position: absolute;
    margin: auto;
    width: 100 % ;
    height: 100 % ;
    right: -100 % ;
    bottom: -100 % ;
    top: -100 % ;
    left: -100 % ;
    object - fit: cover;
    z - index: -100
}.w - background - video > video::-webkit - media - controls - start - playback - button {
    display: none!important; - webkit - appearance: none
}.w - background - video--control {
    position: absolute;bottom: 1 em;right: 1 em;background - color: transparent;padding: 0
}.w - background - video--control > [hidden] {
    display: none!important
}.w - slider {
    position: relative;height: 300 px;text - align: center;background: #dddddd;clear: both; - webkit - tap - highlight - color: rgba(0, 0, 0, 0);tap - highlight - color: rgba(0, 0, 0, 0)
}.w - slider - mask {
    position: relative;display: block;overflow: hidden;z - index: 1;left: 0;right: 0;height: 100 % ;white - space: nowrap
}.w - slide {
    position: relative;display: inline - block;vertical - align: top;width: 100 % ;height: 100 % ;white - space: normal;text - align: left
}.w - slider - nav {
    position: absolute;z - index: 2;top: auto;right: 0;bottom: 0;left: 0;margin: auto;padding - top: 10 px;height: 40 px;text - align: center; - webkit - tap - highlight - color: rgba(0, 0, 0, 0);tap - highlight - color: rgba(0, 0, 0, 0)
}.w - slider - nav.w - round > div {
    border - radius: 100 %
}.w - slider - nav.w - num > div {
    width: auto;height: auto;padding: .2 em .5 em;font - size: inherit;line - height: inherit
}.w - slider - nav.w - shadow > div {
    box - shadow: 0 0 3 px rgba(51, 51, 51, 0.4)
}.w - slider - nav - invert {
    color: #fff
}.w - slider - nav - invert > div {
    background - color: rgba(34, 34, 34, 0.4)
}.w - slider - nav - invert > div.w - active {
    background - color: #222}.w-slider-dot{position:relative;display:inline-block;width:1em;height:1em;background-color:rgba(255,255,255,0.4);cursor:pointer;margin:0 3px .5em;transition:background-color 100ms,color 100ms}.w-slider-dot.w-active{background-color:# fff
}.w - slider - dot: focus {
    outline: none;box - shadow: 0 0 0 2 px# fff
}.w - slider - dot: focus.w - active {
    box - shadow: none
}.w - slider - arrow - left, .w - slider - arrow - right {
    position: absolute;width: 80 px;top: 0;right: 0;bottom: 0;left: 0;margin: auto;cursor: pointer;overflow: hidden;color: white;font - size: 40 px; - webkit - tap - highlight - color: rgba(0, 0, 0, 0);tap - highlight - color: rgba(0, 0, 0, 0); - webkit - user - select: none; - moz - user - select: none; - ms - user - select: none;user - select: none
}.w - slider - arrow - left[class ^= 'w-icon-'], .w - slider - arrow - right[class ^= 'w-icon-'], .w - slider - arrow - left[class *= ' w-icon-'], .w - slider - arrow - right[class *= ' w-icon-'] {
    position: absolute
}.w - slider - arrow - left: focus, .w - slider - arrow - right: focus {
    outline: 0
}.w - slider - arrow - left {
    z - index: 3;
    right: auto
}.w - slider - arrow - right {
    z - index: 4;
    left: auto
}.w - icon - slider - left, .w - icon - slider - right {
    top: 0;right: 0;bottom: 0;left: 0;margin: auto;width: 1 em;height: 1 em
}.w - slider - aria - label {
    border: 0;clip: rect(0 0 0 0);height: 1 px;margin: -1 px;overflow: hidden;padding: 0;position: absolute;width: 1 px
}.w - slider - force - show {
    display: block!important
}.w - dropdown {
    display: inline - block;position: relative;text - align: left;margin - left: auto;margin - right: auto;z - index: 900
}.w - dropdown - btn, .w - dropdown - toggle, .w - dropdown - link {
    position: relative;vertical - align: top;text - decoration: none;color: #222222;padding:20px;text-align:left;margin-left:auto;margin-right:auto;white-space:nowrap}.w-dropdown-toggle{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;cursor:pointer;padding-right:40px}.w-dropdown-toggle:focus{outline:0}.w-icon-dropdown-toggle{position:absolute;top:0;right:0;bottom:0;margin:auto;margin-right:20px;width:1em;height:1em}.w-dropdown-list{position:absolute;background:# dddddd;display: none;min - width: 100 %
}.w - dropdown - list.w--open {
    display: block
}.w - dropdown - link {
    padding: 10 px 20 px;display: block;color: #222222}.w-dropdown-link.w--current{color:# 0082 f3
}.w - dropdown - link: focus {
    outline: 0
}
@media screen and(max - width: 767 px) {
    .w - nav - brand {
        padding - left: 10 px
    }
}.w - lightbox - backdrop {
    color: #000;cursor:auto;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:normal;list-style:disc;text-align:start;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;position:fixed;top:0;right:0;bottom:0;left:0;color:# fff;font - family: "Helvetica Neue",
    Helvetica,
    Ubuntu,
    "Segoe UI",
    Verdana,
    sans - serif;font - size: 17 px;line - height: 1.2;font - weight: 300;text - align: center;background: rgba(0, 0, 0, 0.9);z - index: 2000;outline: 0;opacity: 0; - webkit - user - select: none; - moz - user - select: none; - ms - user - select: none; - webkit - tap - highlight - color: transparent; - webkit - transform: translate(0, 0)
}.w - lightbox - backdrop, .w - lightbox - container {
    height: 100 % ;overflow: auto; - webkit - overflow - scrolling: touch
}.w - lightbox - content {
    position: relative;height: 100 vh;overflow: hidden
}.w - lightbox - view {
    position: absolute;width: 100 vw;height: 100 vh;opacity: 0
}.w - lightbox - view: before {
    content: "";height: 100 vh
}.w - lightbox - group, .w - lightbox - group.w - lightbox - view, .w - lightbox - group.w - lightbox - view: before {
    height: 86 vh
}.w - lightbox - frame, .w - lightbox - view: before {
    display: inline - block;vertical - align: middle
}.w - lightbox - figure {
    position: relative;margin: 0
}.w - lightbox - group.w - lightbox - figure {
    cursor: pointer
}.w - lightbox - img {
    width: auto;height: auto;max - width: none
}.w - lightbox - image {
    display: block;float: none;max - width: 100 vw;max - height: 100 vh
}.w - lightbox - group.w - lightbox - image {
    max - height: 86 vh
}.w - lightbox - caption {
    position: absolute;right: 0;bottom: 0;left: 0;padding: .5 em 1 em;background: rgba(0, 0, 0, 0.4);text - align: left;text - overflow: ellipsis;white - space: nowrap;overflow: hidden
}.w - lightbox - embed {
    position: absolute;top: 0;right: 0;bottom: 0;left: 0;width: 100 % ;height: 100 %
}.w - lightbox - control {
    position: absolute;top: 0;width: 4 em;background - size: 24 px;background - repeat: no - repeat;background - position: center;cursor: pointer; - webkit - transition: all .3 s;transition: all .3 s
}.w - lightbox - left {
    display: none;bottom: 0;left: 0;background - image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==")
}.w - lightbox - right {
    display: none;right: 0;bottom: 0;background - image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+")
}.w - lightbox - close {
    right: 0;height: 2.6 em;background - image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");background - size: 18 px
}.w - lightbox - strip {
    position: absolute;bottom: 0;left: 0;right: 0;padding: 0 1 vh;line - height: 0;white - space: nowrap;overflow - x: auto;overflow - y: hidden
}.w - lightbox - item {
    display: inline - block;width: 10 vh;padding: 2 vh 1 vh;box - sizing: content - box;cursor: pointer; - webkit - transform: translate3d(0, 0, 0)
}.w - lightbox - active {
    opacity: .3
}.w - lightbox - thumbnail {
    position: relative;height: 10 vh;background: #222;overflow:hidden}.w-lightbox-thumbnail-image{position:absolute;top:0;left:0}.w-lightbox-thumbnail .w-lightbox-tall{top:50%;width:100%;-webkit-transform:translate(0, -50%);-ms-transform:translate(0, -50%);transform:translate(0, -50%)}.w-lightbox-thumbnail .w-lightbox-wide{left:50%;height:100%;-webkit-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0)}.w-lightbox-spinner{position:absolute;top:50%;left:50%;box-sizing:border-box;width:40px;height:40px;margin-top:-20px;margin-left:-20px;border:5px solid rgba(0,0,0,0.4);border-radius:50%;-webkit-animation:spin .8s infinite linear;animation:spin .8s infinite linear}.w-lightbox-spinner:after{content:"";position:absolute;top:-4px;right:-4px;bottom:-4px;left:-4px;border:3px solid transparent;border-bottom-color:# fff;border - radius: 50 %
}.w - lightbox - hide {
    display: none
}.w - lightbox - noscroll {
    overflow: hidden
}
@media(min - width: 768 px) {
    .w - lightbox - content {
        height: 96 vh;margin - top: 2 vh
    }.w - lightbox - view, .w - lightbox - view: before {
        height: 96 vh
    }.w - lightbox - group, .w - lightbox - group.w - lightbox - view, .w - lightbox - group.w - lightbox - view: before {
        height: 84 vh
    }.w - lightbox - image {
        max - width: 96 vw;
        max - height: 96 vh
    }.w - lightbox - group.w - lightbox - image {
        max - width: 82.3 vw;
        max - height: 84 vh
    }.w - lightbox - left, .w - lightbox - right {
        display: block;opacity: .5
    }.w - lightbox - close {
        opacity: .8
    }.w - lightbox - control: hover {
        opacity: 1
    }
}.w - lightbox - inactive, .w - lightbox - inactive: hover {
    opacity: 0
}.w - richtext: before, .w - richtext: after {
    content: " ";display: table;grid - column - start: 1;grid - row - start: 1;grid - column - end: 2;grid - row - end: 2
}.w - richtext: after {
    clear: both
}.w - richtext[contenteditable = "true"]: before, .w - richtext[contenteditable = "true"]: after {
    white - space: initial
}.w - richtext ol, .w - richtext ul {
    overflow: hidden
}.w - richtext.w - richtext - figure - selected.w - richtext - figure - type - video div: after, .w - richtext.w - richtext - figure - selected[data - rt - type = "video"] div: after {
    outline: 2 px solid #2895f7}.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,.w-richtext .w-richtext-figure-selected[data-rt-type= "image"] div {
    outline: 2 px solid #2895f7}.w-richtext figure.w-richtext-figure-type-video>div:after,.w-richtext figure[data-rt-type= "video"] > div: after {
    content: '';position: absolute;display: none;left: 0;top: 0;right: 0;bottom: 0
}.w - richtext figure {
    position: relative;max - width: 60 %
}.w - richtext figure > div: before {
    cursor: default !important
}.w - richtext figure img {
    width: 100 %
}.w - richtext figure figcaption.w - richtext - figcaption - placeholder {
    opacity: .6
}.w - richtext figure div {
    font - size: 0 px;
    color: transparent
}.w - richtext figure.w - richtext - figure - type - image, .w - richtext figure[data - rt - type = "image"] {
    display: table
}.w - richtext figure.w - richtext - figure - type - image > div, .w - richtext figure[data - rt - type = "image"] > div {
    display: inline - block
}.w - richtext figure.w - richtext - figure - type - image > figcaption, .w - richtext figure[data - rt - type = "image"] > figcaption {
    display: table - caption;caption - side: bottom
}.w - richtext figure.w - richtext - figure - type - video, .w - richtext figure[data - rt - type = "video"] {
    width: 60 % ;height: 0
}.w - richtext figure.w - richtext - figure - type - video iframe, .w - richtext figure[data - rt - type = "video"] iframe {
    position: absolute;top: 0;left: 0;width: 100 % ;height: 100 %
}.w - richtext figure.w - richtext - figure - type - video > div, .w - richtext figure[data - rt - type = "video"] > div {
    width: 100 %
}.w - richtext figure.w - richtext - align - center {
    margin - right: auto;
    margin - left: auto;
    clear: both
}.w - richtext figure.w - richtext - align - center.w - richtext - figure - type - image > div, .w - richtext figure.w - richtext - align - center[data - rt - type = "image"] > div {
    max - width: 100 %
}.w - richtext figure.w - richtext - align - normal {
    clear: both
}.w - richtext figure.w - richtext - align - fullwidth {
    width: 100 % ;max - width: 100 % ;text - align: center;clear: both;display: block;margin - right: auto;margin - left: auto
}.w - richtext figure.w - richtext - align - fullwidth > div {
    display: inline - block;padding - bottom: inherit
}.w - richtext figure.w - richtext - align - fullwidth > figcaption {
    display: block
}.w - richtext figure.w - richtext - align - floatleft {
    float: left;margin - right: 15 px;clear: none
}.w - richtext figure.w - richtext - align - floatright {
    float: right;margin - left: 15 px;clear: none
}.w - nav {
    position: relative;background: #dddddd;z - index: 1000
}.w - nav: before, .w - nav: after {
    content: " ";display: table;grid - column - start: 1;grid - row - start: 1;grid - column - end: 2;grid - row - end: 2
}.w - nav: after {
    clear: both
}.w - nav - brand {
    position: relative;float: left;text - decoration: none;color: #333333}.w-nav-link{position:relative;display:inline-block;vertical-align:top;text-decoration:none;color:# 222222;padding: 20 px;text - align: left;margin - left: auto;margin - right: auto
}.w - nav - link.w--current {
    color: #0082f3}.w-nav-menu{position:relative;float:right}[data-nav-menu-open]{display:block !important;position:absolute;top:100%;left:0;right:0;background:# C8C8C8;text - align: center;overflow: visible;min - width: 200 px
}.w--nav - link - open {
    display: block;position: relative
}.w - nav - overlay {
    position: absolute;overflow: hidden;display: none;top: 100 % ;left: 0;right: 0;width: 100 %
}.w - nav - overlay[data - nav - menu - open] {
    top: 0
}.w - nav[data - animation = "over-left"].w - nav - overlay {
    width: auto
}.w - nav[data - animation = "over-left"].w - nav - overlay, .w - nav[data - animation = "over-left"][data - nav - menu - open] {
    right: auto;z - index: 1;top: 0
}.w - nav[data - animation = "over-right"].w - nav - overlay {
    width: auto
}.w - nav[data - animation = "over-right"].w - nav - overlay, .w - nav[data - animation = "over-right"][data - nav - menu - open] {
    left: auto;z - index: 1;top: 0
}.w - nav - button {
    position: relative;float: right;padding: 18 px;font - size: 24 px;display: none;cursor: pointer; - webkit - tap - highlight - color: rgba(0, 0, 0, 0);tap - highlight - color: rgba(0, 0, 0, 0); - webkit - user - select: none; - moz - user - select: none; - ms - user - select: none;user - select: none
}.w - nav - button: focus {
    outline: 0
}.w - nav - button.w--open {
    background - color: #C8C8C8;
    color: white
}.w - nav[data - collapse = "all"].w - nav - menu {
    display: none
}.w - nav[data - collapse = "all"].w - nav - button {
    display: block
}.w--nav - dropdown - open {
    display: block
}.w--nav - dropdown - toggle - open {
    display: block
}.w--nav - dropdown - list - open {
    position: static
}
@media screen and(max - width: 991 px) {
    .w - nav[data - collapse = "medium"].w - nav - menu {
        display: none
    }.w - nav[data - collapse = "medium"].w - nav - button {
        display: block
    }
}
@media screen and(max - width: 767 px) {
    .w - nav[data - collapse = "small"].w - nav - menu {
        display: none
    }.w - nav[data - collapse = "small"].w - nav - button {
        display: block
    }.w - nav - brand {
        padding - left: 10 px
    }
}
@media screen and(max - width: 479 px) {
    .w - nav[data - collapse = "tiny"].w - nav - menu {
        display: none
    }.w - nav[data - collapse = "tiny"].w - nav - button {
        display: block
    }
}.w - tabs {
    position: relative
}.w - tabs: before, .w - tabs: after {
    content: " ";display: table;grid - column - start: 1;grid - row - start: 1;grid - column - end: 2;grid - row - end: 2
}.w - tabs: after {
    clear: both
}.w - tab - menu {
    position: relative
}.w - tab - link {
    position: relative;display: inline - block;vertical - align: top;text - decoration: none;padding: 9 px 30 px;text - align: left;cursor: pointer;color: #222222;background-color:# dddddd
}.w - tab - link.w--current {
    background - color: #C8C8C8
}.w - tab - link: focus {
    outline: 0
}.w - tab - content {
    position: relative;display: block;overflow: hidden
}.w - tab - pane {
    position: relative;display: none
}.w--tab - active {
    display: block
}
@media screen and(max - width: 479 px) {
    .w - tab - link {
        display: block
    }
}.w - ix - emptyfix: after {
    content: ""
}
@keyframes spin {
    0 % {
        transform: rotate(0 deg)
    }
    100 % {
        transform: rotate(360 deg)
    }
}.w - dyn - empty {
        padding: 10 px;background - color: #dddddd
    }.w - dyn - hide {
        display: none!important
    }.w - dyn - bind - empty {
        display: none!important
    }.w - condition - invisible {
        display: none!important
    }

    /* ==========================================================================
       Start of custom Webflow CSS
       ========================================================================== */
    .w - layout - grid {
        display: -ms - grid;
        display: grid;
        grid - auto - columns: 1 fr; -
        ms - grid - columns: 1 fr 1 fr;
        grid - template - columns: 1 fr 1 fr; -
        ms - grid - rows: auto auto;
        grid - template - rows: auto auto;
        grid - row - gap: 16 px;
        grid - column - gap: 16 px;
    }

    .w - users - userformpagewrap {
        height: 100 vh;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: stretch; -
        webkit - align - items: stretch; -
        ms - flex - align: stretch;
        align - items: stretch;
        max - width: 340 px;
        margin - left: auto;
        margin - right: auto;
    }

    .w - checkbox {
        display: block;
        margin - bottom: 5 px;
        padding - left: 20 px;
    }

    .w - checkbox::before {
        content: ' ';
        display: table; -
        ms - grid - column - span: 1;
        grid - column - end: 2; -
        ms - grid - column: 1;
        grid - column - start: 1; -
        ms - grid - row - span: 1;
        grid - row - end: 2; -
        ms - grid - row: 1;
        grid - row - start: 1;
    }

    .w - checkbox::after {
        content: ' ';
        display: table; -
        ms - grid - column - span: 1;
        grid - column - end: 2; -
        ms - grid - column: 1;
        grid - column - start: 1; -
        ms - grid - row - span: 1;
        grid - row - end: 2; -
        ms - grid - row: 1;
        grid - row - start: 1;
        clear: both;
    }

    .w - checkbox - input {
        float: left;
        margin - bottom: 0 px;
        margin - left: -20 px;
        margin - right: 0 px;
        margin - top: 4 px;
        line - height: normal;
    }

    .w - checkbox - input--inputType - custom {
        border - top - width: 1 px;
        border - bottom - width: 1 px;
        border - left - width: 1 px;
        border - right - width: 1 px;
        border - top - color: #ccc;
        border - bottom - color: #ccc;
        border - left - color: #ccc;
        border - right - color: #ccc;
        border - top - style: solid;
        border - bottom - style: solid;
        border - left - style: solid;
        border - right - style: solid;
        width: 12 px;
        height: 12 px;
        border - bottom - left - radius: 2 px;
        border - bottom - right - radius: 2 px;
        border - top - left - radius: 2 px;
        border - top - right - radius: 2 px;
    }

    .w - checkbox - input--inputType - custom.w--redirected - checked {
        background - color: #3898ec;

     border-top-color: # 3898 ec;
        border - bottom - color: #3898ec;

     border-left-color: # 3898 ec;
        border - right - color: #3898ec;

     background-image: url(https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg);

     background-position: 50% 50%;

     background-size: cover;

     background-repeat: no-repeat;

   }

   

   .w-checkbox-input--inputType-custom.w--redirected-focus {

     box-shadow: 0px 0px 3px 1px # 3898 ec;
    }

    .w - users - userloginformwrapper {
        position: relative;
        margin - bottom: 0 px;
        padding - left: 20 px;
        padding - right: 20 px;
    }

    .w - users - userformheader {
        text - align: center;
    }

    .w - users - userformbutton {
        width: 100 % ;
        text - align: center;
    }

    .w - users - userformfooter {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - pack: justify; -
        webkit - justify - content: space - between; -
        ms - flex - pack: justify;
        justify - content: space - between;
        margin - top: 12 px;
    }

    .w - users - userformerrorstate {
        position: absolute;
        top: 100 % ;
        left: 0 % ;
        right: 0 % ;
        margin - left: 20 px;
        margin - right: 20 px;
    }

    .w - users - userresetpasswordformwrapper {
        position: relative;
        margin - bottom: 0 px;
        padding - left: 20 px;
        padding - right: 20 px;
    }

    .w - users - userformsuccessstate {
        display: none;
    }

    .w - users - usersignupformwrapper {
        position: relative;
        margin - bottom: 0 px;
        padding - left: 20 px;
        padding - right: 20 px;
    }

    .w - checkbox - input {
        float: left;
        margin - bottom: 0 px;
        margin - left: -20 px;
        margin - right: 0 px;
        margin - top: 4 px;
        line - height: normal;
    }

    .w - checkbox - input--inputType - custom {
        border - top - width: 1 px;
        border - bottom - width: 1 px;
        border - left - width: 1 px;
        border - right - width: 1 px;
        border - top - color: #ccc;
        border - bottom - color: #ccc;
        border - left - color: #ccc;
        border - right - color: #ccc;
        border - top - style: solid;
        border - bottom - style: solid;
        border - left - style: solid;
        border - right - style: solid;
        width: 12 px;
        height: 12 px;
        border - bottom - left - radius: 2 px;
        border - bottom - right - radius: 2 px;
        border - top - left - radius: 2 px;
        border - top - right - radius: 2 px;
    }

    .w - checkbox - input--inputType - custom.w--redirected - checked {
        background - color: #3898ec;

     border-top-color: # 3898 ec;
        border - bottom - color: #3898ec;

     border-left-color: # 3898 ec;
        border - right - color: #3898ec;

     background-image: url(https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg);

     background-position: 50% 50%;

     background-size: cover;

     background-repeat: no-repeat;

   }

   

   .w-checkbox-input--inputType-custom.w--redirected-focus {

     box-shadow: 0px 0px 3px 1px # 3898 ec;
    }

    .w - users - usersignupverificationmessage {
        display: none;
    }

    .w - users - userupdatepasswordformwrapper {
        position: relative;
        margin - bottom: 0 px;
        padding - left: 20 px;
        padding - right: 20 px;
    }

    .w - users - useraccountwrapper {
        width: 100 % ;
        min - height: 100 vh;
        padding - top: 20 px;
        padding - bottom: 20 px;
        padding - right: 20 px;
        padding - left: 20 px;
        background - color: #f5f5f5;
    }

    .w - users - blockcontent {
        margin - bottom: 20 px;
        padding - top: 20 px;
        padding - bottom: 20 px;
        padding - right: 20 px;
        padding - left: 20 px;
        border - bottom - style: solid;
        border - bottom - width: 1 px;
        border - bottom - color: #e6e6e6;
        border - right - style: solid;
        border - right - width: 1 px;
        border - right - color: #e6e6e6;
        border - left - style: solid;
        border - left - width: 1 px;
        border - left - color: #e6e6e6;
        background - color: #fff;
    }

    .w - users - blockheader {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - pack: justify; -
        webkit - justify - content: space - between; -
        ms - flex - pack: justify;
        justify - content: space - between; -
        webkit - box - align: baseline; -
        webkit - align - items: baseline; -
        ms - flex - align: baseline;
        align - items: baseline;
        padding - top: 4 px;
        padding - bottom: 4 px;
        padding - right: 20 px;
        padding - left: 20 px;
        border - top - style: solid;
        border - top - width: 1 px;
        border - top - color: #e6e6e6;
        border - bottom - style: solid;
        border - bottom - width: 1 px;
        border - bottom - color: #e6e6e6;
        border - right - style: solid;
        border - right - width: 1 px;
        border - right - color: #e6e6e6;
        border - left - style: solid;
        border - left - width: 1 px;
        border - left - color: #e6e6e6;
        background - color: #fff;
    }

    .w - users - useraccountformsavebutton {
        text - align: center;
        margin - right: 8 px;
    }

    .w - users - useraccountformcancelbutton {
        text - align: center;
        background - color: #d3d3d3;
        color: #333;

   }

   

   body {

     font-family: Inter, sans-serif;

     color: # 030407;
        font - size: 14 px;
        line - height: 1.2;
    }

h1 {
    margin - top: 0 px;
    margin - bottom: 0 px;
    font - family: Andyb, sans - serif;
    color: #c3c1bf;
    font - size: 100 px;
    line - height: 1.2;
    font - weight: 700;
    letter - spacing: -0.02 em;
}

h2 {
    margin - top: 0 px;
    margin - bottom: 0 px;
    font - family: Andyb, sans - serif;
    font - size: 40 px;
    line - height: 1.2;
    font - weight: 700;
    letter - spacing: -0.02 em;
}

h3 {
    margin - top: 0 px;
    margin - bottom: 0 px;
    font - family: Archivo, sans - serif;
    font - size: 40 px;
    line - height: 1.2;
    font - weight: 700;
    letter - spacing: -0.02 em;
}

h4 {
    margin - top: 0 px;
    margin - bottom: 0 px;
    font - family: Andyb, sans - serif;
    font - size: 32 px;
    line - height: 1.4;
    font - weight: 700;
    letter - spacing: -0.02 em;
}

h5 {
    margin - top: 0 px;
    margin - bottom: 0 px;
    font - family: Archivo, sans - serif;
    font - size: 24 px;
    line - height: 1.4;
    font - weight: 700;
    letter - spacing: -0.02 em;
}

h6 {
    margin - top: 0 px;
    margin - bottom: 0 px;
    font - family: Archivo, sans - serif;
    font - size: 18 px;
    line - height: 1.3;
    font - weight: 700;
}

p {
    margin - bottom: 0 px;
    color: #3e404c;

     font-size: 16px;

     line-height: 32px;

   }

   

   a {

     color: # 443 fde;
    text - decoration: none;
}

ul {
    margin - top: 0 px;
    margin - bottom: 24 px;
    padding - left: 40 px;
}

li {
    list - style - type: disc;
}

img {
    display: inline - block;
    max - width: 100 % ;
}

label {
    display: block;
    margin - bottom: 5 px;
    font - weight: 600;
}

blockquote {
    margin - top: 32 px;
    margin - bottom: 32 px;
    padding: 10 px 20 px;
    border: 1 px none #000;

     background-color: # f3f3fc;
    color: #28257e;

     font-size: 16px;

     line-height: 32px;

   }

   

   figure {

     left: 42px;

     margin-bottom: 10px;

     margin-left: -55px;

     padding-left: 0px;

   }

   

   .section-regular {

     position: relative;

     padding: 100px 5%;

   }

   

   .section-regular.grey {

     background-color: # f7f7fa;
}

.container - regular {
        position: relative;
        z - index: 1;
        width: 100 % ;
        max - width: 1140 px;
        margin - right: auto;
        margin - left: auto;
    }

    .navbar {
        position: -webkit - sticky;
        position: sticky;
        top: 0 px;
        z - index: 999;
        padding: 20 px 3 % ;
        border - bottom: 1 px solid# ebebef;
        background - color: #fff;
    }

    .navigation - left {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 50 % ; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .nav - menu {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 100 % ; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 12 px;
    }

    .navigation - right {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 50 % ; -
        webkit - box - pack: end; -
        webkit - justify - content: flex - end; -
        ms - flex - pack: end;
        justify - content: flex - end; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .container - navigation {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        max - width: 1140 px;
        margin - right: auto;
        margin - left: auto; -
        webkit - box - pack: justify; -
        webkit - justify - content: space - between; -
        ms - flex - pack: justify;
        justify - content: space - between; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .nav - link {
        padding: 10 px 16 px; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center; -
        webkit - transition: color 200 ms ease;
        transition: color 200 ms ease;
        color: #3e404c;

     font-size: 14px;

     line-height: 24px;

     font-weight: 500;

     letter-spacing: -0.02em;

     white-space: nowrap;

   }

   

   .nav-link:hover {

     color: # 4640 de;
    }

    .nav - link.w--current {
        color: #443fde;

   }

   

   .title {

     margin-bottom: 100px;

     justify-items: center;

     grid-column-gap: 38px;

     -ms-grid-columns: 1.25fr;

     grid-template-columns: 1.25fr;

     -ms-grid-rows: auto;

     grid-template-rows: auto;

     text-align: center;

   }

   

   .header-bottom-wrap {

     position: relative;

   }

   

   .search {

     position: relative;

     z-index: 1;

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 100%;

     max-width: 720px;

     margin-bottom: 0px;

     padding: 12px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 8px;

     border-style: solid;

     border-width: 1px;

     border-color: # ebebef;
        background - color: #fff;
    }

    .header - image - wrap {
        position: relative;
        height: 500 px;
        margin - top: -36 px;
    }

    .partnership - text - wrap {
        padding: 16 px 48 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center;
        background - image: url("https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e198ab8c54856c001d4224_Partnership%20Rectangle.svg");
        background - position: 0 px 0 px;
        background - size: cover;
        background - repeat: no - repeat;
        color: #3e404c;

     font-size: 14px;

   }

   

   .logo-grid {

     margin-top: 64px;

     margin-right: auto;

     margin-left: auto;

     padding-right: 14px;

     padding-left: 14px;

     justify-items: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

     grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

     -ms-grid-rows: auto;

     grid-template-rows: auto;

   }

   

   .logo-wrap {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 100%;

     padding: 10px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

   }

   

   .navigation-button-wrap {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 8px;

   }

   

   .collection-list-jobs {

     display: -ms-grid;

     display: grid;

     grid-auto-columns: 1fr;

     grid-column-gap: 32px;

     grid-row-gap: 32px;

     -ms-grid-columns: 1fr 1fr 1fr;

     grid-template-columns: 1fr 1fr 1fr;

     -ms-grid-rows: auto auto;

     grid-template-rows: auto auto;

   }

   

   .icon-wrap-regular {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 56px;

     height: 56px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     -webkit-box-flex: 0;

     -webkit-flex: 0 0 auto;

     -ms-flex: 0 0 auto;

     flex: 0 0 auto;

     border-style: solid;

     border-width: 1px;

     border-color: # ebebef;
        background - color: #fff;
    }

    .job - company - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - bottom: 24 px;
        padding - right: 10 px; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 14 px;
    }

    .company - card {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 100 % ;
        padding: 40 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        color: #3e404c;

     text-decoration: none;

   }

   

   .company-card-header-wrap {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     margin-bottom: 24px;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 14px;

     color: # 030407;
    }

    .regular - collection - list {
        grid - auto - columns: 1 fr;
        grid - column - gap: 32 px;
        grid - row - gap: 32 px; -
        ms - grid - columns: 1 fr 1 fr 1 fr;
        grid - template - columns: 1 fr 1 fr 1 fr; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .browse - dropdown - small {
        margin - right: 0 px;
        margin - left: 0 px;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff;
    }

    .jobs - dropdown - toggle {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding: 8 px 16 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 8 px;
        color: #84889a;

   }

   

   .job-card-details-wrap {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     -webkit-flex-wrap: wrap;

     -ms-flex-wrap: wrap;

     flex-wrap: wrap;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 24px;

     grid-row-gap: 12px;

     color: # 606476;
        font - weight: 500;
        letter - spacing: -0.03 em;
    }

    .feature - image - wrap {
        position: relative;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        overflow: hidden;
        height: 540 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .feature - list {
        margin - top: 44 px;
        grid - row - gap: 14 px; -
        ms - grid - columns: 1 fr;
        grid - template - columns: 1 fr; -
        ms - grid - rows: auto auto auto;
        grid - template - rows: auto auto auto;
    }

    .feature - content - block {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding: 16 px; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
        grid - column - gap: 16 px;
        background - color: #f9f9fb;
    }

    .title - wrap - center {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        max - width: 470 px;
        margin - right: auto;
        margin - bottom: 72 px;
        margin - left: auto; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        text - align: center;
    }

    .title - wrap - center.max - width - 450 {
        max - width: 450 px;
    }

    .title - wrap - center.max - with - 630 {
        max - width: 630 px;
    }

    .testimonial - image - wrap {
        width: 100 % ;
        height: 100 % ; -
        webkit - box - pack: end; -
        webkit - justify - content: flex - end; -
        ms - flex - pack: end;
        justify - content: flex - end; -
        webkit - box - align: end; -
        webkit - align - items: flex - end; -
        ms - flex - align: end;
        align - items: flex - end;
    }

    .testimonial - grid {
        display: -ms - grid;
        display: grid;
        height: 100 % ;
        grid - auto - columns: 1 fr;
        grid - column - gap: 64 px;
        grid - row - gap: 48 px; -
        ms - grid - columns: 1 fr 0.75 fr;
        grid - template - columns: 1 fr 0.75 fr; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .testimonial - slider {
        height: 100 % ;
        background - color: transparent;
    }

    .testimonial - slider - right - button {
        left: 60 px;
        top: auto;
        right: auto;
        bottom: 0 % ;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 48 px;
        height: 48 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff; -
        webkit - transition: all 400 ms ease;
        transition: all 400 ms ease;
        color: #030407;

   }

   

   .testimonial-slider-right-button:hover {

     background-color: # ebebef;
    }

    .testimonial - slider - right - button: active {
        background - color: #d6d7e0;
    }

    .testimonial - slider - left - button {
        left: 0 % ;
        top: auto;
        right: auto;
        bottom: 0 % ;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 48 px;
        height: 48 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff;
        color: #d6d7e0;
    }

    .testimonial - logo - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 72 px;
        height: 72 px;
        margin - right: 16 px;
        margin - bottom: 64 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff;
    }

    .testimonial - content - wrap {
        max - width: 450 px;
    }

    .blog - card {
        padding: 8 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        color: #030407;

     text-decoration: none;

   }

   

   .rich-text {

     z-index: 4;

     -webkit-box-orient: vertical;

     -webkit-box-direction: normal;

     -webkit-flex-direction: column;

     -ms-flex-direction: column;

     flex-direction: column;

     -webkit-box-align: start;

     -webkit-align-items: flex-start;

     -ms-flex-align: start;

     align-items: flex-start;

     background-color: # fff;
    }

    .rich - text h2 {
        margin - top: 24 px;
        margin - bottom: 16 px;
    }

    .rich - text p {
        margin - bottom: 16 px;
    }

    .rich - text h4 {
        margin - top: 24 px;
        margin - bottom: 12 px;
    }

    .rich - text h1 {
        margin - bottom: 32 px;
    }

    .rich - text h3 {
        margin - top: 24 px;
        margin - bottom: 12 px;
    }

    .rich - text h5 {
        margin - top: 24 px;
        margin - bottom: 12 px;
    }

    .rich - text h6 {
        margin - bottom: 8 px;
    }

    .rich - text img {
        margin - bottom: 40 px;
    }

    .rich - text blockquote {
        margin - bottom: 22 px;
        border - left - color: #443fde;

     font-size: 16px;

     line-height: 1.8;

   }

   

   .rich-text li {

     margin-bottom: 14px;

     color: # 24262 d;
        font - size: 16 px;
    }

    .cta - block {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding - right: 3 % ;
        padding - bottom: 43 px;
        padding - left: 3 % ; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        background - color: #f9f9fb;
    }

    .container - large {
        position: relative;
        width: 100 % ;
        max - width: 1280 px;
        margin - right: auto;
        margin - left: auto;
    }

    .browse - grid {
        margin - top: 72 px;
        grid - column - gap: 64 px;
        grid - row - gap: 32 px; -
        ms - grid - columns: 1 fr 2.5 fr;
        grid - template - columns: 1 fr 2.5 fr; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .search - result - list {
        display: -ms - grid;
        display: grid;
        grid - auto - columns: 1 fr;
        grid - column - gap: 40 px;
        grid - row - gap: 40 px; -
        ms - grid - columns: 1 fr 1 fr 1 fr;
        grid - template - columns: 1 fr 1 fr 1 fr; -
        ms - grid - rows: auto auto;
        grid - template - rows: auto auto;
    }

    .filters - title - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - bottom: 32 px; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 8 px;
    }

    .browse - title - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - bottom: 32 px; -
        webkit - box - pack: justify; -
        webkit - justify - content: space - between; -
        ms - flex - pack: justify;
        justify - content: space - between; -
        webkit - flex - wrap: wrap; -
        ms - flex - wrap: wrap;
        flex - wrap: wrap; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 16 px;
        grid - row - gap: 16 px;
    }

    .browse - divider {
        height: 1 px;
        margin - top: 12 px;
        margin - bottom: 12 px;
        background - color: #e9ecf0;
    }

    .filters - drop - down - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 24 px;
        height: 24 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .browse - menu {
        position: -webkit - sticky;
        position: sticky;
        top: 20 px;
    }

    .utility - page - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 100 vw;
        height: 70 vh;
        max - height: 100 % ;
        max - width: 100 % ; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .utility - page - content {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding: 56 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        text - align: center;
    }

    .utility - page - form {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 260 px;
        margin - top: 40 px;
        margin - right: auto;
        margin - left: auto; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: stretch; -
        webkit - align - items: stretch; -
        ms - flex - align: stretch;
        align - items: stretch;
    }

    .about - header {
        margin - bottom: 56 px;
        grid - column - gap: 64 px; -
        ms - grid - columns: 1 fr 0.75 fr;
        grid - template - columns: 1 fr 0.75 fr; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
        color: #fff;
    }

    .section - about - header {
        position: relative;
        padding: 88 px 5 % 140 px;
    }

    .about - video - lightbox {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 100 px;
        height: 100 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        border - radius: 50 % ;
        background - color: hsla(0, 0 % , 100 % , 0.53);
    }

    .about - content - grid {
        grid - column - gap: 64 px;
        grid - row - gap: 48 px; -
        ms - grid - columns: 0.75 fr 1 fr;
        grid - template - columns: 0.75 fr 1 fr; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .about - content - image - top - right {
        width: 100 % ;
        margin - top: 32 px;
    }

    .about - content - image - grid {
        grid - column - gap: 32 px;
        grid - row - gap: 32 px; -
        ms - grid - columns: 1 fr 0.85 fr;
        grid - template - columns: 1 fr 0.85 fr;
    }

    .about - team - image - grid {
        margin - bottom: 32 px;
        grid - column - gap: 32 px;
        grid - row - gap: 32 px; -
        ms - grid - columns: 1 fr 1 fr 1 fr;
        grid - template - columns: 1 fr 1 fr 1 fr; -
        ms - grid - rows: auto auto;
        grid - template - rows: auto auto;
    }

    .about - team - image - grid - bottom {
        grid - column - gap: 32 px;
        grid - row - gap: 32 px; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .faq - content {
        overflow: hidden;
    }

    .faq - header {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 100 % ; -
        webkit - box - pack: justify; -
        webkit - justify - content: space - between; -
        ms - flex - pack: justify;
        justify - content: space - between; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        font - family: Archivo,
        sans - serif;
        font - weight: 600;
    }

    .faq - block {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - bottom: 32 px;
        padding: 24 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
        background - color: #fff;
        cursor: pointer;
    }

    .container - small {
        position: relative;
        width: 100 % ;
        max - width: 960 px;
        margin - right: auto;
        margin - left: auto;
    }

    .contact - us - grid {
        grid - column - gap: 104 px; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .form - field {
        height: 48 px;
        margin - bottom: 24 px;
        padding: 12 px;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
    }

    .form - field: focus {
        border - color: #443fde;

   }

   

   .large-form-field {

     min-height: 180px;

     margin-bottom: 32px;

     padding: 12px;

     border-style: solid;

     border-width: 1px;

     border-color: # ebebef;
    }

    .large - form - field: focus {
        border - color: #443fde;

   }

   

   .job-post-grid {

     -ms-grid-columns: 1fr 0.5fr;

     grid-template-columns: 1fr 0.5fr;

     -ms-grid-rows: auto;

     grid-template-rows: auto;

   }

   

   .detail-item {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 8px;

   }

   

   .job-detail-wrap {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     margin-top: 16px;

     grid-column-gap: 24px;

     white-space: nowrap;

   }

   

   .company-card-employees {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     margin-top: 24px;

     padding: 10px 15px;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 4px;

     background-color: # f1f8f4;
        color: #246b49;

     font-weight: 500;

     text-decoration: none;

   }

   

   .feature-grid {

     display: -ms-grid;

     display: grid;

     grid-auto-columns: 1fr;

     grid-column-gap: 104px;

     grid-row-gap: 16px;

     -ms-grid-columns: 1fr 1fr;

     grid-template-columns: 1fr 1fr;

     -ms-grid-rows: auto;

     grid-template-rows: auto;

   }

   

   .cta-text-wrap {

     max-width: 490px;

     margin-right: auto;

     margin-bottom: 44px;

     margin-left: auto;

     -webkit-box-orient: vertical;

     -webkit-box-direction: normal;

     -webkit-flex-direction: column;

     -ms-flex-direction: column;

     flex-direction: column;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     text-align: center;

   }

   

   .job-post-side-menu-card {

     position: -webkit-sticky;

     position: sticky;

     top: 32px;

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     padding: 26px;

     -webkit-box-orient: vertical;

     -webkit-box-direction: normal;

     -webkit-flex-direction: column;

     -ms-flex-direction: column;

     flex-direction: column;

     border-style: solid;

     border-width: 1px;

     border-color: # f9f9fb;
    }

    .job - post - content {
        padding: 40 px 5 % ;
        border - style: solid;
        border - width: 1 px;
        border - color: #f9f9fb;
    }

    .job - post - divider {
        height: 1 px;
        margin - top: 32 px;
        margin - bottom: 32 px;
        background - color: #f9f9fb;
    }

    .application - form - title - wrapper {
        display: block;
        margin - top: 24 px;
        margin - bottom: 24 px;
    }

    .content - wrapper {
        margin - bottom: 40 px;
    }

    .job - post - header - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - bottom: 32 px; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 24 px;
    }

    .job - details - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 4 px;
    }

    .title - wrap - left {
        max - width: 570 px;
    }

    .about - content - background - color {
        position: absolute;
        left: 0 % ;
        top: 0 % ;
        right: auto;
        bottom: 0 % ;
        display: block;
        width: 60 % ;
        background - color: #f7f7fa;
    }

    .template - header {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding: 64 px 3 % ; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        background - color: #443fde;

     background-image: url("https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e198ab8c5485348f1d422a_Auth%20Background%20Pattern%20Left.svg");

     background-position: 100% 50%;

     background-size: auto;

     background-repeat: no-repeat;

     color: # fff;
    }

    .change - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
    }

    .change - badge {
        margin - bottom: 8 px;
        padding: 4 px 16 px;
        background - color: #f3f3fc;
        color: #443fde;

     font-weight: 500;

     letter-spacing: -0.03em;

   }

   

   .title-wrap-small-centre {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     max-width: 550px;

     margin-right: auto;

     margin-left: auto;

     -webkit-box-orient: vertical;

     -webkit-box-direction: normal;

     -webkit-flex-direction: column;

     -ms-flex-direction: column;

     flex-direction: column;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     text-align: center;

   }

   

   .faq-paragraph {

     margin-top: 16px;

     color: # 3e404 c;
        font - size: 14 px;
        line - height: 28 px;
        font - weight: 400;
    }

    .header - title - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        max - width: 470 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
    }

    .blog - card - thumbnail {
        height: 220 px;
    }

    .feature - grid - large {
        display: -ms - grid;
        display: grid;
        grid - auto - columns: 1 fr;
        grid - column - gap: 42 px;
        grid - row - gap: 42 px; -
        ms - grid - columns: 2 fr 1 fr;
        grid - template - columns: 2 fr 1 fr; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .feature - list - grid {
        margin - top: 44 px;
        grid - column - gap: 24 px;
        grid - row - gap: 24 px; -
        ms - grid - columns: 1 fr 1 fr;
        grid - template - columns: 1 fr 1 fr; -
        ms - grid - rows: auto auto;
        grid - template - rows: auto auto;
    }

    .about - header - video - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        height: 520 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        background - image: url("https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e198ab8c5485e8e71d41f8_adam-rhodes-ep5lX958f7E-unsplash.webp");
        background - position: 50 % 50 % ;
        background - size: cover;
    }

    .job - post - title - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - top: 24 px;
        margin - bottom: 24 px; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .business - name {
        color: #443fde;

   }

   

   .success-message {

     padding-top: 32px;

     padding-bottom: 32px;

     background-color: # 4640 de;
        color: #fff;
    }

    .google - map {
        overflow: hidden;
        width: 100 % ;
        height: 100 % ;
    }

    .blog - image - wrapper {
        height: 440 px;
    }

    .blog - section {
        position: relative;
        overflow: hidden;
        padding: 72 px 5 % ;
    }

    .color - base {
        position: relative;
        z - index: -1;
        height: 120 px;
    }

    .paragraph - style - wrap {
        max - width: 560 px;
    }

    .icon - small {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 16 px;
        height: 16 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .red - light {
        background - color: #f19e9d;
    }

    .detail {
        margin - bottom: 0 px;
        font - size: 14 px;
        line - height: 1.8;
        font - weight: 600;
        letter - spacing: 0.08 em;
        text - transform: uppercase;
    }

    .detail.text - color - primary {
        color: #443fde;

   }

   

   .detail.text-color-gray-400 {

     color: # 84889 a;
    }

    .detail.text - color - green {
        color: #3ebb7f;

   }

   

   .neutral-900 {

     background-color: # 030407;
    }

    .violet - lighter {
        background - color: #d3d2f4;
    }

    .subheading - small {
        margin - bottom: 0 px;
        font - size: 14 px;
        line - height: 1.8;
        font - weight: 500;
        letter - spacing: -0.02 em;
    }

    .fb - container - wrapper {
        position: relative;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        height: 140 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: stretch; -
        webkit - align - items: stretch; -
        ms - flex - align: stretch;
        align - items: stretch;
        border - style: dashed;
        border - width: 2 px;
        border - color: #e2e2df;
    }

    .fb - container - wrapper.example - 840 px {
        width: 100 % ;
        max - width: 840 px;
        margin - right: auto;
        margin - left: auto;
    }

    .fb - container - wrapper.example - 960 px {
        width: 100 % ;
        max - width: 960 px;
        margin - right: auto;
        margin - left: auto;
    }

    .fb - container - wrapper.example - 1140 px {
        width: 100 % ;
        max - width: 1140 px;
        margin - right: auto;
        margin - left: auto;
    }

    .orange - light {
        background - color: #f9c99f;
    }

    .document - table - wrapper {
        width: 100 % ;
    }

    .subheading - regular {
        margin - top: 0 px;
        margin - bottom: 0 px;
        font - size: 16 px;
        line - height: 1.8;
        font - weight: 500;
        letter - spacing: -0.02 em;
    }

    .fb - table - row {
        width: auto;
        min - width: 640 px;
        padding: 10 px 24 px; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center; -
        ms - grid - columns: 1 fr 1 fr 1 fr;
        grid - template - columns: 1 fr 1 fr 1 fr; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
        border - bottom: 1 px solid# e9ecf0;
    }

    .fb - table - row.table - end - row {
        border - bottom - style: none;
    }

    .orange - lighter {
        background - color: #fce5d4;
    }

    .section - x - small {
        position: relative;
        padding: 48 px 5 % ;
    }

    .margin - bottom - 32 {
        margin - bottom: 32 px;
    }

    .red - lighter {
        background - color: #f8d4d3;
    }

    .section - regular - del - me {
        position: relative;
        padding: 92 px 5 % ;
    }

    .h4 - heading {
        margin - top: 0 px;
        margin - bottom: 0 px;
        font - size: 32 px;
        line - height: 1.4;
        font - weight: 700;
        letter - spacing: -0.02 em;
    }

    .fb - style - heading {
        font - size: 16 px;
        font - weight: 600;
    }

    .margin - bottom - 44 {
        margin - bottom: 44 px;
    }

    .fb - section - wrapper {
        border - style: dashed;
        border - width: 2 px;
        border - color: #e2e2df;
    }

    .blue - darker {
        background - color: #872522;

   }

   

   .fb-table-cell {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     -webkit-box-pack: start;

     -webkit-justify-content: flex-start;

     -ms-flex-pack: start;

     justify-content: flex-start;

   }

   

   .fb-color-hex-dark {

     position: absolute;

     left: 0%;

     top: 0%;

     right: 0%;

     bottom: 0%;

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     font-size: 12px;

     line-height: 24px;

     text-transform: uppercase;

   }

   

   .neutral-100 {

     background-color: # f9f9fb;
    }

    .violet - light {
        background - color: #9d9aea;

   }

   

   .rich-darker {

     background-color: # 8 c612b;
    }

    .margin - bottom - 28 {
        margin - bottom: 28 px;
    }

    .neutral - 800 {
        background - color: #111418;

   }

   

   .section-small {

     position: relative;

     padding: 64px 5%;

   }

   

   .fb-container-grid {

     grid-row-gap: 24px;

     -ms-grid-columns: 1fr;

     grid-template-columns: 1fr;

   }

   

   .margin-bottom-88 {

     margin-bottom: 88px;

   }

   

   .fb-color-wrapper {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     -webkit-flex-wrap: wrap;

     -ms-flex-wrap: wrap;

     flex-wrap: wrap;

     -webkit-box-align: start;

     -webkit-align-items: flex-start;

     -ms-flex-align: start;

     align-items: flex-start;

     grid-column-gap: 16px;

     grid-row-gap: 16px;

   }

   

   .fb-icon-block {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 70px;

     height: 70px;

     margin: 10px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     background-color: # f3f5fb;
    }

    .fb - class - svg {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        color: #fff;
    }

    .fb - typography - block {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
        grid - row - gap: 32 px;
    }

    .neutral - 500 {
        background - color: #606476;

   }

   

   .fb-table {

     overflow: auto;

     margin-top: 32px;

   }

   

   .fb-style-link {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     padding-top: 8px;

     padding-bottom: 8px;

     -webkit-box-pack: start;

     -webkit-justify-content: flex-start;

     -ms-flex-pack: start;

     justify-content: flex-start;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     color: # 2 c2826;
        font - size: 14 px;
        line - height: 24 px;
        font - weight: 500;
        text - decoration: none;
    }

    .fb - style - link: hover {
        color: #160042;

   }

   

   .margin-bottom-24 {

     margin-bottom: 24px;

   }

   

   .fb-style-grid {

     grid-column-gap: 32px;

     grid-row-gap: 32px;

     -ms-grid-columns: 1fr 3fr;

     grid-template-columns: 1fr 3fr;

     -ms-grid-rows: auto;

     grid-template-rows: auto;

   }

   

   .neutral-white {

     background-color: # fff;
    }

    .h5 - heading {
        margin - top: 0 px;
        margin - bottom: 0 px;
        font - size: 24 px;
        line - height: 1.4;
        font - weight: 700;
        letter - spacing: -0.02 em;
    }

    .orange - dark {
        background - color: #c98b40;
    }

    .violet - darker {
        background - color: #28257e;

   }

   

   .fb-colour {

     position: relative;

     display: block;

     overflow: hidden;

     width: 100%;

     max-width: 130px;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     box-shadow: 34px 34px 74px -12px rgba(56, 50, 124, 0.08);

   }

   

   .fb-style-heading-small {

     font-size: 12px;

     font-weight: 600;

   }

   

   .icon-extra-large {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 44px;

     height: 44px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

   }

   

   .button-primary {

     padding: 10px 20px;

     -webkit-box-orient: horizontal;

     -webkit-box-direction: normal;

     -webkit-flex-direction: row;

     -ms-flex-direction: row;

     flex-direction: row;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 8px;

     grid-row-gap: 8px;

     background-color: # 443 fde; -
        webkit - transition: all 500 ms cubic - bezier(0.6, 0.6, 0, 1);
        transition: all 500 ms cubic - bezier(0.6, 0.6, 0, 1);
        color: #fff;
        font - size: 14 px;
        line - height: 24 px;
        font - weight: 500;
        text - align: center;
        letter - spacing: -0.02 em;
    }

    .button - primary: hover {
        background - color: #3935b6;

   }

   

   .button-primary:active {

     background-color: # 28257 e;
    }

    .fb - color - block {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - pack: start; -
        webkit - justify - content: flex - start; -
        ms - flex - pack: start;
        justify - content: flex - start;
        grid - column - gap: 16 px;
        grid - row - gap: 16 px;
    }

    .container - x - large {
        position: relative;
        width: 100 % ;
        max - width: 1440 px;
        margin - right: auto;
        margin - left: auto;
    }

    .paragraph - large {
        margin - bottom: 0 px;
        font - size: 18 px;
        line - height: 1.8;
        letter - spacing: -0.02 em;
    }

    .paragraph - large.text - color - white {
        color: #fff;
    }

    .margin - bottom - 12 {
        margin - bottom: 12 px;
    }

    .fb - color - hex {
        position: absolute;
        left: 0 % ;
        top: 0 % ;
        right: 0 % ;
        bottom: 0 % ;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        font - size: 12 px;
        line - height: 24 px;
        text - transform: uppercase;
    }

    .paragraph - small {
        margin - bottom: 0 px;
        font - size: 14 px;
        line - height: 1.6;
        letter - spacing: -0.02 em;
    }

    .paragraph - small.text - color - gray - 500 {
        color: #606476;

   }

   

   .red-dark {

     background-color: # bc362f;
    }

    .button - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - bottom: 40 px; -
        webkit - flex - wrap: wrap; -
        ms - flex - wrap: wrap;
        flex - wrap: wrap; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
        grid - column - gap: 16 px;
        grid - row - gap: 16 px;
    }

    .fb - typography - detail {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 100 % ;
        margin - bottom: 14 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
        grid - row - gap: 8 px;
    }

    .h3 - heading {
        margin - top: 0 px;
        margin - bottom: 0 px;
        font - size: 40 px;
        line - height: 1.2;
        font - weight: 700;
        letter - spacing: -0.02 em;
    }

    .fb - style - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
        grid - row - gap: 64 px;
        background - color: #fff;
    }

    .neutral - 600 {
        background - color: #3e404c;

   }

   

   .violet-dark {

     background-color: # 3935 b6;
    }

    .button - outline {
        padding: 9 px 19 px; -
        webkit - box - orient: horizontal; -
        webkit - box - direction: normal; -
        webkit - flex - direction: row; -
        ms - flex - direction: row;
        flex - direction: row; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center; -
        webkit - box - flex: 0; -
        webkit - flex: 0 0 auto; -
        ms - flex: 0 0 auto;
        flex: 0 0 auto;
        grid - column - gap: 8 px;
        grid - row - gap: 8 px;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff; -
        webkit - transition: all 500 ms cubic - bezier(0.6, 0.6, 0, 1);
        transition: all 500 ms cubic - bezier(0.6, 0.6, 0, 1);
        color: #030407;

     font-size: 15px;

     line-height: 24px;

     font-weight: 500;

     text-align: center;

     letter-spacing: -0.02em;

     text-decoration: none;

   }

   

   .button-outline:hover {

     border-color: # f8f8f7;
        background - color: #f8f8f7;
    }

    .button - outline: active {
        border - color: #e2e2df;
        background - color: #e2e2df;
    }

    .button - secondary {
        padding: 10 px 20 px; -
        webkit - box - orient: horizontal; -
        webkit - box - direction: normal; -
        webkit - flex - direction: row; -
        ms - flex - direction: row;
        flex - direction: row; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center; -
        webkit - box - flex: 0; -
        webkit - flex: 0 0 auto; -
        ms - flex: 0 0 auto;
        flex: 0 0 auto;
        grid - column - gap: 8 px;
        grid - row - gap: 8 px;
        background - color: #f9f9fb; -
        webkit - transition: all 500 ms cubic - bezier(0.6, 0.6, 0, 1);
        transition: all 500 ms cubic - bezier(0.6, 0.6, 0, 1);
        color: #030407;

     font-size: 15px;

     line-height: 24px;

     font-weight: 500;

     text-align: center;

     letter-spacing: -0.02em;

   }

   

   .button-secondary:hover {

     background-color: # ebebef;
    }

    .button - secondary: active {
        background - color: #d6d7e0;
    }

    .container - x - small {
        position: relative;
        width: 100 % ;
        max - width: 740 px;
        margin - right: auto;
        margin - left: auto;
    }

    .section - large {
        position: relative;
        padding: 120 px 5 % ;
    }

    .fb - typography - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - pack: start; -
        webkit - justify - content: flex - start; -
        ms - flex - pack: start;
        justify - content: flex - start; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
    }

    .fb - class - base {
        width: 100 % ; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        background - color: #f3f5fb;
    }

    .margin - bottom - 80 {
        margin - bottom: 80 px;
    }

    .h6 - heading {
        font - size: 18 px;
        font - weight: 700;
    }

    .h1 - heading {
        margin - top: 0 px;
        margin - bottom: 0 px;
        font - size: 64 px;
        line - height: 1.2;
        font - weight: 700;
        letter - spacing: -0.02 em;
    }

    .section - x - large {
        position: relative;
        padding: 144 px 5 % ;
    }

    .fb - link - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
        grid - row - gap: 4 px;
    }

    .fb - detail {
        position: absolute;
        left: 0 % ;
        top: 0 % ;
        right: 0 % ;
        bottom: 0 % ;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .margin - bottom - 16 {
        margin - bottom: 16 px;
    }

    .fb - header - block {
        margin - bottom: 32 px;
        padding: 32 px;
        background - color: #f9f9fb;
        font - size: 16 px;
        line - height: 32 px;
    }

    .fb - style - menu {
        position: -webkit - sticky;
        position: sticky;
        top: 5 % ;
        padding: 24 px;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff;
    }

    .margin - bottom - 64 {
        margin - bottom: 64 px;
    }

    .fb - line {
        width: 100 % ;
        height: 1 px;
        margin - top: 20 px;
        margin - bottom: 20 px;
        background - color: #ebebef;
    }

    .paragraph - regular {
        margin - bottom: 0 px;
        font - size: 16 px;
        line - height: 1.8;
        letter - spacing: -0.02 em;
    }

    .paragraph - regular.text - gray - 600 {
        color: #3e404c;

   }

   

   .paragraph-regular.text-color-gray-600 {

     color: # 3e404 c;
    }

    .paragraph - regular.truncate {
        overflow: hidden;
        height: 90 px;
    }

    .paragraph - regular.text - color - white {
        color: #fff;
    }

    .fb - icon - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - pack: start; -
        webkit - justify - content: flex - start; -
        ms - flex - pack: start;
        justify - content: flex - start; -
        webkit - flex - wrap: wrap; -
        ms - flex - wrap: wrap;
        flex - wrap: wrap; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .margin - bottom - 48 {
        margin - bottom: 48 px;
    }

    .neutral - 300 {
        background - color: #d6d7e0;
    }

    .orange - base {
        background - color: #f6a94c;
    }

    .margin - bottom - 72 {
        margin - bottom: 72 px;
    }

    .margin - bottom - 96 {
        margin - bottom: 96 px;
    }

    .margin - bottom - 04 {
        margin - bottom: 4 px;
    }

    .fb - class {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - top: 2 px;
        margin - bottom: 2 px;
        margin - left: 4 px;
        padding: 5 px; -
        webkit - box - pack: start; -
        webkit - justify - content: flex - start; -
        ms - flex - pack: start;
        justify - content: flex - start; -
        webkit - flex - wrap: wrap; -
        ms - flex - wrap: wrap;
        flex - wrap: wrap; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        border - radius: 8 px;
        background - color: #393b6a;

   }

   

   .button-primary-right-icon {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     padding: 10px 12px 10px 20px;

     -webkit-box-orient: horizontal;

     -webkit-box-direction: normal;

     -webkit-flex-direction: row;

     -ms-flex-direction: row;

     flex-direction: row;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 8px;

     grid-row-gap: 8px;

     background-color: # 443 fde; -
        webkit - transition: all 500 ms cubic - bezier(0.6, 0.6, 0, 1);
        transition: all 500 ms cubic - bezier(0.6, 0.6, 0, 1);
        color: #fff;
        font - size: 15 px;
        line - height: 24 px;
        font - weight: 500;
        text - align: center;
        letter - spacing: -0.02 em;
        text - decoration: none;
    }

    .button - primary - right - icon: hover {
        background - color: #3935b6;

   }

   

   .button-primary-right-icon:active {

     background-color: # 28257 e;
    }

    .neutral - 700 {
        background - color: #24262d;

   }

   

   .icon-regular {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 24px;

     height: 24px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     -webkit-transition: color 200ms ease;

     transition: color 200ms ease;

   }

   

   .document-table-header {

     width: auto;

     min-width: 640px;

     padding: 14px 24px;

     -webkit-box-pack: start;

     -webkit-justify-content: start;

     -ms-flex-pack: start;

     justify-content: start;

     justify-items: start;

     -ms-grid-columns: 1fr 1fr 1fr;

     grid-template-columns: 1fr 1fr 1fr;

     -ms-grid-rows: auto;

     grid-template-rows: auto;

     border-radius: 24px;

     background-color: # f3f5fb;
    }

    .margin - bottom - 08 {
        margin - bottom: 8 px;
    }

    .red - base {
        background - color: #e9423a;
    }

    .fb - class - detail {
        display: inline - block;
        margin - left: 4 px;
        padding: 6 px;
        border - radius: 4 px;
        background - color: #ffd6ad;
        color: #a35200;
        font - size: 12 px;
        line - height: 14 px;
        font - weight: 500;
        text - align: center;
    }

    .button - secondary - right - icon {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding: 10 px 12 px 10 px 20 px; -
        webkit - box - orient: horizontal; -
        webkit - box - direction: normal; -
        webkit - flex - direction: row; -
        ms - flex - direction: row;
        flex - direction: row; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 8 px;
        grid - row - gap: 8 px;
        background - color: #f9f9fb; -
        webkit - transition: all 500 ms cubic - bezier(0.6, 0.6, 0, 1);
        transition: all 500 ms cubic - bezier(0.6, 0.6, 0, 1);
        color: #24262d;

     font-size: 15px;

     line-height: 24px;

     font-weight: 500;

     text-align: center;

     letter-spacing: -0.02em;

     text-decoration: none;

   }

   

   .button-secondary-right-icon:hover {

     background-color: # ebebef;
    }

    .button - secondary - right - icon: active {
        background - color: #d6d7e0;
    }

    .violet - base {
        background - color: #443fde;

   }

   

   .fb-style-block {

     padding: 32px;

     border-style: solid;

     border-width: 1px;

     border-color: # ebebef;
        background - color: #fff;
    }

    .fb - style - guide {
        padding: 140 px 5 % ;
    }

    .margin - bottom - 20 {
        margin - bottom: 20 px;
    }

    .margin - bottom - 40 {
        margin - bottom: 40 px;
    }

    .neutral - 200 {
        background - color: #ebebef;
    }

    .margin - bottom - 56 {
        margin - bottom: 56 px;
    }

    .fb - class - icon {
        display: inline - block;
        margin - right: 4 px;
        padding: 6 px;
        border - radius: 4 px;
        background - color: #6b7094;

   }

   

   .neutral-400 {

     background-color: # 84889 a;
    }

    .h2 - heading {
        margin - top: 0 px;
        margin - bottom: 0 px;
        font - size: 48 px;
        line - height: 1.2;
        font - weight: 700;
        letter - spacing: -0.02 em;
    }

    .icon - large {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 32 px;
        height: 32 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .fb - class - badge {
        display: inline - block;
        padding: 6 px;
        border - radius: 4 px;
        background - color: #0f6ef3;

     color: # fff;
        font - size: 12 px;
        line - height: 14 px;
        font - weight: 500;
        text - align: center;
    }

    .margin - bottom - 36 {
        margin - bottom: 36 px;
    }

    .violet - background {
        background - color: #f3f3fc;
    }

    .red - background {
        background - color: #fdf2f2;
    }

    .orange - background {
        background - color: #fef7f1;
    }

    .green - darker {
        background - color: #246b49;

   }

   

   .green-dark {

     background-color: # 339968;
    }

    .green - base {
        background - color: #3ebb7f;

   }

   

   .green-light {

     background-color: # 9 cd3b4;
    }

    .green - lighter {
        background - color: #d2e9dc;
    }

    .green - background {
        background - color: #f1f8f4;
    }

    .footnote {
        color: #84889a;

     font-size: 12px;

     line-height: 16px;

   }

   

   .header-subheading-wrap {

     max-width: 540px;

     color: # 3e404 c;
    }

    .partnership - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center;
    }

    .header - company - span {
        color: #030407;

     font-weight: 500;

   }

   

   .section-companies {

     position: relative;

     overflow: hidden;

     padding: 138px 5%;

     background-color: # fff;
    }

    .companies - title - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - bottom: 58 px; -
        webkit - box - align: end; -
        webkit - align - items: flex - end; -
        ms - flex - align: end;
        align - items: flex - end;
        grid - column - gap: 40 px;
        grid - row - gap: 12 px;
    }

    .title - wrap - row {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - bottom: 58 px; -
        webkit - box - pack: justify; -
        webkit - justify - content: space - between; -
        ms - flex - pack: justify;
        justify - content: space - between; -
        webkit - box - align: end; -
        webkit - align - items: flex - end; -
        ms - flex - align: end;
        align - items: flex - end;
        grid - column - gap: 16 px;
        grid - row - gap: 16 px;
    }

    .text - color - primary {
        color: #443fde;

   }

   

   .image-cover {

     width: 100%;

     height: 100%;

     -o-object-fit: cover;

     object-fit: cover;

   }

   

   .testimonial-quote {

     margin-top: 0px;

     margin-bottom: 24px;

     font-size: 24px;

     line-height: 1.4;

     font-weight: 500;

     letter-spacing: -0.02em;

   }

   

   .blog-created-wrapper {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     margin-bottom: 32px;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 8px;

   }

   

   .blog-dot {

     width: 4px;

     height: 4px;

     border-radius: 100%;

     background-color: # 606476;
    }

    .blog - card - created {
        color: #606476;

     line-height: 24px;

     font-weight: 600;

     letter-spacing: 1px;

     text-transform: uppercase;

   }

   

   .blog-title {

     margin-top: 0px;

     margin-bottom: 16px;

     font-size: 20px;

     line-height: 1.4;

     font-weight: 700;

     letter-spacing: -0.02em;

   }

   

   .cta-icon-wrapper {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 64px;

     height: 64px;

     margin-top: -32px;

     margin-bottom: 48px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     border-style: solid;

     border-width: 1px;

     border-color: # ebebef;
        background - color: #fff;
    }

    .footer - left - column {
        grid - column - gap: 44 px;
        grid - row - gap: 44 px; -
        ms - grid - columns: 1 fr 1 fr 1 fr;
        grid - template - columns: 1 fr 1 fr 1 fr; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .footer - legal - links {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 48 px;
        text - align: center;
    }

    .footer - form - block {
        margin - bottom: 0 px;
    }

    .footer - social - link {
        -webkit - box - flex: 0; -
        webkit - flex: 0 0 auto; -
        ms - flex: 0 0 auto;
        flex: 0 0 auto;
    }

    .error - message {
        background - color: #fcf2f2;
    }

    .footer - legal - text - wrapper {
        margin - top: 16 px;
        margin - left: auto;
    }

    .footer - bottom {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding - top: 42 px;
        padding - bottom: 42 px; -
        webkit - box - pack: justify; -
        webkit - justify - content: space - between; -
        ms - flex - pack: justify;
        justify - content: space - between; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        border - top: 1 px solid# ebebef;
    }

    .footer - grid {
        display: -ms - grid;
        display: grid;
        margin - bottom: 100 px; -
        webkit - box - flex: 1; -
        webkit - flex: 1; -
        ms - flex: 1;
        flex: 1;
        grid - auto - columns: 1 fr;
        grid - column - gap: 60 px;
        grid - row - gap: 0 px; -
        ms - grid - columns: 1 fr 1 fr;
        grid - template - columns: 1 fr 1 fr; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .footer - column {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
        grid - row - gap: 12 px;
    }

    .footer - logo - link {
        display: inline - block;
        margin - bottom: 48 px;
        color: #1e1e48;

     font-size: 34px;

     line-height: 50px;

     font-weight: 700;

     text-decoration: none;

   }

   

   .footer-section {

     padding: 72px 3% 40px;

     border-top: 1px solid # ebebef;
    }

    .footer - social - links {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 16 px;
        grid - row - gap: 16 px;
    }

    .form - text - field {
        height: 48 px;
        margin - bottom: 0 px;
        padding: 12 px 18 px;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef# eaebf0# eaebf0;
        background - color: #fff; -
        webkit - transition: border - color 200 ms ease;
        transition: border - color 200 ms ease;
        font - size: 15 px;
        line - height: 24 px;
    }

    .form - text - field: focus {
        border - color: #7e5ae2;

   }

   

   .footer-form {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     grid-column-gap: 16px;

     grid-row-gap: 12px;

   }

   

   .foooter-right-column {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 100%;

     max-width: 450px;

     -webkit-box-orient: vertical;

     -webkit-box-direction: normal;

     -webkit-flex-direction: column;

     -ms-flex-direction: column;

     flex-direction: column;

     -webkit-box-pack: justify;

     -webkit-justify-content: space-between;

     -ms-flex-pack: justify;

     justify-content: space-between;

     -webkit-box-align: stretch;

     -webkit-align-items: stretch;

     -ms-flex-align: stretch;

     align-items: stretch;

     color: # 84889 a;
    }

    .footer - social {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        color: #84889a;

   }

   

   .footer-social:hover {

     color: # 443 fde;
    }

    .footer - link {
        -webkit - transition: color 200 ms ease;
        transition: color 200 ms ease;
        color: #030407;

     font-size: 14px;

     line-height: 28px;

     letter-spacing: -0.02em;

     text-decoration: none;

   }

   

   .footer-link:hover {

     color: # 443 fde;
    }

    .browse - section {
        position: relative;
        padding: 60 px 3 % 100 px;
        background - color: #f9f9fb;
    }

    .browse - header - section {
        position: relative;
        z - index: 1;
        margin - bottom: -80 px;
        padding: 48 px 5 % ;
    }

    .dropdown - text {
        margin - bottom: 0 px;
        color: #443fde;

     font-size: 14px;

     line-height: 1.8;

     font-weight: 500;

     letter-spacing: -0.02em;

   }

   

   .browse-wrap {

     padding-right: 1%;

     padding-left: 1%;

   }

   

   .search-field {

     height: 44px;

     margin-bottom: 0px;

     border: 1px none # 000;
    }

    .search - button {
        padding: 10 px 32 px; -
        webkit - box - orient: horizontal; -
        webkit - box - direction: normal; -
        webkit - flex - direction: row; -
        ms - flex - direction: row;
        flex - direction: row; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 8 px;
        grid - row - gap: 8 px;
        background - color: #443fde;

     -webkit-transition: all 500ms cubic-bezier(0.6, 0.6, 0, 1);

     transition: all 500ms cubic-bezier(0.6, 0.6, 0, 1);

     color: # fff;
        font - size: 14 px;
        line - height: 24 px;
        font - weight: 500;
        text - align: center;
        letter - spacing: -0.02 em;
    }

    .search - button: hover {
        background - color: #3935b6;

   }

   

   .search-button:active {

     background-color: # 28257 e;
    }

    .header - right - wrap {
        height: 100 % ;
        max - width: 50 % ;
    }

    .header - image - wrap - small {
        position: relative;
        height: 520 px;
    }

    .header - flex - row {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - pack: justify; -
        webkit - justify - content: space - between; -
        ms - flex - pack: justify;
        justify - content: space - between; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .job - border {
        display: block;
        padding: 28 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - pack: justify; -
        webkit - justify - content: space - between; -
        ms - flex - pack: justify;
        justify - content: space - between;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff; -
        webkit - transition: border - color 300 ms ease;
        transition: border - color 300 ms ease;
        color: #030407;

     text-decoration: none;

   }

   

   .job-border:hover {

     border-color: # d6d7e0;
    }

    .companies - grid {
        grid - column - gap: 72 px;
        grid - row - gap: 32 px; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .company - card - small {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding: 32 px;
        grid - column - gap: 24 px;
        background - color: #fff;
    }

    .companies - collection - list - small {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
        grid - row - gap: 56 px;
    }

    .company - positions - dark {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - top: -18 px;
        margin - left: 32 px;
        padding: 10 px 15 px; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 4 px;
        background - color: #030407;

     color: # fff;
        font - weight: 500;
        text - decoration: none;
    }

    .companies - collection - item {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
    }

    .companies - text - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
    }

    .feature - grid - wrapper {
        max - width: 680 px;
    }

    .feature - title - wrap {
        max - width: 480 px;
    }

    .about - header - bg {
        position: absolute;
        left: 0 % ;
        top: 0 % ;
        right: 0 % ;
        bottom: auto;
        height: 600 px;
        background - color: #443fde;

   }

   

   .header-badge {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     margin-bottom: 24px;

     padding: 8px 16px 8px 8px;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 12px;

     border-radius: 0px;

     background-color: # f9f9fb;
        font - size: 12 px;
        line - height: 16 px;
        font - weight: 500;
    }

    .header - badge - light {
        padding: 4 px 8 px;
        border - radius: 0 px;
        background - color: #fff;
        color: #443fde;

     font-weight: 600;

     letter-spacing: 1px;

     text-transform: uppercase;

   }

   

   .about-content-list-item {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 12px;

   }

   

   .about-content-list-wrapper {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     margin-top: 40px;

     -webkit-box-orient: vertical;

     -webkit-box-direction: normal;

     -webkit-flex-direction: column;

     -ms-flex-direction: column;

     flex-direction: column;

     grid-row-gap: 24px;

   }

   

   .contact-image-wrap {

     position: relative;

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     overflow: hidden;

     height: 560px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

   }

   

   .account-page-wrapper {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     height: 100%;

     max-width: 100%;

     min-height: 90vh;

     margin-right: 0px;

     margin-left: 0px;

     -webkit-box-orient: horizontal;

     -webkit-box-direction: normal;

     -webkit-flex-direction: row;

     -ms-flex-direction: row;

     flex-direction: row;

   }

   

   .account-form-block {

     width: 100%;

     max-width: 580px;

     margin-left: auto;

     padding: 32px;

     -webkit-box-orient: vertical;

     -webkit-box-direction: normal;

     -webkit-flex-direction: column;

     -ms-flex-direction: column;

     flex-direction: column;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

   }

   

   .account-right-block {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 50%;

     margin-left: auto;

     padding: 64px 5%;

     -webkit-box-orient: vertical;

     -webkit-box-direction: normal;

     -webkit-flex-direction: column;

     -ms-flex-direction: column;

     flex-direction: column;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     background-image: url("https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e198ab8c54855cd51d4228_Signup%20Background.svg");

     background-position: 0px 0px;

     background-size: cover;

     color: # fff;
    }

    .account - left - block {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 50 % ;
        padding - right: 3 % ;
        padding - left: 5 % ; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .account - form - title {
        margin - bottom: 48 px;
        border - style: none;
        text - align: left;
    }

    .account - form - title.text - center {
        text - align: center;
    }

    .form - divider {
        height: 1 px;
        margin - top: 23 px;
        margin - bottom: 23 px;
        background - color: #ebebef;
    }

    .form - footer {
        -webkit - box - pack: start; -
        webkit - justify - content: flex - start; -
        ms - flex - pack: start;
        justify - content: flex - start;
        grid - column - gap: 8 px;
    }

    .account - heading - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
    }

    .account - testimonial - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
        grid - column - gap: 24 px;
    }

    .account - author - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - top: 32 px; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 16 px;
    }

    .account - avatar {
        overflow: hidden;
        width: 56 px;
        height: 56 px;
        border - radius: 100 % ;
    }

    .account - testimonial - wrap - inner {
        margin - top: 42 px;
    }

    .account - content - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        height: 100 % ;
        max - height: 610 px;
        max - width: 450 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - pack: justify; -
        webkit - justify - content: space - between; -
        ms - flex - pack: justify;
        justify - content: space - between;
    }

    .checkbox - field {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - bottom: 24 px;
        padding - left: 0 px; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        line - height: 1.4;
    }

    .account - author - details {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
        grid - row - gap: 4 px;
    }

    .account - quote - icon {
        width: 72 px;
        height: 72 px;
    }

    .account - section - regular {
        width: 100 % ;
        height: 100 % ;
        max - width: 100 % ;
        margin - right: 0 px;
        margin - left: 0 px;
        padding: 220 px 5 % ; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center; -
        webkit - box - flex: 1; -
        webkit - flex: 1; -
        ms - flex: 1;
        flex: 1;
        background - color: #f9f9fb;
        background - image: url("https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e198ab8c5485348f1d422a_Auth%20Background%20Pattern%20Left.svg"),
        url("https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e198ab8c548551021d422b_Auth%20Background%20Pattern%20Right.svg");
        background - position: 100 % 0 % ,
        0 % 0 % ;
        background - size: auto,
        auto;
        background - repeat: no - repeat,
        no - repeat;
    }

    .account - form - card {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 100 % ;
        max - width: 510 px;
        padding - right: 64 px;
        padding - bottom: 64 px;
        padding - left: 64 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        background - color: #fff;
    }

    .reset - password - form {
        width: 100 % ;
    }

    .account - icon - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 64 px;
        height: 64 px;
        margin - top: -32 px;
        margin - bottom: 32 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff;
    }

    .account - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        max - width: 750 px;
        min - height: 0 vh;
        margin - right: auto;
        margin - left: auto;
        padding: 0 px 5 % 64 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        background - color: #fff;
    }

    .account - content {
        max - width: 500 px;
        margin - bottom: 0 px;
        padding: 0 px;
        border - right - style: none;
        border - bottom - style: none;
        border - left - style: none;
    }

    .user - account - form {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
    }

    .account - button {
        margin - top: 16 px;
        margin - right: 0 px;
        margin - bottom: 16 px;
        padding: 10 px 20 px; -
        webkit - box - orient: horizontal; -
        webkit - box - direction: normal; -
        webkit - flex - direction: row; -
        ms - flex - direction: row;
        flex - direction: row; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 8 px;
        grid - row - gap: 8 px;
        background - color: #443fde;

     -webkit-transition: all 500ms cubic-bezier(0.6, 0.6, 0, 1);

     transition: all 500ms cubic-bezier(0.6, 0.6, 0, 1);

     color: # fff;
        font - size: 14 px;
        line - height: 24 px;
        font - weight: 500;
        text - align: center;
        letter - spacing: -0.02 em;
    }

    .account - button: hover {
        background - color: #3935b6;

   }

   

   .account-button:active {

     background-color: # 28257 e;
    }

    .account - form - header {
        margin - bottom: 48 px;
        padding: 0 px;
        border - style: none;
        text - align: center;
    }

    .account - section {
        width: 100 % ;
        height: 100 % ;
        max - width: 100 % ;
        margin - right: 0 px;
        margin - left: 0 px;
        padding: 124 px 5 % ; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center; -
        webkit - box - flex: 1; -
        webkit - flex: 1; -
        ms - flex: 1;
        flex: 1;
        background - color: #f9f9fb;
        background - image: url("https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e198ab8c5485348f1d422a_Auth%20Background%20Pattern%20Left.svg"),
        url("https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e198ab8c548551021d422b_Auth%20Background%20Pattern%20Right.svg");
        background - position: 100 % 0 % ,
        0 % 0 % ;
        background - size: auto,
        auto;
        background - repeat: no - repeat,
        no - repeat;
    }

    .blog - slide {
        margin - right: 24 px;
    }

    .company - mask {
        overflow: visible;
        width: 390 px;
    }

    .company - slider {
        height: auto;
        background - color: #fff;
    }

    .company - arrow - r {
        left: auto;
        top: -104 px;
        right: 0 % ;
        bottom: auto;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 48 px;
        height: 48 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff; -
        webkit - transition: all 400 ms ease;
        transition: all 400 ms ease;
        color: #030407;

   }

   

   .company-arrow-r:hover {

     background-color: # ebebef;
    }

    .company - arrow - r: active {
        background - color: #d6d7e0;
    }

    .company - arrow - l {
        left: auto;
        top: -104 px;
        right: 70 px;
        bottom: auto;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 48 px;
        height: 48 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff;
        color: #d6d7e0;
    }

    .slide - nav - hidden {
        display: none;
    }

    .pricing - grid {
        margin - top: 64 px;
        grid - column - gap: 24 px;
        grid - row - gap: 24 px; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .pricing - card {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding: 40 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
    }

    .pricing - card.violet {
        border - top - width: 2 px;
        border - top - color: #443fde;

   }

   

   .pricing-card.green {

     border-top-width: 2px;

     border-top-color: # 3 ebb7f;
    }

    .pricing - price - wrap {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - align: end; -
        webkit - align - items: flex - end; -
        ms - flex - align: end;
        align - items: flex - end;
        grid - column - gap: 8 px;
    }

    .text - color - gray - 500 {
        color: #606476;

   }

   

   .pricing-date {

     margin-bottom: 10px;

     color: # 606476;
    }

    .job - submission - form - wrapper {
        padding: 8 % 5 % ; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
        grid - row - gap: 48 px;
        background - color: #f9f9fb;
    }

    .job - submission - form - number {
        position: -webkit - sticky;
        position: sticky;
        top: 140 px;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 48 px;
        height: 48 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center; -
        webkit - box - flex: 0; -
        webkit - flex: 0 0 auto; -
        ms - flex: 0 0 auto;
        flex: 0 0 auto;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        border - radius: 100 % ;
        background - color: #fff;
        font - size: 16 px;
        font - weight: 500;
    }

    .job - submission - form - section {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 100 % ;
        padding - top: 8 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
    }

    .form - field - large {
        min - height: 130 px;
        margin - bottom: 0 px;
        padding: 12 px;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
    }

    .form - field - large: focus {
        border - color: #443fde;

   }

   

   .job-submit-section {

     position: relative;

     padding: 60px 5% 120px;

     background-image: url("https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e198ab8c548551021d422b_Auth%20Background%20Pattern%20Right.svg"), url("https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e198ab8c5485348f1d422a_Auth%20Background%20Pattern%20Left.svg");

     background-position: 0px 0px, 100% 0%;

     background-size: auto, auto;

     background-repeat: no-repeat, no-repeat;

   }

   

   .preboss {

     position: relative;

     margin-right: 30px;

     margin-left: 30px;

     padding: 64px 5% 100px 0%;

     border-radius: 20px;

     background-color: # 5 b4a43;
    }

    .navbar - mobile - button - wrapper {
        display: none;
    }

    .cta - search - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - top: -31 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .job - category {
        display: inline - block;
        padding: 6 px 12 px;
        background - color: #f3f3fc;
        color: #443fde;

   }

   

   .icon-wrap-large {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 64px;

     height: 64px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     -webkit-box-flex: 0;

     -webkit-flex: 0 0 auto;

     -ms-flex: 0 0 auto;

     flex: 0 0 auto;

     border-style: solid;

     border-width: 1px;

     border-color: # ebebef;
        background - color: #fff;
    }

    .feature - content - row {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding: 16 px; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
        grid - column - gap: 16 px;
        background - color: #f9f9fb;
    }

    .testimonial - grid - v2 {
        grid - column - gap: 32 px;
        grid - row - gap: 32 px; -
        ms - grid - columns: 0.7 fr 1 fr;
        grid - template - columns: 0.7 fr 1 fr; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .testimonial - slider - v2 {
        position: static;
        width: 100 % ;
        height: 100 % ;
        max - width: 580 px;
        padding: 24 px;
        background - color: #f9f9fb;
    }

    .testimonial - card {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        height: 100 % ;
        padding: 10 % ; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
        grid - row - gap: 24 px;
        background - color: #fff;
    }

    .testimonial - author - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 16 px;
    }

    .testimonial - date - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 8 px;
    }

    .testimonial - avatar {
        width: 56 px;
        height: 56 px; -
        webkit - box - flex: 0; -
        webkit - flex: 0 0 auto; -
        ms - flex: 0 0 auto;
        flex: 0 0 auto;
    }

    .testimonial - v2 - slider - left - button {
        left: 0 % ;
        top: auto;
        right: auto;
        bottom: 0 % ;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 48 px;
        height: 48 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff; -
        webkit - transition: all 400 ms ease;
        transition: all 400 ms ease;
        color: #d6d7e0;
    }

    .testimonial - v2 - slider - left - button: hover {
        color: #030407;

   }

   

   .testimonial-v2-slider-right-button {

     left: 60px;

     top: auto;

     right: auto;

     bottom: 0%;

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 48px;

     height: 48px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     border-style: solid;

     border-width: 1px;

     border-color: # ebebef;
        background - color: #fff; -
        webkit - transition: all 400 ms ease;
        transition: all 400 ms ease;
        color: #030407;

   }

   

   .testimonial-v2-slider-right-button:hover {

     background-color: # ebebef;
    }

    .testimonial - v2 - slider - right - button: active {
        background - color: #d6d7e0;
    }

    .job - tags {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        margin - bottom: 24 px;
        grid - column - gap: 8 px;
    }

    .job - hours {
        padding: 6 px 12 px;
        background - color: #fef7f1;
        color: #c98b40;
    }

    .blog - category {
        display: inline - block;
        margin - bottom: 16 px;
        padding: 6 px 12 px;
        background - color: #f3f3fc;
        color: #443fde;

   }

   

   .company-name-wrapper {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     margin-bottom: 16px;

     -webkit-box-orient: vertical;

     -webkit-box-direction: normal;

     -webkit-flex-direction: column;

     -ms-flex-direction: column;

     flex-direction: column;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 16px;

     grid-row-gap: 32px;

   }

   

   .icon-wrap-large-copy {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 64px;

     height: 64px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     -webkit-box-flex: 0;

     -webkit-flex: 0 0 auto;

     -ms-flex: 0 0 auto;

     flex: 0 0 auto;

     border-style: solid;

     border-width: 1px;

     border-color: # ebebef;
        background - color: #fff;
    }

    .collection - list {
        display: -ms - grid;
        display: grid;
        grid - auto - columns: 1 fr;
        grid - column - gap: 24 px;
        grid - row - gap: 32 px; -
        ms - grid - columns: 1 fr 1 fr 1 fr;
        grid - template - columns: 1 fr 1 fr 1 fr; -
        ms - grid - rows: auto auto;
        grid - template - rows: auto auto;
    }

    .blog - text - wrapper {
        z - index: 4;
        height: 100 % ;
        padding: 32 px 24 px 24 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
        background - color: #fff;
    }

    .about - content - image - bottom - left {
        width: 100 % ;
        height: 100 % ;
        padding - bottom: 32 px; -
        o - object - fit: cover;
        object - fit: cover;
    }

    .collection - list - companies {
        display: -ms - grid;
        display: grid;
        grid - auto - columns: 1 fr;
        grid - column - gap: 16 px;
        grid - row - gap: 16 px; -
        ms - grid - columns: 1 fr 1 fr 1 fr;
        grid - template - columns: 1 fr 1 fr 1 fr; -
        ms - grid - rows: auto auto;
        grid - template - rows: auto auto;
    }

    .jobs - collection - list {
        display: -ms - grid;
        display: grid;
        grid - auto - columns: 1 fr;
        grid - column - gap: 24 px;
        grid - row - gap: 24 px; -
        ms - grid - columns: 1 fr 1 fr;
        grid - template - columns: 1 fr 1 fr; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .filters - submit - button {
        display: none;
    }

    .browse - check - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding: 8 px 12 px; -
        webkit - box - pack: justify; -
        webkit - justify - content: space - between; -
        ms - flex - pack: justify;
        justify - content: space - between; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .checkbox {
        width: 20 px;
        height: 20 px;
        margin - top: 0 px;
        margin - right: 12 px;
        margin - left: 0 px; -
        webkit - box - flex: 0; -
        webkit - flex: 0 0 auto; -
        ms - flex: 0 0 auto;
        flex: 0 0 auto;
        border - color: #d6d7e0;
        border - radius: 0 px;
    }

    .checkbox.w--redirected - checked {
        border - style: none;
        background - color: #443fde;

     background-image: url("https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e198ab8c54852bd01d422c_White%20Check.svg");

     background-size: auto;

   }

   

   .checkbox.w--redirected-focus {

     border-color: # d6d7e0;
        border - radius: 0 px;
        box - shadow: none;
    }

    .browse - checkbox {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 100 % ;
        margin - bottom: 0 px;
        padding - left: 0 px; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .jobs - dropdown - list {
        margin - top: 4 px;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff;
    }

    .jobs - dropdown - list.w--open {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
        grid - row - gap: 2 px;
    }

    .jobs - dropdown - link {
        width: 100 % ;
        padding: 8 px 12 px;
    }

    .jobs - dropdown - link: hover {
        background - color: #f3f3fc;
    }

    .search - input - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 100 % ; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .application - form {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
    }

    .job - submission - form - section - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        grid - column - gap: 48 px;
        grid - row - gap: 16 px;
    }

    .job - submission - form {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
        grid - row - gap: 48 px;
    }

    .checkbox - label {
        margin - bottom: 0 px;
    }

    .company - title - wrapper {
        -webkit - flex - wrap: wrap; -
        ms - flex - wrap: wrap;
        flex - wrap: wrap; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 16 px;
        grid - row - gap: 16 px;
    }

    .template - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding: 24 px; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column;
        grid - row - gap: 32 px;
        border - style: solid;
        border - width: 1 px;
        border - color: #e4e8f1;
        background - color: #fff;
    }

    .template - content {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
    }

    .blog - title - wrap {
        margin - bottom: 56 px;
    }

    .blog - slider {
        height: auto;
        background - color: #fff;
    }

    .blog - mask {
        overflow: visible;
        width: 390 px;
    }

    .testiimonial - title - wrap {
        max - width: 480 px;
    }

    .feature - image - wrap - large {
        height: 100 % ;
    }

    .blog - slider - right - button {
        left: auto;
        top: -104 px;
        right: 0 % ;
        bottom: auto;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 48 px;
        height: 48 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff; -
        webkit - transition: all 400 ms ease;
        transition: all 400 ms ease;
        color: #030407;

   }

   

   .blog-slider-right-button:hover {

     background-color: # ebebef;
    }

    .blog - slider - right - button: active {
        background - color: #d6d7e0;
    }

    .blog - slider - left - button {
        left: auto;
        top: -104 px;
        right: 70 px;
        bottom: auto;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 48 px;
        height: 48 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
        background - color: #fff;
        color: #d6d7e0;
    }

    .error - state {
        position: relative;
        margin: 24 px 0 px;
        padding: 24 px;
        background - color: #fdf2f2;
        color: #872522;

   }

   

   .account-icon-wrapper {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 80px;

     height: 80px;

     margin-bottom: 24px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     border-radius: 100%;

     background-color: # f3f3fc;
    }

    .form - header {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: start; -
        webkit - align - items: flex - start; -
        ms - flex - align: start;
        align - items: flex - start;
        text - align: left;
    }

    .redirect - block {
        margin - top: 24 px;
    }

    .success - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - row - gap: 24 px;
    }

    .title - wrap - center - large {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        max - width: 610 px;
        margin - right: auto;
        margin - bottom: 72 px;
        margin - left: auto; -
        webkit - box - orient: vertical; -
        webkit - box - direction: normal; -
        webkit - flex - direction: column; -
        ms - flex - direction: column;
        flex - direction: column; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        text - align: center;
    }

    .banner - announcement {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        min - height: 56 px;
        padding: 16 px 5 % ; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        background - color: #030407;

     background-image: url("https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e198ab8c5485348f1d422a_Auth%20Background%20Pattern%20Left.svg");

     background-position: 100% 50%;

     background-size: auto;

     background-repeat: no-repeat;

     color: # fff;
        text - align: center;
    }

    .banner - container {
        position: relative;
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        width: 100 % ;
        max - width: 1140 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
    }

    .banner - text - wrapper {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        grid - column - gap: 8 px;
    }

    .banner - button {
        display: -webkit - box;
        display: -webkit - flex;
        display: -ms - flexbox;
        display: flex;
        padding: 4 px 8 px; -
        webkit - box - pack: center; -
        webkit - justify - content: center; -
        ms - flex - pack: center;
        justify - content: center; -
        webkit - box - align: center; -
        webkit - align - items: center; -
        ms - flex - align: center;
        align - items: center;
        background - color: #443fde;

     -webkit-transition: color 300ms ease, background-color 300ms ease;

     transition: color 300ms ease, background-color 300ms ease;

     color: # fff;
        font - size: 12 px;
        line - height: 16 px;
        text - decoration: none;
        white - space: nowrap;
    }

    .banner - button: hover {
        background - color: #fff;
        color: #5167f6;

   }

   

   .banner-button-small {

     position: absolute;

     left: auto;

     top: 0%;

     right: 0%;

     bottom: 0%;

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     width: 24px;

     height: 24px;

     padding: 4px;

     -webkit-box-pack: center;

     -webkit-justify-content: center;

     -ms-flex-pack: center;

     justify-content: center;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     border-radius: 100%;

     background-color: # 24262 d; -
        webkit - transition: color 200 ms ease, background - color 200 ms ease;
        transition: color 200 ms ease, background - color 200 ms ease;
        color: #b2b3bd;
    }

    .banner - button - small: hover {
        background - color: #fff;
        color: #000;

   }

   

   .header-content {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     max-width: 559px;

     -webkit-box-orient: vertical;

     -webkit-box-direction: normal;

     -webkit-flex-direction: column;

     -ms-flex-direction: column;

     flex-direction: column;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

   }

   

   .header-badge-white {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     margin-bottom: 24px;

     padding: 8px 16px 8px 8px;

     -webkit-box-align: center;

     -webkit-align-items: center;

     -ms-flex-align: center;

     align-items: center;

     grid-column-gap: 12px;

     border-radius: 0px;

     background-color: rgba(249, 249, 251, 0.1);

     font-size: 12px;

     line-height: 16px;

     font-weight: 500;

   }

   

   .blog-header-block {

     display: -webkit-box;

     display: -webkit-flex;

     display: -ms-flexbox;

     display: flex;

     max-width: 560px;

     margin-bottom: 60px;

     -webkit-box-orient: vertical;

     -webkit-box-direction: normal;

     -webkit-flex-direction: column;

     -ms-flex-direction: column;

     flex-direction: column;

     -webkit-box-align: start;

     -webkit-align-items: flex-start;

     -ms-flex-align: start;

     align-items: flex-start;

   }

   

   .header-badge-dark {

     padding: 4px 8px;

     border-radius: 0px;

     background-color: # 443 fde;
        color: #fff;
        font - weight: 600;
        letter - spacing: 1 px;
        text - transform: uppercase;
    }

    .search - card {
        padding: 24 px;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
    }

    .browse - dropdown {
        width: 100 % ;
    }

    .browse - dropdown - toggle {
        width: 100 % ;
        padding - top: 12 px;
        padding - bottom: 12 px;
        padding - left: 12 px;
    }

    .dropdown - list {
        position: relative;
    }

    .dropdown - list.w--open {
        background - color: #f9f9fb;
    }

    .browse - alert {
        padding: 24 px;
        background - color: #fdf2f2;
        color: #872522;

     line-height: 1.6;

   }

   

   .body {

     background-color: # 816356;
    }

    .heading {
        padding - top: 0 px;
        padding - left: 0 px;
        font - family: Andyb, sans - serif;
        color: #c3c1bf;
        text - align: center;
    }

    .text - span {
        color: #e6db10;
    }

    .stage {
        width: 1269.90625 px;
        grid - template - areas: "."; -
        ms - grid - columns: 1.2 fr;
        grid - template - columns: 1.2 fr; -
        ms - grid - rows: auto;
        grid - template - rows: auto;
    }

    .text - span - 2 {
        background - color: transparent;
        background - image: url("icons/eoc.webp");
        background - position: 0 % 100 % ;
        background - size: 70 px 70 px;
        background - repeat: no - repeat;
        color: rgba(195, 193, 191, 0);
        font - size: 80 px;
        line - height: 1.2;
        background - clip: padding - box; -
        webkit - text - fill - color: inherit; -
        o - object - fit: fill;
        object - fit: fill;
    }

    .text - span - 3 {
        background - image: url("icons/kingslime.webp");
        background - position: 0 % 0 % ;
        background - size: auto;
        background - repeat: no - repeat;
        color: transparent;
    }

    .link {
        font - family: Andyb, sans - serif;
        color: #c3c1bf;
        font - size: 24 px;
    }

    .button {
        border - radius: 9 px;
        background - color: #5b4a43;

     background-image: url("icons/preboss.webp");

     background-position: 50% 50%;

     background-size: auto;

     background-repeat: no-repeat;

     line-height: 2;

     background-clip: border-box;

     -webkit-text-fill-color: inherit;

   }

   

   .terrariaguide {

     position: relative;

     padding: 64px 5% 100px;

   }

   

   .tab-link-melee {

     border-radius: 20px 20px 0px 0px;

     background-color: # 816356;
    }

    .tab - link - melee.w--current {
        border - style: none solid solid;
        border - width: 5 px 5 px 0 px;
        border - color: #816356;

     border-radius: 20px 20px 0px 0px;

     background-color: # 5 b4a43;
    }

    .image {
        border - radius: 0 px;
    }

    .tab - link - mage {
        border - radius: 20 px 20 px 0 px 0 px;
        background - color: #816356;

   }

   

   .tab-link-mage.w--current {

     border-style: none solid;

     border-width: 5px;

     border-color: # 816356;
        border - radius: 20 px 20 px 0 px 0 px;
        background - color: #5b4a43;

   }

   

   .tab-link-ranger {

     border-top-left-radius: 20px;

     border-top-right-radius: 20px;

     background-color: # 816356;
    }

    .tab - link - ranger.w--current {
        border - style: none solid;
        border - width: 5 px;
        border - color: #816356;

     background-color: # 5 b4a43;
    }

    .tab - link - summoner {
        border - top - left - radius: 20 px;
        border - top - right - radius: 20 px;
        background - color: #816356;

   }

   

   .tab-link-summoner.w--current {

     border-style: none solid;

     border-width: 5px;

     border-color: # 816356;
        background - color: #5b4a43;

   }

   

   .rich-text-block {

     font-size: 9px;

   }

   

   .rich-text-block-2 {

     padding-left: 51px;

     border-top-right-radius: 20px;

     border-bottom-left-radius: 20px;

     border-bottom-right-radius: 20px;

     background-color: # 816356;
        font - family: Andyb, sans - serif;
        color: #c3c1bf;
        text - align: center;
    }

    .tabs {
        left: 34 px;
        top: 21 px;
    }

    .heading - 2 {
        color: #c3c1bf;
        font - size: 40 px;
    }

    .heading - 3 {
        margin - top: -36 px;
        margin - left: 47 px;
        padding - top: 0 px;
        font - family: Andyb, sans - serif;
        color: #c3c1bf;
        font - size: 64 px;
    }

    .text - block {
        background - color: #816356;

   }

   

   .text-block-2 {

     margin-left: 0px;

     padding-left: 0px;

     border-top-right-radius: 20px;

     border-bottom-left-radius: 20px;

     border-bottom-right-radius: 20px;

     background-color: # 816356;
        font - family: Andyb, sans - serif;
        color: rgba(3, 4, 7, 0);
    }

    .ancientshadow {
        background - image: url("icons/ancientshadowarmor.webp");
        background - position: 50 % 100 % ;
        background - repeat: no - repeat;
        background - attachment: scroll;
        color: rgba(68, 63, 223, 0);
        font - size: 70 px;
    }

    .platinum {
        background - image: url("icons/platinumarmor.webp");
        background - position: 50 % 100 % ;
        background - size: auto;
        background - repeat: no - repeat;
        color: rgba(68, 63, 223, 0);
        font - size: 70 px;
    }

    .jungle {
        background - image: url("icons/junglearmor.webp");
        background - position: 50 % 100 % ;
        background - repeat: no - repeat;
        color: rgba(68, 63, 223, 0);
        font - size: 70 px;
        text - align: left;
    }

    .ancientcobalt {
        background - image: url("icons/ancientcobaltarmor.webp");
        background - position: 50 % 100 % ;
        background - repeat: no - repeat;
        color: rgba(68, 63, 223, 0);
        font - size: 70 px;
        background - clip: border - box; -
        webkit - text - fill - color: inherit;
    }

    .gold {
        background - image: url("icons/goldarmor.webp");
        background - position: 50 % 100 % ;
        background - repeat: no - repeat;
        color: rgba(68, 63, 223, 0);
        font - size: 70 px;
        text - align: left;
    }

    .text - span - 4 {
        color: #c3c1bf;
        font - size: 25 px;
    }

    .spaces {
        -webkit - backdrop - filter: blur(5 px);
        backdrop - filter: blur(5 px); -
        webkit - transform: translate(0 px, 0 px); -
        ms - transform: translate(0 px, 0 px);
        transform: translate(0 px, 0 px);
        color: #5b4a43;

     font-size: 70px;

     font-weight: 400;

     text-align: center;

   }

   

   @media screen and (max-width: 991px) {

     .section-regular {

       padding-top: 64px;

       padding-bottom: 64px;

     }

   

     .nav-menu {

       padding-bottom: 10px;

       background-color: # fff;
    }

    .menu - button {
        padding: 10 px;
        border - style: solid;
        border - width: 1 px;
        border - color: #ebebef;
    }

    .menu - button.w--open {
        background - color: #443fde;

     }

   

     .title {

       margin-bottom: 40px;

       -ms-grid-columns: 1.5fr;

       grid-template-columns: 1.5fr;

     }

   

     .search {

       top: -6%;

     }

   

     .partnership-text-wrap {

       display: -webkit-box;

       display: -webkit-flex;

       display: -ms-flexbox;

       display: flex;

     }

   

     .navigation-button-wrap {

       display: none;

     }

   

     .collection-list-jobs {

       -ms-grid-columns: 1fr 1fr;

       grid-template-columns: 1fr 1fr;

     }

   

     .regular-collection-list {

       -ms-grid-columns: 1fr 1fr;

       grid-template-columns: 1fr 1fr;

     }

   

     .jobs-dropdown-toggle {

       -webkit-box-align: center;

       -webkit-align-items: center;

       -ms-flex-align: center;

       align-items: center;

     }

   

     .testimonial-image-wrap {

       height: 450px;

       -webkit-box-pack: center;

       -webkit-justify-content: center;

       -ms-flex-pack: center;

       justify-content: center;

     }

   

     .testimonial-grid {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .testimonial-slider-right-button {

       left: auto;

       top: 0%;

       right: 0%;

       bottom: auto;

     }

   

     .testimonial-slider-left-button {

       left: auto;

       top: 0%;

       right: 60px;

       bottom: auto;

     }

   

     .rich-text {

       min-height: 160px;

     }

   

     .browse-grid {

       grid-column-gap: 16px;

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .search-result-list {

       grid-column-gap: 24px;

       grid-row-gap: 32px;

       -ms-grid-columns: 1fr 1fr;

       grid-template-columns: 1fr 1fr;

     }

   

     .browse-menu {

       min-width: 300px;

     }

   

     .about-header {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .section-about-header {

       padding-top: 60px;

       padding-bottom: 100px;

     }

   

     .faq-block {

       padding-right: 20px;

       padding-left: 20px;

     }

   

     .contact-us-grid {

       grid-column-gap: 32px;

     }

   

     .job-post-grid {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .feature-grid {

       grid-row-gap: 32px;

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .feature-grid-large {

       grid-row-gap: 32px;

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .fb-style-grid {

       -ms-grid-columns: 3fr;

       grid-template-columns: 3fr;

     }

   

     .fb-typography-detail {

       margin-bottom: 16px;

     }

   

     .button-outline {

       display: -webkit-box;

       display: -webkit-flex;

       display: -ms-flexbox;

       display: flex;

     }

   

     .button-secondary {

       display: -webkit-box;

       display: -webkit-flex;

       display: -ms-flexbox;

       display: flex;

     }

   

     .fb-typography-wrapper {

       -webkit-box-orient: vertical;

       -webkit-box-direction: normal;

       -webkit-flex-direction: column;

       -ms-flex-direction: column;

       flex-direction: column;

       -webkit-box-align: start;

       -webkit-align-items: flex-start;

       -ms-flex-align: start;

       align-items: flex-start;

     }

   

     .fb-header-block {

       margin-top: 0px;

     }

   

     .button-primary-right-icon {

       display: -webkit-box;

       display: -webkit-flex;

       display: -ms-flexbox;

       display: flex;

     }

   

     .button-secondary-right-icon {

       display: -webkit-box;

       display: -webkit-flex;

       display: -ms-flexbox;

       display: flex;

     }

   

     .companies-title-wrap {

       -webkit-box-orient: vertical;

       -webkit-box-direction: normal;

       -webkit-flex-direction: column;

       -ms-flex-direction: column;

       flex-direction: column;

       -webkit-box-align: start;

       -webkit-align-items: flex-start;

       -ms-flex-align: start;

       align-items: flex-start;

     }

   

     .title-wrap-row {

       -webkit-box-orient: vertical;

       -webkit-box-direction: normal;

       -webkit-flex-direction: column;

       -ms-flex-direction: column;

       flex-direction: column;

       -webkit-box-align: start;

       -webkit-align-items: flex-start;

       -ms-flex-align: start;

       align-items: flex-start;

     }

   

     .footer-left-column {

       -ms-grid-columns: 1fr 1fr;

       grid-template-columns: 1fr 1fr;

     }

   

     .footer-form-block {

       width: 100%;

     }

   

     .footer-legal-text-wrapper {

       margin-left: 0px;

     }

   

     .footer-grid {

       grid-row-gap: 60px;

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .foooter-right-column {

       max-width: 100%;

       -webkit-box-align: start;

       -webkit-align-items: flex-start;

       -ms-flex-align: start;

       align-items: flex-start;

     }

   

     .search-button {

       display: -webkit-box;

       display: -webkit-flex;

       display: -ms-flexbox;

       display: flex;

     }

   

     .header-right-wrap {

       max-width: 100%;

       margin-top: 42px;

     }

   

     .header-flex-row {

       -webkit-box-orient: vertical;

       -webkit-box-direction: normal;

       -webkit-flex-direction: column;

       -ms-flex-direction: column;

       flex-direction: column;

     }

   

     .companies-grid {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .account-page-wrapper {

       -webkit-box-orient: vertical;

       -webkit-box-direction: reverse;

       -webkit-flex-direction: column-reverse;

       -ms-flex-direction: column-reverse;

       flex-direction: column-reverse;

       -webkit-box-pack: justify;

       -webkit-justify-content: space-between;

       -ms-flex-pack: justify;

       justify-content: space-between;

     }

   

     .account-form-block {

       margin-right: auto;

     }

   

     .account-right-block {

       width: 100%;

       padding-top: 140px;

       padding-bottom: 140px;

     }

   

     .account-left-block {

       width: 100%;

       height: 100%;

       padding-top: 140px;

       padding-bottom: 140px;

       -webkit-box-flex: 1;

       -webkit-flex: 1;

       -ms-flex: 1;

       flex: 1;

     }

   

     .account-testimonial-wrap-inner {

       margin-top: 24px;

     }

   

     .account-button {

       display: -webkit-box;

       display: -webkit-flex;

       display: -ms-flexbox;

       display: flex;

     }

   

     .navbar-mobile-button-wrapper {

       display: -webkit-box;

       display: -webkit-flex;

       display: -ms-flexbox;

       display: flex;

       padding-right: 16px;

       padding-left: 16px;

     }

   

     .testimonial-grid-v2 {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .testimonial-slider-v2 {

       position: relative;

       max-width: 100%;

     }

   

     .testimonial-v2-slider-left-button {

       left: 0%;

       top: -58px;

       right: auto;

       bottom: auto;

     }

   

     .testimonial-v2-slider-right-button {

       left: 60px;

       top: -58px;

       right: auto;

       bottom: auto;

     }

   

     .collection-list {

       -ms-grid-columns: 1fr 1fr;

       grid-template-columns: 1fr 1fr;

     }

   

     .blog-text-wrapper {

       min-height: 160px;

     }

   

     .collection-list-companies {

       -ms-grid-columns: 1fr 1fr;

       grid-template-columns: 1fr 1fr;

     }

   

     .browse-check-wrapper {

       padding-top: 4px;

       padding-bottom: 4px;

     }

   

     .blog-title-wrap {

       margin-bottom: 82px;

     }

   

     .testiimonial-title-wrap {

       max-width: 100%;

       margin-bottom: 56px;

     }

   

     .blog-slider-right-button {

       left: 60px;

       top: -62px;

       right: auto;

       bottom: auto;

     }

   

     .blog-slider-left-button {

       left: 0%;

       top: -62px;

       right: auto;

       bottom: auto;

     }

   

     .banner-container {

       -webkit-box-pack: start;

       -webkit-justify-content: flex-start;

       -ms-flex-pack: start;

       justify-content: flex-start;

     }

   }

   

   @media screen and (max-width: 767px) {

     h1 {

       font-size: 50px;

     }

   

     h2 {

       font-size: 40px;

     }

   

     .nav-menu {

       background-color: # fff;
    }

    .menu - button.w--open {
        background - color: #4640de;

     }

   

     .header-image-wrap {

       height: 400px;

     }

   

     .logo-grid {

       -ms-grid-columns: 1fr 1fr 1fr;

       grid-template-columns: 1fr 1fr 1fr;

       -ms-grid-rows: auto auto;

       grid-template-rows: auto auto;

     }

   

     .navigation-button-wrap {

       display: none;

     }

   

     .collection-list-jobs {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .regular-collection-list {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .browse-grid {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .search-result-list {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .about-header {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .section-about-header {

       padding-bottom: 60px;

     }

   

     .about-content-grid {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .about-content-image-grid {

       grid-column-gap: 16px;

       grid-row-gap: 16px;

     }

   

     .about-team-image-grid {

       margin-bottom: 16px;

       grid-column-gap: 16px;

       grid-row-gap: 16px;

     }

   

     .about-team-image-grid-bottom {

       grid-column-gap: 16px;

       grid-row-gap: 16px;

     }

   

     .contact-us-grid {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .title-wrap-left {

       margin-bottom: 32px;

     }

   

     .about-content-background-color {

       display: none;

     }

   

     .feature-list-grid {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .about-header-video-wrapper {

       height: 380px;

     }

   

     .document-table-wrapper {

       white-space: nowrap;

     }

   

     .section-x-small {

       padding-top: 72px;

       padding-bottom: 72px;

     }

   

     .section-regular-del-me {

       padding-top: 72px;

       padding-bottom: 72px;

     }

   

     .h4-heading {

       font-size: 36px;

     }

   

     .fb-colour {

       margin-bottom: 25px;

     }

   

     .h3-heading {

       font-size: 40px;

     }

   

     .section-large {

       padding-top: 72px;

       padding-bottom: 72px;

     }

   

     .fb-class-base {

       margin-bottom: 25px;

     }

   

     .h1-heading {

       font-size: 48px;

     }

   

     .section-x-large {

       padding-top: 72px;

       padding-bottom: 72px;

     }

   

     .h2-heading {

       font-size: 44px;

     }

   

     .companies-title-wrap {

       margin-bottom: 100px;

     }

   

     .footer-bottom {

       padding-bottom: 20px;

       -webkit-box-orient: vertical;

       -webkit-box-direction: normal;

       -webkit-flex-direction: column;

       -ms-flex-direction: column;

       flex-direction: column;

       -webkit-box-pack: start;

       -webkit-justify-content: flex-start;

       -ms-flex-pack: start;

       justify-content: flex-start;

     }

   

     .footer-grid {

       margin-bottom: 60px;

       grid-column-gap: 40px;

       grid-row-gap: 40px;

     }

   

     .footer-logo-link {

       margin-bottom: 40px;

     }

   

     .footer-section {

       background-position: 0% 100%, 70% 0%;

     }

   

     .footer-social-links {

       margin-top: 20px;

       margin-bottom: 24px;

     }

   

     .browse-header-section {

       padding-top: 72px;

       padding-bottom: 72px;

     }

   

     .contact-image-wrap {

       height: 350px;

     }

   

     .account-form-card {

       padding-right: 5%;

       padding-left: 5%;

     }

   

     .company-mask {

       width: auto;

     }

   

     .company-arrow-r {

       left: 64px;

       top: -72px;

       right: auto;

       bottom: auto;

     }

   

     .company-arrow-l {

       left: 0%;

       top: -72px;

       right: auto;

       bottom: auto;

     }

   

     .pricing-grid {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .job-submit-section {

       padding-top: 72px;

       padding-bottom: 72px;

     }

   

     .collection-list {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .collection-list-companies {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .jobs-collection-list {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .job-submission-form-section-wrapper {

       -webkit-box-orient: vertical;

       -webkit-box-direction: normal;

       -webkit-flex-direction: column;

       -ms-flex-direction: column;

       flex-direction: column;

     }

   

     .blog-mask {

       width: auto;

     }

   

     .blog-slider-right-button {

       left: 64px;

       top: -72px;

       right: auto;

       bottom: auto;

     }

   

     .blog-slider-left-button {

       left: 0%;

       top: -72px;

       right: auto;

       bottom: auto;

     }

   

     .banner-announcement {

       background-image: none;

       background-position: 0px 0px;

       background-size: auto;

       background-repeat: repeat;

       text-align: left;

     }

   

     .banner-container {

       grid-column-gap: 24px;

     }

   

     .banner-button-small {

       position: static;

     }

   }

   

   @media screen and (max-width: 479px) {

     .header-bottom-wrap {

       margin-bottom: 36px;

     }

   

     .search {

       -webkit-box-orient: vertical;

       -webkit-box-direction: normal;

       -webkit-flex-direction: column;

       -ms-flex-direction: column;

       flex-direction: column;

       grid-row-gap: 12px;

     }

   

     .partnership-text-wrap {

       display: none;

     }

   

     .logo-grid {

       -ms-grid-columns: 1fr 1fr;

       grid-template-columns: 1fr 1fr;

     }

   

     .company-card {

       padding: 32px;

     }

   

     .browse-grid {

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .header-title-wrap {

       text-align: center;

     }

   

     .about-header-video-wrapper {

       height: 280px;

     }

   

     .button-primary {

       width: 100%;

     }

   

     .button-outline {

       width: 100%;

     }

   

     .button-secondary {

       width: 100%;

     }

   

     .button-primary-right-icon {

       width: 100%;

     }

   

     .document-table-header {

       width: 100%;

     }

   

     .button-secondary-right-icon {

       width: 100%;

     }

   

     .section-companies {

       overflow: hidden;

     }

   

     .footer-left-column {

       grid-column-gap: 20px;

       -ms-grid-columns: 1fr;

       grid-template-columns: 1fr;

     }

   

     .footer-legal-links {

       -webkit-box-orient: vertical;

       -webkit-box-direction: normal;

       -webkit-flex-direction: column;

       -ms-flex-direction: column;

       flex-direction: column;

       grid-row-gap: 8px;

     }

   

     .footer-section {

       padding-right: 20px;

       padding-left: 20px;

     }

   

     .form-text-field {

       line-height: 24px;

     }

   

     .footer-form {

       max-width: 100%;

       -webkit-flex-wrap: wrap;

       -ms-flex-wrap: wrap;

       flex-wrap: wrap;

     }

   

     .search-button {

       width: 100%;

     }

   

     .header-right-wrap {

       margin-bottom: 36px;

     }

   

     .account-right-block {

       display: none;

     }

   

     .account-button {

       width: 100%;

     }

   

     .job-tags {

       -webkit-flex-wrap: wrap;

       -ms-flex-wrap: wrap;

       flex-wrap: wrap;

       grid-row-gap: 8px;

     }

   

     .blog-slider-right-button {

       top: -60px;

     }

   

     .blog-slider-left-button {

       top: -60px;

     }

   

     .banner-button {

       display: none;

     }

   }

   

   # w - node - _01eb8987 - 0 a4a - 750 f - 5091 - 1 a98973b4cbc - 9 f1d41ce {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1; -
            ms - grid - column - align: center;
            justify - self: center;
        }

        # w - node - _2190bacf - 49 f2 - aa53 - 77 c7 - 062364 c08e8b - 9 f1d41ce {
            -ms - grid - column - align: auto;
            justify - self: auto; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1; -
            ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1;
        }

        # w - node - _27694c21 - cbfc - 58 f0 - 1e5 c - e47458f6d8dd - cf9aae39 {
            -ms - grid - column - align: end;
            justify - self: end;
        }

        # w - node - da83c76b - 8582 - bdfd - 54 ac - 0 c0749a4f522 - 391 d41e3 {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1; -
            ms - grid - row - align: end;
            align - self: end;
        }

        # w - node - ccd3efc2 - 503 c - f97e - 8 ccc - 38934 be51f5a - 391 d41e3 {
            -webkit - align - self: center; -
            ms - flex - item - align: center; -
            ms - grid - row - align: center;
            align - self: center;
        }

        # w - node - _891a2e3c - 8 db2 - 7181 - d35a - 5580 af89f693 - 391 d41e3 {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 2;
            grid - row - start: span 2; -
            ms - grid - row - span: 2;
            grid - row - end: span 2;
        }

        # w - node - _5d0089f8 - 8183 - ac45 - 04 bc - a4b4283492c6 - 391 d41e3 {
            -ms - grid - row: span 2;
            grid - row - start: span 2; -
            ms - grid - row - span: 2;
            grid - row - end: span 2; -
            ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1;
        }

        # w - node - _36ecdbfe - 7139 - 4220 - d685 - 0 caadfd024e2 - 391 d41e3 {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1;
        }

        # w - node - _36ecdbfe - 7139 - 4220 - d685 - 0 caadfd024e3 - 391 d41e3 {
            -ms - grid - row: span 2;
            grid - row - start: span 2; -
            ms - grid - row - span: 2;
            grid - row - end: span 2; -
            ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1;
        }

        # w - node - _830f4ea9 - 6 d21 - fe97 - 64e4 - cf7f5edfa5c6 - 391 d41e3 {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1;
        }

        # w - node - _8d2cf6e8 - 2 f20 - 9910 - 5 cf6 - 825 a2a726b87 - 391 d41e3 {
            -ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1; -
            ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1;
        }

        # w - node - _2188cea0 - b1c9 - 1999 - 8 d80 - 7 a5f0d7bc428 - 391 d41e3 {
            -ms - grid - row: span 2;
            grid - row - start: span 2; -
            ms - grid - row - span: 2;
            grid - row - end: span 2; -
            ms - grid - column: span 2;
            grid - column - start: span 2; -
            ms - grid - column - span: 2;
            grid - column - end: span 2;
        }

        # w - node - _0b6fa830 - 0 fde - 8 a26 - 8 fdc - 27 f1d31bfcc7 - 391 d41e3 {
            -ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1; -
            ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1;
        }

        # w - node - a681d0e8 - a327 - f6e8 - 1998 - 8 a38a6660cf0 - 391 d41e3 {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1;
        }

        # w - node - a681d0e8 - a327 - f6e8 - 1998 - 8 a38a6660cf1 - 391 d41e3 {
            -webkit - align - self: center; -
            ms - flex - item - align: center; -
            ms - grid - row - align: center;
            align - self: center;
        }

        # w - node - _80c74753 - c7d6 - 9908 - f823 - 7e5 aecd26239 - 981 d4219 {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1;
        }

        # w - node - d1272945 - c282 - 7568 - e033 - 3334913 f6d8f - 981 d4219 {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1;
        }

        # w - node - dcf6ff74 - 637 f - 7565 - 91 f6 - 2 c6a9e671fa9 - 981 d4219 {
            -ms - grid - column - align: end;
            justify - self: end;
        }

        # w - node - _197808c8 - 1 a74 - e70e - 175 b - 8 ed261846aaa - 871 d421e {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1;
        }

        # w - node - _35571b41 - 498 a - 13 b4 - c487 - 1 c69096208df - 871 d421e {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1;
        }

        # w - node - _7456eeba - 3 d14 - bf7a - 9553 - 9036844 f9100 - 871 d421e {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1;
        }

        # w - node - _7198811f - 31 c1 - b07d - c003 - 160563186162 - 871 d421e {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1;
        }

        # w - node - dc74b299 - 8110 - cea0 - 5 b95 - 6 f333e7f82de - e61d421f {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1;
        }

        # w - node - c306cebb - 096 b - 6615 - 5383 - af62b161ad25 - e61d421f {
            -ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1; -
            ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1;
        }

        # w - node - _6058231e8140675366f5c23f000000000014 - 4e1 d4221 {
            -ms - grid - row: span 1;
            grid - row - start: span 1; -
            ms - grid - row - span: 1;
            grid - row - end: span 1; -
            ms - grid - column: span 1;
            grid - column - start: span 1; -
            ms - grid - column - span: 1;
            grid - column - end: span 1;
        }

        @media screen and(max - width: 991 px) {
            #
            w - node - d1272945 - c282 - 7568 - e033 - 3334913 f6d8f - 981 d4219 {
                -webkit - box - ordinal - group: -9998; -
                webkit - order: -9999; -
                ms - flex - order: -9999;
                order: -9999;
            }

            # w - node - dcf6ff74 - 637 f - 7565 - 91 f6 - 2 c6a9e671fa9 - 981 d4219 {
                -ms - grid - column - align: start;
                justify - self: start;
            }
        }
        @font - face {
            font - family: 'Andyb';
            src: url('https://uploads-ssl.webflow.com/63e198ab8c548526fc1d41c1/63e1a05db6ceef503ce4863a_ANDYB.TTF') format('truetype');
            font - weight: 400;
            font - style: normal;
            font - display: swap;
        }