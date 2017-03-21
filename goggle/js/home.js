
chrome.tabs.query({}, function () {
    var username=localStorage.getItem('username');
    var button = document.getElementById("form_btn");
 
    var button1 = document.getElementById("fb");
    var home_btn = document.getElementById("home_btn");

    var r_btn=document.getElementById("Register_btn");

   

    button.addEventListener("click", function () {
        

        if (username != null) {
            alert(username +"確定登出?");


            localStorage.removeItem('username');
            localStorage.removeItem('luxval');
            localStorage.removeItem('bgcolor');
            localStorage.removeItem('bgalpha');
            localStorage.removeItem('fcolor');
            localStorage.removeItem('falpha');
            localStorage.removeItem('userage');
            localStorage.removeItem('goodfont');
            localStorage.removeItem("goodsize");
            localStorage.removeItem('savebgopacity');
            localStorage.removeItem('savefcolor');
            localStorage.removeItem('savefopacity');
            localStorage.removeItem('savebgcolor');
            localStorage.removeItem('defaultfontsize');

            window.close();
        } else {

            alert("請先登入!!");

        }


       


    }, false);


    button1.addEventListener("click", function () {
        window.open(' https://www.facebook.com/goggle.tw', '_blank');   }, false);//
   

    r_btn.addEventListener("click", function () {
        window.open(' http://140.131.7.23/Goggle/new/register.aspx', '_blank');
    }, false);


    home_btn.addEventListener("click", function () {
        window.open('http://140.131.7.23/Goggle/ck.aspx', '_blank');//首頁
    }, false);//

    
});



  



