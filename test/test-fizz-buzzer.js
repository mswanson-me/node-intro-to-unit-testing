const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

    it('should raise error if arg not number', function() {
        const badInputs = [
          'a',
          '1',
          false
        ];

        badInputs.forEach(function(input) {
          expect(function() {
            fizzBuzzer(input);
          }).to.throw(Error);
        });
      });

    it('should return \'fizz-buzz\' if value is divisible by 15', function() {

        const fizzBuzzCases = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 150, expected: 'fizz-buzz'},
            {num: 75, expected: 'fizz-buzz'},
        ];
    
        fizzBuzzCases.forEach(function(input) {
          const answer = fizzBuzzer(input.num);
          expect(answer).to.equal(input.expected);
        });
    });

    
    it('should return \'fizz\' if value is divisible by 3', function() {

        const fizzCases = [
            {num: 3, expected: 'fizz'},
            {num: 99, expected: 'fizz'},
            {num: 666, expected: 'fizz'},
        ];
    
        fizzCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
          });
    });

    it('should return \'buzz\' if value is divisible by 5', function() {

        const buzzCases = [
            {num: 5, expected: 'buzz'},
            {num: 20, expected: 'buzz'},
            {num: 565, expected: 'buzz'},
        ];
    
        buzzCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
          });
    });

});