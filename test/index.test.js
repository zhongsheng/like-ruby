require('../index.js')
var expect = require('chai').expect

describe('index test', function(){
    it('should return integer', function(){
        expect( '1'.to_i() ).to.be.equal(1)
    })
    it('should return string', function(){
        var number = 123
        expect( number.to_s() ).to.be.equal('123')
    })
})
