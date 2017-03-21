function clear() {



    chrome.tabs.executeScript(null,
    { code: "localStorage.removeItem('bgdefault');document.body.style.backgroundColor = ''" });

}


document.addEventListener('DOMContentLoaded', function () {


    var nobtn = document.getElementById("nolux");

    nobtn.addEventListener('click', clear);

});