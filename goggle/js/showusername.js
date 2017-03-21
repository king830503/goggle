document.addEventListener('DOMContentLoaded', function () {
    var user = document.getElementById("username");
    user.innerHTML = window.localStorage.getItem("username");

    if (!user.innerHTML) {

        $("#form_btn").hide();
        $("#Register_btn").show();
        $("#getsetval").hide();
        $("#btn_save").hide();


    } else {
        $("#btn_save").show();
        $("#form_btn").show();
        $("#set_btn").hide();
        $("#Register_btn").hide();
        $("#getsetval").show();
    }

    var lightval = document.getElementById("lightval");

    lightval.innerHTML = window.localStorage.getItem("luxval");




});
















