# less-plugin-remcalc

Simply adds `rem-base` and `rem-calc` functions to LESS.

[![NPM](https://nodei.co/npm/less-plugin-remcalc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/less-plugin-remcalc/)

## Installation

```
yarn add --dev less-plugin-remcalc
```

## Usage

### lessc

On the command line:

```
lessc file.less --remcalc
```

### node

```js
var remcalc = require('less-plugin-remcalc');

less.render(data, { plugins: [remcalc] }).then(...);
```

### grunt (grunt-contrib-less)

Register the plugin in your `Gruntfile.js`:

```js
less: {
    options: {
        plugins: [
            require('less-plugin-remcalc')
        ]
    }
}
```

### webpack (less-loader)

```js
var RemcalcPlugin = require('less-plugin-remcalc');

module.exports = {
  ...
  lessLoader: {
    lessPlugins: [
      RemcalcPlugin
    ]
  }
};
```

## Examples

### Basic

```less
.card {
  min-width: rem-calc(64px);
}

.card {
  min-width: rem-calc(64);
}
```

### Overriding the rem base

Default base is `16px` but you can override it at any time (here with `12px`):

```less
.card {
  padding: rem-calc(20px, 12px);
}
```

You can also act globally on the rem base, using:

```less
@rem-base: rem-base(10px); // will globally override the rem base.

.card {
  min-width: rem-calc(20px); // is now equivalent to rem-calc(20px, 10px);
}
```

If you set rem base to `0` - it will disable the conversion and 
input value will be bypassed with pixels unit.

```less
@rem-base: rem-base(0); // disable globally

.card {
  min-width: rem-calc(20px); // output is 20px
  min-width: rem-calc(20); // output is 20px
  min-width: rem-calc(20px, 16px); // output is 1.25rem
}
```

```less
.card {
  min-width: rem-calc(20px); // output is 1.25rem
  min-width: rem-calc(20px, 0); // output is 20px (disable locally)
}
```
