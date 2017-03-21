//同步創建計時器

var alarmClock = {

    onHandler: function (e) {
        chrome.alarms.create("myAlarm", { delayInMinutes: 0.1, periodInMinutes: 0.2 });
        $("#luxload").show();
    },

    offHandler: function (e) {
        chrome.alarms.clear("myAlarm");
        $("#luxload").hide();
    },

    setup: function () {
        var a = document.getElementById('alarmOn');
        a.addEventListener('click', alarmClock.onHandler);
        var a = document.getElementById('alarmOff');
        a.addEventListener('click', alarmClock.offHandler);
    }
};

document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
    $("#luxload").hide();
   
});









