//抓取名稱
document.addEventListener('DOMContentLoaded', function () {

    getthemecolors();


    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    var s3 = document.getElementById('s3');
    var s4 = document.getElementById('s4');
    var s5 = document.getElementById('s5');
    var s6 = document.getElementById('s6');

    s1.innerText = localStorage.getItem("t1_name");
    s2.innerText =localStorage.getItem("t2_name");
    s3.innerText =localStorage.getItem("t3_name");
    s4.innerText = localStorage.getItem("t4_name");
    s5.innerText = localStorage.getItem("t5_name");
    s6.innerText = localStorage.getItem("t6_name");
 
});
function getthemecolors() {


    $.ajax({
        type: "POST",
        async: false,
        url: "http://140.131.7.239/goggle/apienvironment.asmx/sendthemecolor",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            var myData = data.d;

            if (myData != null) {



                var t1_name = myData.t1_name;
                var t2_name = myData.t2_name;
                var t3_name = myData.t3_name;
                var t4_name = myData.t4_name;
                var t5_name = myData.t5_name;
                var t6_name = myData.t6_name;

                var t1_color_r = myData.t1_color_r;
                var t1_color_g = myData.t1_color_g;
                var t1_color_b = myData.t1_color_b;
                var t1_fontcolor_r = myData.t1_fontcolor_r;
                var t1_fontcolor_g = myData.t1_fontcolor_g;
                var t1_fontcolor_b = myData.t1_fontcolor_b;
                var t1_acolor_r = myData.t1_acolor_r;
                var t1_acolor_g = myData.t1_acolor_g;
                var t1_acolor_b = myData.t1_acolor_b;

                var t2_color_r = myData.t2_color_r;
                var t2_color_g = myData.t2_color_g;
                var t2_color_b = myData.t2_color_b;
                var t2_fontcolor_r = myData.t2_fontcolor_r;
                var t2_fontcolor_g = myData.t2_fontcolor_g;
                var t2_fontcolor_b = myData.t2_fontcolor_b;
                var t2_acolor_r = myData.t2_acolor_r;
                var t2_acolor_g = myData.t2_acolor_g;
                var t2_acolor_b = myData.t2_acolor_b;


                var t3_color_r = myData.t3_color_r;
                var t3_color_g = myData.t3_color_g;
                var t3_color_b = myData.t3_color_b;
                var t3_fontcolor_r = myData.t3_fontcolor_r;
                var t3_fontcolor_g = myData.t3_fontcolor_g;
                var t3_fontcolor_b = myData.t3_fontcolor_b;
                var t3_acolor_r = myData.t3_acolor_r;
                var t3_acolor_g = myData.t3_acolor_g;
                var t3_acolor_b = myData.t3_acolor_b;


                var t4_color_r = myData.t4_color_r;
                var t4_color_g = myData.t4_color_g;
                var t4_color_b = myData.t4_color_b;
                var t4_fontcolor_r = myData.t4_fontcolor_r;
                var t4_fontcolor_g = myData.t4_fontcolor_g;
                var t4_fontcolor_b = myData.t4_fontcolor_b;
                var t4_acolor_r = myData.t4_acolor_r;
                var t4_acolor_g = myData.t4_acolor_g;
                var t4_acolor_b = myData.t4_acolor_b;


                var t5_color_r = myData.t5_color_r;
                var t5_color_g = myData.t5_color_g;
                var t5_color_b = myData.t5_color_b;
                var t5_fontcolor_r = myData.t5_fontcolor_r;
                var t5_fontcolor_g = myData.t5_fontcolor_g;
                var t5_fontcolor_b = myData.t5_fontcolor_b;
                var t5_acolor_r = myData.t5_acolor_r;
                var t5_acolor_g = myData.t5_acolor_g;
                var t5_acolor_b = myData.t5_acolor_b;


                var t6_color_r = myData.t6_color_r;
                var t6_color_g = myData.t6_color_g;
                var t6_color_b = myData.t6_color_b;
                var t6_fontcolor_r = myData.t6_fontcolor_r;
                var t6_fontcolor_g = myData.t6_fontcolor_g;
                var t6_fontcolor_b = myData.t6_fontcolor_b;
                var t6_acolor_r = myData.t6_acolor_r;
                var t6_acolor_g = myData.t6_acolor_g;
                var t6_acolor_b = myData.t6_acolor_b;




                window.localStorage.setItem('t1_name', t1_name);
                window.localStorage.setItem('t2_name', t2_name);
                window.localStorage.setItem('t3_name', t3_name);
                window.localStorage.setItem('t4_name', t4_name);
                window.localStorage.setItem('t5_name', t5_name);
                window.localStorage.setItem('t6_name', t6_name);

                localStorage.setItem('t1_color_r', t1_color_r);
                localStorage.setItem('t1_color_g', t1_color_g);
                localStorage.setItem('t1_color_b', t1_color_b);
                localStorage.setItem('t1_fontcolor_r', t1_fontcolor_r);
                localStorage.setItem('t1_fontcolor_g', t1_fontcolor_g);
                localStorage.setItem('t1_fontcolor_b', t1_fontcolor_b);
                localStorage.setItem('t1_acolor_r', t1_acolor_r);
                localStorage.setItem('t1_acolor_g', t1_acolor_g);
                localStorage.setItem('t1_acolor_b', t1_acolor_b);

                localStorage.setItem('t2_color_r', t2_color_r);
                localStorage.setItem('t2_color_g', t2_color_g);
                localStorage.setItem('t2_color_b', t2_color_b);
                localStorage.setItem('t2_fontcolor_r',t2_fontcolor_r);
                localStorage.setItem('t2_fontcolor_g',t2_fontcolor_g);
                localStorage.setItem('t2_fontcolor_b',t2_fontcolor_b);
                localStorage.setItem('t2_acolor_r', t2_acolor_r);
                localStorage.setItem('t2_acolor_g', t2_acolor_g);
                localStorage.setItem('t2_acolor_b', t2_acolor_b);

                localStorage.setItem('t3_color_r', t3_color_r);
                localStorage.setItem('t3_color_g', t3_color_g);
                localStorage.setItem('t3_color_b', t3_color_b);
                localStorage.setItem('t3_fontcolor_r', t3_fontcolor_r);
                localStorage.setItem('t3_fontcolor_g', t3_fontcolor_g);
                localStorage.setItem('t3_fontcolor_b', t3_fontcolor_b);
                localStorage.setItem('t3_acolor_r', t3_acolor_r);
                localStorage.setItem('t3_acolor_g', t3_acolor_g);
                localStorage.setItem('t3_acolor_b', t3_acolor_b);

                localStorage.setItem('t4_color_r', t4_color_r);
                localStorage.setItem('t4_color_g', t4_color_g);
                localStorage.setItem('t4_color_b', t4_color_b);
                localStorage.setItem('t4_fontcolor_r', t4_fontcolor_r);
                localStorage.setItem('t4_fontcolor_g', t4_fontcolor_g);
                localStorage.setItem('t4_fontcolor_b', t4_fontcolor_b);
                localStorage.setItem('t4_acolor_r', t4_acolor_r);
                localStorage.setItem('t4_acolor_g', t4_acolor_g);
                localStorage.setItem('t4_acolor_b', t4_acolor_b);

                localStorage.setItem('t5_color_r', t5_color_r);
                localStorage.setItem('t5_color_g', t5_color_g);
                localStorage.setItem('t5_color_b', t5_color_b);
                localStorage.setItem('t5_fontcolor_r', t5_fontcolor_r);
                localStorage.setItem('t5_fontcolor_g', t5_fontcolor_g);
                localStorage.setItem('t5_fontcolor_b', t5_fontcolor_b);
                localStorage.setItem('t5_acolor_r', t5_acolor_r);
                localStorage.setItem('t5_acolor_g', t5_acolor_g);
                localStorage.setItem('t5_acolor_b', t5_acolor_b);

                localStorage.setItem('t6_color_r', t6_color_r);
                localStorage.setItem('t6_color_g', t6_color_g);
                localStorage.setItem('t6_color_b', t6_color_b);
                localStorage.setItem('t6_fontcolor_r', t6_fontcolor_r);
                localStorage.setItem('t6_fontcolor_g', t6_fontcolor_g);
                localStorage.setItem('t6_fontcolor_b', t6_fontcolor_b);
                localStorage.setItem('t6_acolor_r', t6_acolor_r);
                localStorage.setItem('t6_acolor_g', t6_acolor_g);
                localStorage.setItem('t6_acolor_b', t6_acolor_b);

            }


        }, error: function (err) {
            alert(err.val);

        }


    });


}