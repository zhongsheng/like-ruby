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
