// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

'use strict';

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
