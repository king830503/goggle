//統計及傳數值




function sumtime() {

    if (localStorage.getItem("username") == null) {


        alert("尚未登入");

    } else {


        $(function () {
            //單位秒
            var time = localStorage.getItem("sumtime");
            var addtime = time;
            var uname = localStorage.getItem("username");
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            today = yyyy + '-' + mm + '-' + dd;



            var msg = "{ uname:'" + uname + "',today:'" + today.toString() + "',time:'" + addtime + "'}";

            $.ajax({
                type: "POST",
                async: false,
                url: "http://140.131.7.239/goggle/apienvironment.asmx/apiaddtime",
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
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {

    var addtime = document.getElementById("addtime");
    addtime.addEventListener('click', sumtime);
});


function a() {

    var addtime = 5;
    var uname = localStorage.getItem("username");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '/' + mm + '/' + dd;
    alert(today);

}