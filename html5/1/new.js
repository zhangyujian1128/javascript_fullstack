var a = 'abccasbcbc' 
var b = 'bc'
var c = 'cb'

function fun(str1,str2,str3){
    if(str1.indexOf(str2) > -1) {
        let arr = str1.split(str2)
        let newArr1 = arr.join(str3)
        return fun(newArr1, str2, str3)
    } else {
        return str1
    }
}

console.log(fun(a, b, c))