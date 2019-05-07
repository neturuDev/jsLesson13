'use strict';
var person = {};

Object.defineProperties(person, {
    rate: {
        writable: true
    },
    salary: {
        get: function() {
            let result;
            if (this.rate) {
                result = this.rate * new Date().getDate();
            } else {
                result = 0;
            }
            return result;
        },
        enumerable: true
    }
  });