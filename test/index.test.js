require('../index.js')
var expect = require('chai').expect

describe('index test', function(){
    var ary = [1,2,3,5,7]
    it('String.to_i', function(){
        expect( '1'.to_i() ).to.be.equal(1)
    })
    it('Number.to_s', function(){
        var number = 123
        expect( number.to_s() ).to.be.equal('123')
    })
    it('Array.fetch method',function(){
        expect(ary.fetch(9, 'zero')).to.be.equal('zero')
        expect(ary.fetch(9, 0)).to.be.equal(0)
        expect(ary.fetch(2)).to.be.equal(3)
    })
    it('Array have select method', function(){
        expect(ary.select(even)[0] ).to.be.equal(2)
    })
    it('Array have odd and size method', function(){
        expect(ary.select(odd).size() ).to.be.equal(4)
    })
})
