
document.addEventListener('DOMContentLoaded', function () {

    getnum();
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    var n3 = document.getElementById('n3');
    var n4 = document.getElementById('n4');
    var n5 = document.getElementById('n5');
    var n6 = document.getElementById('n6');

    n1.innerText = window.localStorage.getItem('n1');
    n2.innerText = window.localStorage.getItem('n2');
    n3.innerText = window.localStorage.getItem('n3');
    n4.innerText = window.localStorage.getItem('n4');
    n5.innerText = window.localStorage.getItem('n5');
    n6.innerText = window.localStorage.getItem('n6');

});


function getnum() {


    $.ajax({
        type: "POST",
        async: false,
        url: "http://140.131.7.239/goggle/apienvironment.asmx/getvote",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var myData = data.d;

            if (myData!=null) {
               
                
                
                var n1 = myData.vnum1;
                var n2 = myData.vnum2;
                var n3 = myData.vnum3;
                var n4 = myData.vnum4;
                var n5 = myData.vnum5;
                var n6 = myData.vnum6;

                window.localStorage.setItem('n1', n1);
                window.localStorage.setItem('n2', n2);
                window.localStorage.setItem('n3', n3);
                window.localStorage.setItem('n4', n4);
                window.localStorage.setItem('n5', n5);
                window.localStorage.setItem('n6', n6);
             
               
            } 


        }, error: function (err) {
            alert(err.val);

        }


    });


}