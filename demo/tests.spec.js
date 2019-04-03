var expect = chai.expect;
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

    it('Regexp has match', function(){
        let reg = /hello/
        expect( reg.match('hello world', x => {return x[1]}) ).to.be.equal('hello')
    })

})
