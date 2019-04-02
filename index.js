String.prototype.to_i = function(){
    return parseInt(this)
}

Number.prototype.to_s = function(){
    return this.toString()
}

Number.prototype.even = function(){
    if(this%2){
        return false
    }else{
        return true
    }
}

Array.prototype.fetch = function(point, opt=''){
    return this[point] || opt
}
Array.prototype.count = function(){
    return this.length
}

Array.prototype.size = function(){
    return this.length
}

Array.prototype.reject = function(func){
    let ary = []
    this.forEach(x => {
        if(!func(x)){
            ary.push(x)
        }
    })
    return ary
}

Array.prototype.sum = function(func){
    let sum_value = 0
    this.forEach(x=>{
        if(typeof func == 'function'){
            if(func(x) === true){
                sum_value += x
            }else{
                sum_value += func(x)
            }
        }else{
            sum_value += x
        }
    })
    return sum_value
}
Array.prototype.select = function(func){
    let ary = []
    this.forEach(x => {
        if(func(x)){
            ary.push(x)
        }
    })
    return ary
}
Array.prototype.chunk = function(func){
    let ary = []
    let items = []
    this.forEach(x=>{
        var state = func(x)
        if(items[0] === state){
            items[1].push(x)
        }else{
            if(items.length > 0){
                ary.push(items)
                items = []
            }
            items.push(state,[])
            items[1].push(x)
        }
    })
    ary.push(items)
    return ary
}

global.even = function(arg,arg_c){
    if(typeof arg_c == 'number' ){
       return arg%2 - arg_c%2
    }
    if(arg%2 == 0){
        return true
    }else{
        return false
    }
}

global.odd = function(arg){
    if(arg%2 == 0){
        return 0
    }else{
        return arg
    }
}

global.pp = function(arg){
    console.log(arg)
}
