Object.prototype.match = function(str, func){
    return func(str.match(this))
}

String.prototype.to_i = function(){
    return parseInt(this)
}

String.prototype.downcase = function(){
    return this.toLowerCase()
}

String.prototype.upcase = function(){
    return this.toUpperCase()
}

String.prototype.gsub = function(reg, str){
    return this.replace(reg, str)
}

String.prototype.scan = function(reg, func){
    let ary = []
    reg_str = reg + 'g'
    if(reg_str.match(/\(.+\)/)){
       reg = eval(reg_str)
        let match;
        while (match = reg.exec(this)) {
            if(typeof func == 'function'){
                match.shift()
                ary.push(func(...match))
            }else{
                ary.push(match)
            }
        }
    }else{
        reg = eval(reg_str)
        this.match(reg).forEach(x => {
            if(typeof func == 'function'){
                ary.push(func(x))
            }else{
                ary.push(x)
            }
        })
    }
    return ary

}
