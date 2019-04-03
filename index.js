require('./lib/array.js')
require('./lib/number.js')
require('./lib/string.js')

if((typeof window)=='undefined'){
    var thisGlobal = global
}else{
    var thisGlobal = window
}

thisGlobal.even = function(arg,arg_c){
    if(typeof arg_c == 'number' ){
       return arg%2 - arg_c%2
    }
    if(arg%2 == 0){
        return true
    }else{
        return false
    }
}

thisGlobal.odd = function(arg){
    if(arg%2 == 0){
        return 0
    }else{
        return arg
    }
}

thisGlobal.pp = function(arg){
    return console.log(arg)
}
