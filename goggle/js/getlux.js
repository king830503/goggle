
document.addEventListener('DOMContentLoaded', function () {
    
    var button = document.getElementById("luxlink");
    var nobtn = document.getElementById("nolux");
    button.addEventListener("click", getval());
    nobtn.addEventListener('click', clear);
        
        
       
});


function getval() { 
    
    //var account = window.localStorage.getItem("username");
      

    //var msg = "{ account:'" + account + "'}";

    //window.setInterval("requestFun()", 1000);
    //var light = $("body").css("background-color");
    //$("body").css("", "hsl()");



    window.setInterval("requestFun()", 5000);
    


}


    function requestFun() {

        $(function () {
            
           
            var account = localStorage.getItem("username");
              

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
                    alert(myData);
                    

                }, error: function (err) {
                    alert(err.val);

                }

            });
        });



        window.clearInterval();
    }
