/**
 * Created by hxsd on 2017/2/24.
 */

//错误弹框
function errBox(txt){
    var oDiv=document.createElement('div');
    oDiv.className='errBox';
    oDiv.innerHTML=txt;
    document.body.appendChild(oDiv);

    var oErrBox=document.getElementsByClassName('errBox')[0];
    console.log(oErrBox);
    showCenter(oErrBox);
    drag(oErrBox);
    auto_hide();
    var timer;
    function auto_hide() {
        clearTimeout(timer);
        timer=setTimeout(function () {
            document.body.removeChild(oDiv);
            //oDiv.style.display = 'none';
        }, 700)
    }
//鼠标放置后关闭定时器
    oDiv.onmouseover=function(){
        clearTimeout(timer);
    };
//鼠标out后打开定时器
    oDiv.onmouseout=function(ev){
        auto_hide();
        ev = ev || event;
        ev.cancelBubble = true;
    };

}
function login(){
    function aprLogin() {
        var model = document.createElement('div');
        model.className = 'model';
        //var mod=''
        model.innerHTML = '<div class="login">' +
            '<h4>Login</h4>' +
            '<a class="closeBtn"  href="javascript:;">×</a>' +
            '<form>' +
            '<p>账　号:　<input id="user" type="text" name="user"></p>' +
            '<p>密　码:　<input type="password" name="password"></p>' +
            '<p class="conf"><button type="submit">确定</button>&nbsp&nbsp&nbsp<button type="button" class="closeBtn">取消</button></p>' +
            '</form>' +
            '</div>';

        document.body.appendChild(model);

    }
    aprLogin();


    var oLogin=document.getElementsByClassName('login')[0];
    var oModel=document.getElementsByClassName('model')[0];
    var aClose=document.getElementsByClassName('closeBtn');
    var oH=document.getElementsByTagName('h4')[0];


    drag(oLogin,oH);
    showCenter(oLogin);

    for(var i=0;i<aClose.length;i++) {
        aClose[i].onclick = function () {
            var model = document.getElementsByClassName('model')[0];
            document.body.removeChild(model);


            console.log(121212);

        }
    }



    //oPlz.onclick=function(obj){
    //    console.log(1);
    //    oLogin.style.display='block';
    //    oModel.style.display='block';
    //    this.style.display='none';
    //};




}










