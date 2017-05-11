# angular-bitwise-filter

Simple AngularJS bitwise filter

## What are Bitwise operators?

[Bitwise Operators](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

## Installation

You have 2 ways to install this module:

1) Download angular-bitwise-filter.min.js to your JS app directory

2) Bower

```sh
bower install angular-bitwise-filter --save

```

Load the script in your app

```html
<script src="<path-to>/angular-bitwise-filter.min.js"></script>
```

## Usage

Include the module as a dependency in your app:

```js
angular.module('MyApp', ['bitwiseFilters']);
```

In your app view html

```html
<span ng-if="isActiveBit | bitwiseAND : 1">
	Show this!
</span>
```

## Test and Build

```sh
npm install
bower install
grunt
```

## Support

Please [open an issue](https://github.com/lborgav/angular-bitwise-filter/issues/new) for support.
