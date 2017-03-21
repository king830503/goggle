document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#fontsize').addEventListener('change', shadeHandler);
    var button = document.getElementById("text");
    button.addEventListener('click', setsizevalue);

     if (localStorage.getItem("goodfont")!=null) {
        document.getElementById("fontvalue").innerHTML=localStorage["goodfont"];
        document.getElementById("fontsize").value=localStorage["goodfont"];   
     }else{
          document.getElementById("fontvalue").innerHTML=document.getElementById("fontsize").value;  
     }



   

});
var shadeHandler = function () {
    var sliderValue = document.getElementById("fontsize").value;
    
    showValue(sliderValue);
    
}
var showValue = function (newValue) {
    document.getElementById("fontvalue").innerHTML = newValue;
    if (localStorage.getItem("goodfont")!=null) {

        localStorage['fontsize_value'] =localStorage["goodfont"];
    }else{
        localStorage['fontsize_value'] = newValue;
    };
    
    

}
function getsizevalue() {    
    chrome.tabs.executeScript(null, { code: "var fontsizevalue = $('body').css('font-size'); alert(fontsizevalue);" });
}
function setsizevalue() {
    var sizeobj = localStorage['fontsize_value'];

    sAlert("變更成"+sizeobj+"pt 大小")
    //alert("變更成"+sizeobj+"pt 大小");

    chrome.tabs.executeScript(null, { code: "$('p').css('font-size', '"+sizeobj+"pt');" });
    chrome.tabs.executeScript(null, { code: "$('span').css('font-size', '" + sizeobj + "pt');" });
    chrome.tabs.executeScript(null, { code: "$('a').css('font-size', '" + sizeobj + "pt');" });
    
}


var shadeHandler = function () {
    var sliderValue = document.getElementById("fontsize").value;

    showValue(sliderValue);

}
var showValue = function (newValue) {
    document.getElementById("fontvalue").innerHTML = newValue;
    localStorage['fontsize_value'] = newValue;

}
function getsizevalue() {
    chrome.tabs.executeScript(null, { code: "var fontsizevalue = $('body').css('font-size'); alert(fontsizevalue);" });
}

function sAlert(str){ 
    var msgw,msgh,bordercolor; 
    msgw=330;//Width
    msgh=90;//Height 
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






