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