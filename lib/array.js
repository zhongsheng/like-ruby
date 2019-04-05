Array.prototype.is_array = true
Array.prototype.to_s = function(point, opt=''){
    return this.toString()
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

Array.prototype.flatten = function(level){
    if(defined(level) && level==0){return this}
    let ary = []
    this.forEach( x=> {
        if(x.is_array && ( !defined(level) || (level-- > 0))){
            ary = ary.concat(x.flatten(level))
        }else{
            ary.push(x)
        }
    })
    return ary
}
