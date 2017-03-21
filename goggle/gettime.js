document.addEventListener('DOMContentLoaded', function () {

    var time= document.getElementById("timeval");

    var times =localStorage.getItem("sumtime");

    var min = Math.floor(times / 60);
    var sec = times % 60;
    time.innerText = min+"分"+sec+"秒";

})
