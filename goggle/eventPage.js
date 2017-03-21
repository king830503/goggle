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


//同步
chrome.alarms.onAlarm.addListener(function () {
   
   
    getlux()

});





function getlux() {

    

        $(function () {


            var account = window.localStorage.getItem("username");
            

            var msg = "{ account:'" + account + "'}";

            $.ajax({
                type: "POST",
                async: false,
                url: "http://140.131.7.239/goggle/member.asmx/getluxvalue",
                data: msg,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var myData = data.d;
                    
                    window.localStorage.setItem("luxval", myData);
                    

                   
                }, error: function (err) {
                    alert(err.val);

                }

            });
        });
        
        
        var luxval = window.localStorage.getItem('luxval'); 
       
       
         //改變亮度
            var lux =Math.floor(localStorage.getItem("luxval")/2.55).toString();
        

            if (window.localStorage.getItem("username") === undefined) {


                sAlert('請先登入會員');

            } else {


                chrome.tabs.executeScript(null,
                {

                    code: " $('#gogglediv').remove(); var d = document.createElement('div');d.id = 'gogglediv';d.style.width = '100%';d.style.height = '100%';d.style.position = 'fixed';d.style.left = '0';d.style.top = '0';d.style.right = '0';d.style.bottom = '0';d.style.pointerEvents = 'none';d.style.zIndex = '2147483647';d.style.backgroundColor ='hsl(0,0%," + lux + "%)'; d.style.opacity = '0.5';document.body.appendChild(d);"


                });

            }





           

            

            


}




