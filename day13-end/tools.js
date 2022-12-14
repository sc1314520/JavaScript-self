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
    




    function addClass(obj,cn){
        if(!hasClass(obj,cn)){
            obj.className+=" "+cn;
        }
    }

    function removeClass(obj,cn){
        var reg=new RegExp("\\b"+cn+"\\b");

        obj.className=obj.className.replace(reg,"");
    }
    function hasClass(obj,cn){
        // 判斷有沒有 cn 這個 class
        var reg=new RegExp("\\b"+cn+"\\b");
        console.log(reg);
        return reg.test(obj.className);
    }

    function toggleClass(obj,cn){
        if(hasClass(obj,cn)){
            removeClass(obj,cn);
        }
        else{
            addClass(obj,cn);
        }
    }