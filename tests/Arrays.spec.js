import { expect } from "chai";

describe('Arrays',()=>{
    describe('#sort',()=>{

        it('Sorting names array',()=>{
            var names = ['Tal', 'Sapir', 'Gal', 'Omer'];
            expect(names.sort()).to.be.eql(['Gal','Omer','Sapir','Tal']);
        })
    })
})