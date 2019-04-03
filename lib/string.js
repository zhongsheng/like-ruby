String.prototype.to_i = function(){
    return parseInt(this)
}

Object.prototype.match = function(str, func){
    return func(str.match(this))
}
