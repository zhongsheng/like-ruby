require('../index.js')
var expect = require('chai').expect

describe('array test', function(){
    var ary = [1,2,3,5,7]
    var obj = {name: 'Jon', phone: '123'}
    var num = 1

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
        expect(ary.select(odd).count() ).to.be.equal(4)
    })
    it('Array reject method', function(){
        expect(ary.reject(even).size()).to.be.equal(4)
        expect(ary.reject(x => { return x > 3}).size()).to.be.equal(3)
    })

    it('Array sum',function(){
        expect(ary.sum()).to.be.equal(18)
        expect(ary.sum(even)).to.be.equal(2)
        expect(ary.sum(odd)).to.be.equal(16)

    })

    it('Array chunk',function(){
        let ary = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        pp(ary.chunk(even))
        if((typeof window) == 'undefined'){
            pp('window is undefined')
        }
        expect( ary.chunk(even).size() ).to.be.equal(5)
        expect( ary.sort(even).chunk(even).size() ).to.be.equal(2)
    })

    it('flatten', function(){
        let t = [ 4, 5, 6, [7, 8, [2,3]] ]
        expect(t.flatten().size()).to.be.equal(7)
        expect(t.flatten(0).size()).to.be.equal(4)
        expect(t.flatten(1).size()).to.be.equal(6)
        let ary = [1,2,[3,4,[5,6,[7,8]]]]
        pp(ary.flatten(2))
        expect(ary.flatten(2).size()).to.be.equal(7)
    })

})
