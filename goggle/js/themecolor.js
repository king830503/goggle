   
document.addEventListener('DOMContentLoaded', function () {
   


    showspanthemebgcolor();



    var button1 = document.getElementById("th1");
    button1.addEventListener('click', th1);

    
    var button2 = document.getElementById("th2");
    button2.addEventListener('click', th2);
    
   
    var button3 = document.getElementById("th3");
    button3.addEventListener('click', th3);

    
    var btn4 = document.getElementById("th4");
    btn4.addEventListener('click', th4);




    var btn5 = document.getElementById("th5");
    btn5.addEventListener('click', th5);

    var btn6 = document.getElementById("th6");
    btn6.addEventListener('click', th6);

    
    var button6 = document.getElementById("th7");
    button6.addEventListener('click', clearcolor);


  
   
    

    

});


function showspanthemebgcolor() {

   


    var th1r = localStorage.getItem("t1_color_r");
    var th1g = localStorage.getItem("t1_color_g");
    var th1b = localStorage.getItem("t1_color_b");
    var th1rgb = "rgb("+th1r +","+th1g +","+th1b +")";
    
    var th1fontr = localStorage.getItem("t1_fontcolor_r");
    var th1fontg = localStorage.getItem("t1_fontcolor_g");
    var th1fontb = localStorage.getItem("t1_fontcolor_b");

    var th1fontrgb = "rgb(" + th1fontr + "," + th1fontg + "," + th1fontb + ")";


    $("#s1").css("color", th1fontrgb);
    $("#s1").css("background-color", th1rgb);


    var th2r = localStorage.getItem("t2_color_r");
    var th2g=localStorage.getItem("t2_color_g");
    var th2b = localStorage.getItem("t2_color_b");
    var th2rgb = "rgb(" + th2r + "," + th2g + "," + th2b + ")";
    var th2fontr = localStorage.getItem("t2_fontcolor_r");
    var th2fontg = localStorage.getItem("t2_fontcolor_g");
    var th2fontb = localStorage.getItem("t2_fontcolor_b");

    var th2fontrgb = "rgb(" + th2fontr + "," + th2fontg + "," + th2fontb + ")";


    $("#s2").css("color", th2fontrgb);
    $("#s2").css("background-color", th2rgb);


    var th3r = localStorage.getItem("t3_color_r");
    var th3g = localStorage.getItem("t3_color_g");
    var th3b = localStorage.getItem("t3_color_b");
    var th3rgb = "rgb(" + th3r + "," + th3g + "," + th3b + ")";

    var th3fontr = localStorage.getItem("t3_fontcolor_r");
    var th3fontg = localStorage.getItem("t3_fontcolor_g");
    var th3fontb = localStorage.getItem("t3_fontcolor_b");

    var th3fontrgb = "rgb(" + th3fontr + "," + th3fontg + "," + th3fontb + ")";


    $("#s3").css("color", th3fontrgb);
    $("#s3").css("background-color", th3rgb);


    var th4r = localStorage.getItem("t4_color_r");
    var th4g = localStorage.getItem("t4_color_g");
    var th4b = localStorage.getItem("t4_color_b");
    var th4rgb = "rgb(" + th4r + "," + th4g + "," + th4b + ")";
    var th4fontr = localStorage.getItem("t4_fontcolor_r");
    var th4fontg = localStorage.getItem("t4_fontcolor_g");
    var th4fontb = localStorage.getItem("t4_fontcolor_b");

    var th4fontrgb = "rgb(" + th4fontr + "," + th4fontg + "," + th4fontb + ")";


    $("#s4").css("color", th4fontrgb);
    $("#s4").css("background-color", th4rgb);

   
    var th5r = localStorage.getItem("t5_color_r");
    var th5g = localStorage.getItem("t5_color_g");
    var th5b = localStorage.getItem("t5_color_b");
    var th5rgb = "rgb(" + th5r + "," + th5g + "," + th5b + ")";
    var th5fontr = localStorage.getItem("t5_fontcolor_r");
    var th5fontg = localStorage.getItem("t5_fontcolor_g");
    var th5fontb = localStorage.getItem("t5_fontcolor_b");

    var th5fontrgb = "rgb(" + th5fontr + "," + th5fontg + "," + th5fontb + ")";


    $("#s5").css("color", th5fontrgb);
    $("#s5").css("background-color", th5rgb);

 
    var th6r = localStorage.getItem("t6_color_r");
    var th6g = localStorage.getItem("t6_color_g");
    var th6b = localStorage.getItem("t6_color_b");
    var th6rgb = "rgb(" + th6r + "," + th6g + "," + th6b + ")";
    var th6fontr = localStorage.getItem("t6_fontcolor_r");
    var th6fontg = localStorage.getItem("t6_fontcolor_g");
    var th6fontb = localStorage.getItem("t6_fontcolor_b");

    var th6fontrgb = "rgb(" + th6fontr + "," + th6fontg + "," + th6fontb + ")";


    $("#s6").css("color", th6fontrgb);
    $("#s6").css("background-color", th6rgb);

   
}




function th1() {
   
    var th1r = localStorage.getItem("t1_color_r");
    var th1g = localStorage.getItem("t1_color_g");
    var th1b = localStorage.getItem("t1_color_b");
    var th1rgb = "rgb(" + th1r + "," + th1g + "," + th1b + ")";

    var th1fontr = localStorage.getItem("t1_fontcolor_r");
    var th1fontg = localStorage.getItem("t1_fontcolor_g");
    var th1fontb = localStorage.getItem("t1_fontcolor_b");

    var th1fontrgb = "rgb(" + th1fontr + "," + th1fontg + "," + th1fontb + ")";


    var t1_acolor_r = localStorage.getItem("t1_acolor_r");
    var t1_acolor_g = localStorage.getItem("t1_acolor_g");
    var t1_acolor_b = localStorage.getItem("t1_acolor_b");


    var th1argb = "rgb(" + t1_acolor_r + "," + t1_acolor_g + "," + t1_acolor_b + ")";

    chrome.tabs.executeScript(null,
    {

        code: "localStorage.removeItem('bgdefault');document.body.style.backgroundColor='" + th1rgb + "';$('p').css('color','" + th1fontrgb + "');$('span').css('color','" + th1fontrgb + "');$('a').css('color','" + th1argb + "');"
    }

    )
}



function th2() {
    var th2r = localStorage.getItem("t2_color_r");
    var th2g = localStorage.getItem("t2_color_g");
    var th2b = localStorage.getItem("t2_color_b");
    var th2rgb = "rgb(" + th2r + "," + th2g + "," + th2b + ")";


    var th2fontr = localStorage.getItem("t2_fontcolor_r");
    var th2fontg = localStorage.getItem("t2_fontcolor_g");
    var th2fontb = localStorage.getItem("t2_fontcolor_b");

    var th2fontrgb = "rgb(" + th2fontr + "," + th2fontg + "," + th2fontb + ")";




    var t2_acolor_r = localStorage.getItem("t2_acolor_r");
    var t2_acolor_g = localStorage.getItem("t2_acolor_g");
    var t2_acolor_b = localStorage.getItem("t2_acolor_b");


    var th2argb = "rgb(" + t2_acolor_r + "," + t2_acolor_g + "," + t2_acolor_b + ")";


    chrome.tabs.executeScript(null,
  {
      code: "localStorage.removeItem('bgdefault');document.body.style.backgroundColor='" + th2rgb + "';$('p').css('color','" + th2fontrgb + "');$('span').css('color','" + th2fontrgb + ")');$('a').css('color','" + th2argb + "');"
      
  }

  )
}


function th3() {
    var th3r = localStorage.getItem("t3_color_r");
    var th3g = localStorage.getItem("t3_color_g");
    var th3b = localStorage.getItem("t3_color_b");
    var th3rgb = "rgb(" + th3r + "," + th3g + "," + th3b + ")";


    var th3fontr = localStorage.getItem("t3_fontcolor_r");
    var th3fontg = localStorage.getItem("t3_fontcolor_g");
    var th3fontb = localStorage.getItem("t3_fontcolor_b");

    var th3fontrgb = "rgb(" + th3fontr + "," + th3fontg + "," + th3fontb + ")";





    var t3_acolor_r = localStorage.getItem("t3_acolor_r");
    var t3_acolor_g = localStorage.getItem("t3_acolor_g");
    var t3_acolor_b = localStorage.getItem("t3_acolor_b");


    var th3argb = "rgb(" + t3_acolor_r + "," + t3_acolor_g + "," + t3_acolor_b + ")";



    chrome.tabs.executeScript(null,
 {
     code: "localStorage.removeItem('bgdefault');document.body.style.backgroundColor='" + th3rgb + "';$('p').css('color','" + th3fontrgb + "');$('span').css('color','" + th3fontrgb + "');$('a').css('color','" + th3argb + "');"
     
     
 }

 )


}


function th4() {
    var th4r = localStorage.getItem("t4_color_r");
    var th4g = localStorage.getItem("t4_color_g");
    var th4b = localStorage.getItem("t4_color_b");
    var th4rgb = "rgb(" + th4r + "," + th4g + "," + th4b + ")";

    var th4fontr = localStorage.getItem("t4_fontcolor_r");
    var th4fontg = localStorage.getItem("t4_fontcolor_g");
    var th4fontb = localStorage.getItem("t4_fontcolor_b");

    var th4fontrgb = "rgb(" + th4fontr + "," + th4fontg + "," + th4fontb + ")";




    var t4_acolor_r = localStorage.getItem("t4_acolor_r");
    var t4_acolor_g = localStorage.getItem("t4_acolor_g");
    var t4_acolor_b = localStorage.getItem("t4_acolor_b");


    var th4argb = "rgb(" + t4_acolor_r + "," + t4_acolor_g + "," + t4_acolor_b + ")";



    chrome.tabs.executeScript(null,
       {
           code: "localStorage.removeItem('bgdefault');document.body.style.backgroundColor='" + th4rgb + "';$('p').css('color','" + th4fontrgb + "');$('span').css('color','" + th4fontrgb + "');$('a').css('color','" + th4argb + "');"
           
           
       }

       )


}

function th5() {
    var th5r = localStorage.getItem("t5_color_r");
    var th5g = localStorage.getItem("t5_color_g");
    var th5b = localStorage.getItem("t5_color_b");
    var th5rgb = "rgb(" + th5r + "," + th5g + "," + th5b + ")";

    var th5fontr = localStorage.getItem("t5_fontcolor_r");
    var th5fontg = localStorage.getItem("t5_fontcolor_g");
    var th5fontb = localStorage.getItem("t5_fontcolor_b");

    var th5fontrgb = "rgb(" + th5fontr + "," + th5fontg + "," + th5fontb + ")";


    var t5_acolor_r = localStorage.getItem("t5_acolor_r");
    var t5_acolor_g = localStorage.getItem("t5_acolor_g");
    var t5_acolor_b = localStorage.getItem("t5_acolor_b");


    var th5argb = "rgb(" + t5_acolor_r + "," + t5_acolor_g + "," + t5_acolor_b + ")";

    chrome.tabs.executeScript(null,
    {

        code: "localStorage.removeItem('bgdefault');document.body.style.backgroundColor='" + th5rgb + "';$('p').css('color','" + th5rgb + "');$('span').css('color','rgb(82,7,66)');$('a').css('color','" + th5argb + "');"

    })
}


function th6() {
    var th6r = localStorage.getItem("t6_color_r");
    var th6g = localStorage.getItem("t6_color_g");
    var th6b = localStorage.getItem("t6_color_b");
    var th6rgb = "rgb(" + th6r + "," + th6g + "," + th6b + ")";


    var th6fontr = localStorage.getItem("t6_fontcolor_r");
    var th6fontg = localStorage.getItem("t6_fontcolor_g");
    var th6fontb = localStorage.getItem("t6_fontcolor_b");
    var th6fontrgb = "rgb(" + th6fontr + "," + th6fontg + "," + th6fontb + ")";


    var t6_acolor_r = localStorage.getItem("t6_acolor_r");
    var t6_acolor_g = localStorage.getItem("t6_acolor_g");
    var t6_acolor_b = localStorage.getItem("t6_acolor_b");


    var th6argb = "rgb(" + t6_acolor_r + "," + t6_acolor_g + "," + t6_acolor_b + ")";

    chrome.tabs.executeScript(null,
    {

        code: "localStorage.removeItem('bgdefault');document.body.style.backgroundColor='" + th6rgb + "';$('p').css('color','" + th6fontrgb + "');$('span').css('color','" + th6fontrgb + "');$('a').css('color','" + th6argb + "');"

    })
}



function clearcolor() {
    chrome.tabs.executeScript(null,
    {

        code: " localStorage.removeItem('bgdefault');document.body.style.backgroundColor='';$('p').css('color','');$('span').css('color','');$('a').css('color','');"
    }

    )


}