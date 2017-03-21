

var bg = chrome.extension.getBackgroundPage();

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', { 'packages': ['corechart', 'table'] });
// Set a callback to run when the Google Visualization API is loaded.
if (top === self) {
    google.setOnLoadCallback(function () { show(bg.TYPE.today); });
} else {
    // For screenshot: if in iframe, load the most recently viewed mode
    google.setOnLoadCallback(function () {
        if (bg.mode === bg.TYPE.today) {
            show(bg.TYPE.today);
        } else if (bg.mode === bg.TYPE.average) {
            show(bg.TYPE.average);
        } else if (bg.mode === bg.TYPE.all) {
            show(bg.TYPE.all);
        } else {
            console.error("No such type: " + bg.mode);
        }
    });
}



// Converts duration to String
function timeString(numSeconds) {
    if (numSeconds === 0) {
        return "0 seconds";
    }
    var remainder = numSeconds;
    var timeStr = "";
    var timeTerms = {
        hour: 3600,
        minute: 60,
        second: 1
    };
    // Don't show seconds if time is more than one hour
    if (remainder >= timeTerms.hour) {
        remainder = remainder - (remainder % timeTerms.minute);
        delete timeTerms.second;
    }
    // Construct the time string
    for (var term in timeTerms) {
        var divisor = timeTerms[term];
        if (remainder >= divisor) {
            var numUnits = Math.floor(remainder / divisor);
            timeStr += numUnits + " " + term;
            // Make it plural
            if (numUnits > 1) {
                timeStr += "s";
            }
            remainder = remainder % divisor;
            if (remainder) {
                timeStr += " and ";
            }
        }
    }
    return timeStr;
}

// Show the data for the time period indicated by addon
function displayData(type) {
    // Get the domain data
    var domains = JSON.parse(localStorage["domains"]);
    var chart_data = [];
    for (var domain in domains) {
        var domain_data = JSON.parse(localStorage[domain]);
        var numSeconds = 0;
        if (type === bg.TYPE.today) {
            numSeconds = domain_data.today;
        } else if (type === bg.TYPE.average) {
            numSeconds = Math.floor(domain_data.all / parseInt(localStorage["num_days"], 10));
        } else if (type === bg.TYPE.all) {
            numSeconds = domain_data.all;
        } else {
            console.error("No such type: " + type);
        }
        if (numSeconds > 0) {
            chart_data.push([domain, {
                v: numSeconds,
                f: timeString(numSeconds),
                p: {
                    style: "text-align: left; white-space: normal;"
                }
            }]);
        }
    }



    // Sort data by descending duration
    chart_data.sort(function (a, b) {
        return b[1].v - a[1].v;
    });

    // Limit chart data
    var limited_data = [];
    var chart_limit;
    // For screenshot: if in iframe, image should always have 9 items
    if (top == self) {
        chart_limit = parseInt(localStorage["chart_limit"], 10);
    } else {
        chart_limit = 9;
    }
    for (var i = 0; i < chart_limit && i < chart_data.length; i++) {
        limited_data.push(chart_data[i]);
    }
    var sum = 0;
    for (var i = chart_limit; i < chart_data.length; i++) {
        sum += chart_data[i][1].v;
    }



    // Add total time
    var total = JSON.parse(localStorage["total"]);
    var numSeconds = 0;
    if (type === bg.TYPE.today) {
        numSeconds = total.today;
        localStorage["sumtime"] = numSeconds;
    } else if (type === bg.TYPE.average) {
        numSeconds = Math.floor(total.all / parseInt(localStorage["num_days"], 10));
    } else if (type === bg.TYPE.all) {
        numSeconds = total.all;
    } else {
        console.error("No such type: " + type);
    }
    limited_data.push([{
        v: "Total",
        p: {
            style: "font-weight: bold;"
        }
    }, {
        v: numSeconds,
        f: timeString(numSeconds),
        p: {
            style: "text-align: left; white-space: normal; font-weight: bold;"
        }
    }]);

    // Draw the table
   
}

function updateNav(type) {
    document.getElementById('today').className = '';
    document.getElementById('average').className = '';
    document.getElementById('all').className = '';
    document.getElementById(type).className = 'active';
}

function show(mode) {
    bg.mode = mode;
    displayData(mode);
    updateNav(mode);
}





