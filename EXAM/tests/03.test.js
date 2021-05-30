const numberOperations = require('../03. Number Operations_Resources')
const expect = require('chai').expect;

describe("Test", function() {
    describe("powNumber", function() {
        it("Returns power of a number", function() {
            expect(numberOperations.powNumber(5)).to.equal(25);
        });
     });
     describe("numberChecker", function(){
         it("recognises NaN", function(){
             expect(numberOperations.numberChecker('true')).to.equal(Error('The input is not a number!'))
         })
         it("recognises Number below 100", function(){
             expect(numberOperations.numberChecker(99)).to.equal("The number is lower than 100!")
         })

         it("recognises Number 100+", function(){
             expect(numberOperations.numberChecker(101)).to.equal(`The number is greater or equal to 100!`)
         })
         it("recognises Number 100", function(){
            expect(numberOperations.numberChecker(100)).to.equal(`The number is greater or equal to 100!`)
        })

     })
     describe("sumArrays", function(){
        it("calculates Numbers on same indexes", function(){
            expect(numberOperations.sumArrays([1,2,3],[4,5,6])).to.deep.equal([5,7,9]);
        })
        it("creates new array", function(){
            expect([1,3],[4,6,7]).to.deep.equal([5,9,7])
        })
     })
     
})
