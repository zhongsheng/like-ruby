require('../index.js')
var expect = require('chai').expect

describe('index test', function(){
    var ary = [1,2,3,5,7]
    var obj = {name: 'Jon', phone: '123'}
    var num = 1
    it('String.to_i', function(){
        expect( '1'.to_i() ).to.be.equal(1)
    })
    it('Number.to_s', function(){
        var number = 123
        expect( number.to_s() ).to.be.equal('123')
    })

    it('Number.even', function(){
        expect(num.even()).to.be.equal(false)
    })

    it('Regexp has match', function(){
        let reg = /(hello)\sworld/
        let str = 'hello world'
        expect( str.match(/(hello)/)[1] ).to.be.equal('hello')
        expect( reg.match('hello world', x => { return x[0]}) ).to.be.equal('hello world')
        expect( reg.match('hello world', x => { if(x){pp(x)} ;return x[1]}) ).to.be.equal('hello')
    })

    it('String upcase and downcase', function(){
        let str = 'Hello world'
        expect( str.upcase() ).to.be.equal('HELLO WORLD')
        expect( str.downcase() ).to.be.equal('hello world')
    })
    it('String gsub', function(){
        let str = 'Hello world'
        expect( str.gsub(/[aeiou]/g, 'v') ).to.be.equal('Hvllv wvrld')
    })
    it('String scan', function(){
        let str = 'cruel world'
        expect( str.scan(/\w+/).to_s() ).to.be.equal('cruel,world')
    })

    it('String scan with block', function(){
        let str = 'cruel world'
        let scaned_str = [["cr", "ue"], ["l ", "wo"]].to_s().upcase()
        expect( str.scan(/(..)(..)/, (x,y) => { return [x.upcase(),y.upcase()];}).to_s() ).to.be.equal(scaned_str)
        pp('name: zhong, phone: 123'.scan(/(\w+): (\w+)/))
        expect('name: zhong, phone: 123'.scan(/(\w+): (\w+)/, (x,y)=>{ return x+'-'+y}).to_s()).to.be.equal('name-zhong,phone-123')

    })
})
