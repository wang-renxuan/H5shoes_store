/**
 * Created by hxsd on 2017/2/22.
 */
//拖拽
function drag(obj,tit) {
    tit=tit||obj;
    tit.onmousedown = function (ev) {
        ev = ev || event;
        var disX = ev.clientX - obj.offsetLeft;
        var disY = ev.clientY - obj.offsetTop;
        document.onmousemove = function (ev) {
            ev = ev || event;
            var l = ev.clientX - disX;
            var t = ev.clientY - disY;
            l<0?l=0:null;
            t<0?t=0:null;
            l>document.documentElement.clientWidth-obj.offsetWidth ? l=document.documentElement.clientWidth-obj.offsetWidth:null;
            t>document.documentElement.clientHeight-obj.offsetHeight ? t=document.documentElement.clientHeight-obj.offsetHeight:null;
            obj.style.left = l + "px";
            obj.style.top = t + "px";
        };
        document.onmouseup = function () {
            document.onmousemove = ''
        };
        return false;//取消选中文字  oDiv.onmousedown
    };
}
//绝对居中

function showCenter(obj) {
    obj.style.display='block';
    obj.style.position='absolute';
    function run(){
        var screenW=document.documentElement.clientWidth;
        var screenH=document.documentElement.clientHeight;
        obj.style.left = (screenW - obj.offsetWidth) / 2 + "px";
        obj.style.top = (screenH - obj.offsetHeight) / 2 + "px";
    }
    run();
    window.onresize=showCenter;
}

