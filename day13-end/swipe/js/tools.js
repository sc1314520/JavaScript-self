function move(obj,attr,target,speed,callback){
    clearInterval(obj.timer); // undefined 不會報錯。

    // 獲取元素目前位置。
    var current =parseInt(getStyle(obj,attr)) ;
    if(current>target){
        speed=-speed;
    }

    obj.timer=setInterval(function(){
            
            var newValue =parseInt(getStyle(obj,attr)) +speed;
            console.log(newValue)
            if(newValue<target && speed<0 || speed >0 && newValue>target){
                newValue=target;
            }

            obj.style[attr]=newValue+"px";

            if(newValue==target){
                clearInterval(obj.timer);
                callback && callback();
            }
       },30);

    };
    function getStyle(obj,name){
        // window.getComputedStyle 是屬性
        // getComputedStyle 是變量 --> IE8 會報錯
        if(window.getComputedStyle){ // 有此屬性則返回 true
            return getComputedStyle(obj,null)[name];
        }
        return getcurrentStyle[name];

    }