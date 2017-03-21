chrome.tabs.query({}, function () {
    var button = document.getElementById("getsetval");

    button.addEventListener("click", function () {
       
        setval();

        embolecolor();

        //alert(localStorage.getItem('savebgcolor'));
    });

    })





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
        alert("套用成功");
        }




function setval() {
   
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
                }, error: function (err) {
                    alert(err.val);

                }

            })

        
    })



}