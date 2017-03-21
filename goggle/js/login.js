
function sAlert(str){ 
    var msgw,msgh,bordercolor; 
    msgw=350;//Width
    msgh=100;//Height 
    titleheight=25 //title Height
    bordercolor="#336699";//boder color
    titlecolor="#99CCFF";//title color
   
    var sWidth,sHeight; 
    sWidth=document.body.offsetWidth; 
    sHeight=screen.height; 
    var bgObj=document.createElement("div"); 
    bgObj.setAttribute('id','bgDiv'); 
    bgObj.style.position="absolute"; 
    bgObj.style.top="0"; 
    bgObj.style.background="#777"; 
    bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75"; 
    bgObj.style.opacity="0.6"; 
    bgObj.style.left="0"; 
    bgObj.style.width=sWidth + "px"; 
    bgObj.style.height=sHeight + "px"; 
    bgObj.style.zIndex = "10000"; 
    document.body.appendChild(bgObj); 
     
    var msgObj=document.createElement("div") 
    msgObj.setAttribute("id","msgDiv"); 
    msgObj.setAttribute("align","center"); 
    msgObj.style.background="white"; 
    msgObj.style.border="1px solid " + bordercolor; 
    msgObj.style.position = "fixed"; 
    msgObj.style.left = "50%"; 
    msgObj.style.top = "50%"; 
    msgObj.style.font="18px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif"; 
    msgObj.style.marginLeft = "-225px" ; 
    msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px"; 
    msgObj.style.width = msgw + "px"; 
    msgObj.style.height =msgh + "px"; 
    msgObj.style.textAlign = "center"; 
    msgObj.style.lineHeight ="25px"; 
    msgObj.style.zIndex = "10001"; 
     
    var title=document.createElement("h4"); 
    title.setAttribute("id","msgTitle"); 
    title.setAttribute("align","right"); 
    title.style.margin="0"; 
    title.style.padding="3px"; 
    title.style.background=bordercolor; 
    title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);"; 
    title.style.opacity="0.75"; 
    title.style.border="1px solid " + bordercolor; 
    title.style.height="18px"; 
    title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif"; 
    title.style.color="white"; 
    title.style.cursor="pointer"; 
    title.innerHTML="X"; 
    title.onclick=function(){ 
           document.body.removeChild(bgObj); 
           document.getElementById("msgDiv").removeChild(title); 
           document.body.removeChild(msgObj); 
         } 
    document.body.appendChild(msgObj); 
    document.getElementById("msgDiv").appendChild(title); 
    var txt=document.createElement("p"); 
    txt.style.margin="1em 0" 
    txt.setAttribute("id","msgTxt"); 
    txt.innerHTML=str; 
    document.getElementById("msgDiv").appendChild(txt); 
 } 


chrome.tabs.query({}, function () {

    var button = document.getElementById("check");
   
    button.addEventListener("click", function () {
        $(function () {
            var account = $("#name").val();
            var password = $("#pwd").val();
            var msg = "{ account:'" + account + "',pwd:'" + password + "'}";
            var user=document.getElementById("name");
            var pwd=document.getElementById("pwd");

            //判斷是否空值
            if (account == '' || pwd == '') {
                
                
                sAlert('請輸入帳號與密碼!!');
            }
            else {
                //驗證帳號
            $.ajax({
                type: "POST",
                async: false,
                url: "http://140.131.7.239/goggle/member.asmx/CheckAPIMember",
                data: msg,
             
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {

                    var myData = data.d;
                        
                    if (myData.key == 1) {
                        alert("歡迎您使用者:" + myData.name);
                        window.localStorage.setItem("userage", myData.age);
                        window.localStorage.setItem("username", myData.name);

                        setval(myData.name);
                        document.location.href = "goggle.html";  
                    } else {
                        sAlert(myData.key);
                    }
                        
                       

        
                }, error: function (err) {
                    alert(err.val);
                   
                }
            });
                


        }
        });

}, false);


});


function setval(account) {
   
    $(function () {
        var account = localStorage.getItem("username");

        var msg = "{ account:'" + account + "'}";    
            //驗證帳號
            $.ajax({
                type: "POST",
                async: false,
                url: "http://140.131.7.239/goggle/apienvironment.asmx/tosetcolor",
                data: msg,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var myData = data.d;

                    window.localStorage.setItem("savebgcolor", myData.bgcolor);
                    window.localStorage.setItem("savebgopacity", myData.bgopacity);
                    window.localStorage.setItem("savefcolor", myData.fcolor);
                    window.localStorage.setItem("savefopacity", myData.fopacity);
                    window.localStorage.setItem("defaultfontsize", myData.u_fontsize);
                    embolecolor();

                }, error: function (err) {
                    alert(err.val);
                }
            })       
    })
}


function embolecolor() {
    var colorRgb = window.localStorage.getItem("savebgcolor");
    var colorOpacity = window.localStorage.getItem("savebgopacity");

    color = "rgba(" + colorRgb + "," + colorOpacity + ")";

   
    var fcolorRgb = window.localStorage.getItem("savefcolor");

    var fcolorOpacity = window.localStorage.getItem("savefopacity");


    chrome.tabs.executeScript(null,

        {
        code: "document.body.style.backgroundColor='" + color + "'" + ";localStorage.setItem('bgdefault','" + color + "');     "
        });

        chrome.tabs.executeScript(null,
        {

          code: " $('#gogglediv').remove(); var d = document.createElement('div');d.id = 'gogglediv';d.style.width = '100%';d.style.height = '100%';d.style.position = 'fixed';d.style.left = '0';d.style.top = '0';d.style.right = '0';d.style.bottom = '0';d.style.pointerEvents = 'none';d.style.zIndex = '2147483647';d.style.backgroundColor ='" + fcolorRgb + "'; d.style.opacity = '" + fcolorOpacity + "';document.body.appendChild(d);"


        });

    chrome.tabs.executeScript(null, { code: "$('p').css('font-size', '" + localStorage.getItem("defaultfontsize") + "pt');" });
    chrome.tabs.executeScript(null, { code: "$('span').css('font-size', '" + localStorage.getItem("defaultfontsize") + "pt');" });
    chrome.tabs.executeScript(null, { code: "$('a').css('font-size', '" + localStorage.getItem("defaultfontsize") + "pt');" });
        alert("套用成功");
}