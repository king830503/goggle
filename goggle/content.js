





(function () {
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if(changeInfo.status ==="complete") {
            chrome.tabs.executeScript(tabId,
                {code: "var bgcolor=localStorage.getItem('bgdefault');document.body.style.backgroundColor=bgcolor;"});
        }
    });

    chrome.tabs.onCreated.addListener(function (tabId, changeInfo, tab) {
        chrome.tabs.executeScript(tabId,
            {code: "var bgcolor=localStorage.getItem('bgdefault');document.body.style.backgroundColor=bgcolor;"});
    });


 


})();  