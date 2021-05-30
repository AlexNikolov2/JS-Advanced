const dealership = require('./01-code');
const expect = require('chai').expect;

describe('test', () =>{
    describe('returnOldCar', () =>{
        it('returns original price when model unsupported', () =>{
            expect(dealership.newCarCost('a', 1)).to.equal(1);
        })
        it('returns discounted price', () =>{
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000)
        })
    });
    describe('carEquipment', () =>{
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a'])
        })
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a','b','c'], [0,2])).to.deep.equal(['a', 'c'])
        })
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [1])).to.deep.equal(['b'])
        })
        
    });
    describe('euroCategory', () =>{
        it('category is below threshold', () =>{
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount for the car')
        })
        it('category is  threshold', () =>{
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.')
        })
        it('category is at threshold', () =>{
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
        })
    });
});