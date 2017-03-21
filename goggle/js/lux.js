
document.addEventListener('DOMContentLoaded', function () {


    var button = document.getElementById("luxlink");
    button.addEventListener("click", getlux);
   

})

    function getlux() { 
  

    

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
                    window.localStorage.setItem("luxval", myData);

                }, error: function (err) {
                    alert(err.val);

                }

            });
        });
     
       
    }


