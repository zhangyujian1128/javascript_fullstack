//功能函数
export function debounce (func,delay){
    let timer
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
       timer = setTimeout(()=>{
            func.apply(this,args)          //apply(this):绑定this以防func里的this作用域被修改
        },delay)
    }
}

export function findIndex(list, song){
    return list.findIndex((item)=>{
        return item.id === song.id
    })
}