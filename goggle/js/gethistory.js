document.addEventListener('DOMContentLoaded', function () {

    var time = document.getElementById("timeval");

    var times = localStorage.getItem("sumtime");

    time.innerText = times + "秒";

})
