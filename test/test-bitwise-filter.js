'use strict';

describe('Testing filters', function () {

  beforeEach(module('bitwiseFilters'));

  describe('bitwiseAND', function() {
    it("should return true for all statements",
      inject(function(bitwiseANDFilter) {
        expect(bitwiseANDFilter(1, 1)).toBe(1);

      }
    ));

    it("should return true for all statements",
      inject(function(bitwiseANDFilter) {
        expect(bitwiseANDFilter(1, 0)).toBe(0);
      }
    ));

    it("should return true for all statements",
      inject(function(bitwiseANDFilter) {
        expect(bitwiseANDFilter(true, true)).toBe(1);
      }
    ));

    it("should return true for all statements",
      inject(function(bitwiseANDFilter) {
        expect(bitwiseANDFilter(true, false)).toBe(0);
      }
    ));
  });

  describe('bitwiseOR', function() {
    it("should return true for all statements",
      inject(function(bitwiseORFilter) {
        expect(bitwiseORFilter(1, 1)).toBe(1);

      }
    ));

    it("should return true for all statements",
      inject(function(bitwiseORFilter) {
        expect(bitwiseORFilter(1, 0)).toBe(1);
      }
    ));

    it("should return true for all statements",
      inject(function(bitwiseORFilter) {
        expect(bitwiseORFilter(true, true)).toBe(1);
      }
    ));

    it("should return true for all statements",
      inject(function(bitwiseORFilter) {
        expect(bitwiseORFilter(true, false)).toBe(1);
      }
    ));
  });

});