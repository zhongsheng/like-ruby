String.prototype.to_i = function(){
    return parseInt(this)
}

Number.prototype.to_s = function(){
    return this.toString()
}

Array.prototype.fetch = function(point, opt=''){
    return this[point] || opt
}

Array.prototype.size = function(){
    return this.length
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

global.even = function(arg){
    if(arg%2 == 0){
        return true
    }else{
        return false
    }
}

global.odd = function(arg){
    if(arg%2 == 0){
        return false
    }else{
        return true
    }
}
