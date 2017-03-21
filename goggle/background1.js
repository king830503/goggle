var timeout;
var interval;

var setDate;
var pauseDate;
var alarmDate;

var guiLagAdjustment = 500;

var alarmSound = new Audio("poyo.mp3");

function setAlarm(tMillis) {
    interval = tMillis;
    ringIn(tMillis + guiLagAdjustment);
}




function ringIn(tMillis) {
    clearTimeout(timeout);
    pauseDate = null;

    var tSecs = parseInt(tMillis / 1000);
    var tMins = parseInt(tSecs / 60);
    var secs = tSecs % 60;
    var tHrs = parseInt(tMins / 60);
    var mins = tMins % 60;
    var millis = tMillis % 1000;

    alarmDate = new Date();

    alarmDate.setHours(alarmDate.getHours() + tHrs);
    alarmDate.setMinutes(alarmDate.getMinutes() + mins);
    alarmDate.setSeconds(alarmDate.getSeconds() + secs);
    alarmDate.setMilliseconds(alarmDate.getMilliseconds() + millis);

    setDate = new Date();
    timeout = setTimeout(ring, alarmDate.getTime() - setDate.getTime());

}

function pause() {
    pauseDate = new Date();
    clearTimeout(timeout);
}

function resume() {
    var remainingAfterPause = (alarmDate.getTime() - pauseDate.getTime());
    ringIn(remainingAfterPause);
}

function restart() {
    ringIn(interval + guiLagAdjustment);
}

function getTimeLeft() {
    if (pauseDate)
        return (alarmDate.getTime() - pauseDate.getTime());

    var now = new Date();
    return (alarmDate.getTime() - now.getTime());
}

function getTimeLeftPercent() {
    return parseInt(getTimeLeft() / interval * 100);
}

function getTimeLeftString() {
    var until = getTimeLeft();
    var tSecs = parseInt(until / 1000);
    var tMins = parseInt(tSecs / 60);
    var secs = tSecs % 60;
    var tHrs = parseInt(tMins / 60);
    var mins = tMins % 60;
    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (tHrs < 10) tHrs = "0" + tHrs;
    return ((tHrs > 0 ? tHrs + ":" : "") + mins + ":" + secs);
}

function didCreateNotification(notificationId) { }

function ring() {
    
    alarmSound.play();
    alert('您該休息囉~~');
    
    turnOff();
}

function turnOff() {
    clearTimeout(timeout);
    interval = 0;
    alarmDate = null;
    pauseDate = null;
    setDate = null;
    chrome.browserAction.setBadgeText({ text: "" });
}

function error() {
     sAlert("不得超過五小時!!");
}