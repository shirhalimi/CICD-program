const expect = require('chai').expect;

describe('Array', ()=> {
    describe('#sort', ()=> {
        it('shold sort the array by name', ()=> {
            var names = ['Dani', 'Moshe', "Adam"];
            expect(names.sort()).to.be.eql(['Adam', "Dani", "Moshe"]);
        });
    });
});