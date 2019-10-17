const FRAME_WIDTH=988/4,
    FRAME_HIGHT=1164/6, //
    MASK_WIDTH=146; //阴影

    //封装
    class ThreeDTouch{
        //构造函数
        constructor(el,callback){
            this.el=el;
            this.callback=callback;
            this.bindEvents();
        }
        bindEvents(){
            this.el.addEventListener('touchstart',this.touchDidStrart);
            this.el.addEventListener('touchforchechange',this.touchforceDidChange);
        }
    }

    let toucher = new ThreeDTouch(document.getElementById('force_btn'),function(){

    })
    Console.log(toucher);