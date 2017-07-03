/**
 * AngularJS filter for bitwise operations
 * @version v0.1.3 - 2017-06-30
 * @author Leonardo Borges Avelino
 * @license MIT
**/

'use strict';
// Source: src/bitwise-filter.js
// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

var mod = angular.module('bitwiseFilters', []);

// Bitwise NOT
mod.filter('bitwiseNOT', function () {
  return function (number) {
    return (~number);
  };
});

// Bitwise AND
mod.filter('bitwiseAND', function () {
  return function (firstNumber, secondNumber) {
    return (firstNumber&secondNumber);
  };
});

// Bitwise OR
mod.filter('bitwiseOR', function () {
  return function (firstNumber, secondNumber) {
    return (firstNumber|secondNumber);
  };
});

// Bitwise XOR
mod.filter('bitwiseXOR', function () {
  return function (firstNumber, secondNumber) {
    return (firstNumber^secondNumber);
  };
});

// Bitwise RIGHT SHIFT
mod.filter('bitwiseRS', function () {
  return function (firstNumber, secondNumber) {
    return (firstNumber>>secondNumber);
  };
});

// Bitwise LEFT SHIFT
mod.filter('bitwiseLS', function () {
  return function (firstNumber, secondNumber) {
    return (firstNumber<<secondNumber);
  };
});

// Bitwise ZERO FILLED RIGHT SHIFT
mod.filter('bitwiseZFRS', function () {
  return function (firstNumber, secondNumber) {
    return (firstNumber>>>secondNumber);
  };
});

// Bitwise toggle by bit index
mod.filter('bitwiseTOG', function () {
  return function (number, bitIndex) {
    return (number^(1<<bitIndex));
  };
});
