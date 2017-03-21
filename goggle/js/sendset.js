//傳送環境設定值


chrome.tabs.query({}, function () {
    var uname = localStorage.getItem("username");
    btn_save.addEventListener("click", function () {
        var fcolor = localStorage.getItem("fcolor");
        var bgcolor = localStorage.getItem("bgcolor");
        var fcoloropacity = localStorage.getItem("falpha").toString();

        

        if (uname == null) {
            alert("請先登入!!");

        } else {

            //判斷濾光與背景功能是否有開啟
            savefillterset();
            savebgcolorset();

        }
    })
})

function savefillterset() {
    var btn_save = document.getElementById("btn_save");
    $(function () {
        var uname = localStorage.getItem("username").toString();
        var fcolor = localStorage.getItem("fcolor").toString();
        var fcoloropacity = localStorage.getItem("falpha").toString();

        if (fcolor == "Off") {
            fcolor = "#000000";
            fcoloropacity = "0.5";
        } else {
            var fcolor = localStorage.getItem("fcolor").toString();
            var fcoloropacity = localStorage.getItem("falpha").toString();
        }
    
        var msg = "{ uname:'" + uname + "',fcolor:'" + fcolor + "',fopacity:'" + fcoloropacity + "'}";
        $.ajax({
            type: "POST",
            async: false,
            url: "http://140.131.7.239/goggle/apienvironment.asmx/addedfillterset",
            data: msg,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var myData = data.d;
                alert(myData);
            }, error: function (err) {
                alert(err.val);

            }
        });
    })
}


function savebgcolorset() {
    var btn_save = document.getElementById("btn_save");
    $(function () {
        var uname = localStorage.getItem("username").toString();
        var bgcolor = localStorage.getItem("bgcolor").toString();
        var bgcoloropacity = localStorage.getItem("bgalpha").toString();



        var msg = "{ uname:'" + uname + "',bgcolor:'" + bgcolor + "',bgcoloropacity:'" + bgcoloropacity + "'}";

        $.ajax({
            type: "POST",
            async: false,
            url: "http://140.131.7.239/goggle/apienvironment.asmx/addedbgcolorset",
            data: msg,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var myData = data.d;

                alert(myData);


            }, error: function (err) {
                alert(err.val);

            }
        });
    })
}

