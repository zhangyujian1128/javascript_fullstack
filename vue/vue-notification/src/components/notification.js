import vue from 'vue'

import Notification from './Notification.vue'

// new Swiper()
// new Gcode()
// 面向对象实现代码复用的效果
const NotificationConstructor = vue.extend(Notification);
let notification
export const open =({ title,content })=>{
    if(notification){
        notification.title=title;
        notification.content=content;
    }else{
        let notification =new NotificationConstructor({
        el: document.createElement('div'),
        propsData:{
            visiable: true,
            title,
            content
            }
        })
    }
document.body.appendChild(notification.$el)
}

export const close = function(){
    notification.visiable = false
    document.body.removeChild(notification.$el)
    notification = null
}