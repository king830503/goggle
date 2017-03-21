document.addEventListener('DOMContentLoaded', function () {
   
    var button = document.getElementById("btn_goodfont");
    button.addEventListener("click",goodfont );
    if (localStorage['username'] != null) {
        $("#btn_goodfont").show();
        $("#title").show();
    } else {
        $("#btn_goodfont").hide();
        $("#title").hide();
    }
});

function goodfont() {
    if (localStorage['username'] != null) {
        setage();

        setsizevalues();

        document.getElementById("fontvalue").innerHTML=localStorage["goodfont"];
        document.getElementById("fontsize").value=localStorage["goodfont"];  

    } else {


        alert("請先登入!!");

    }
}
function setsizevalues() {


    chrome.tabs.executeScript(null, { code: "$('p').css('font-size', '" + localStorage.getItem("goodfont") + "pt');" });
    chrome.tabs.executeScript(null, { code: "$('span').css('font-size', '" + localStorage.getItem("goodfont") + "pt');" });
    chrome.tabs.executeScript(null, { code: "$('a').css('font-size', '" + localStorage.getItem("goodfont") + "pt');" });

}

function setage() {
    $(function () {


        var ages = localStorage.getItem("userage");

        var msg = "{ age:'" + ages + "'}";


        //判斷是否空值

        $.ajax({
            type: "POST",
            async: false,
            url: "http://140.131.7.239/goggle/apienvironment.asmx/changefontsize",
            data: msg,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {

                var myData = data.d;

                localStorage.setItem("goodfont", myData.agefont);



            }, error: function (err) {
                alert(err.val);

            }
        });



    })

}










