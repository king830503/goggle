
function setBgColor(e) {
    var color,
		colorOpacity = 0.2,
		curItem = e.target,
		colorRgb;
    colorRgb = getAttrStyle(curItem, "background-color").match(/\d{1,3}/g).join(',');;

    colorOpacity = (document.getElementById("opRange").value) / 100;

    var curClass = curItem.getAttribute("class");
    localStorage.setItem("defaultcolor", curClass);
    localStorage.setItem("defaultcolorNum", colorRgb);
    curClass += " focus";
    curItem.setAttribute("class", curClass);

    color = "rgba(" + colorRgb + "," + colorOpacity + ")";

    localStorage.setItem("bgcolor", colorRgb);

    localStorage.setItem("bgalpha", colorOpacity);



    chrome.tabs.executeScript(null,
        { code: "document.body.style.backgroundColor='" + color + "'" + ";localStorage.setItem('bgdefault','" + color + "');" });

    
}

function setBgOpcity() {
    var colorOpacity = (document.getElementById("opRange").value) / 100;
    localStorage.setItem("opacity", colorOpacity);
    var color, colorNum;
    colorNum = localStorage.getItem("defaultcolorNum");

    color = "rgba(" + colorNum + "," + colorOpacity + ")";
    chrome.tabs.executeScript(null,
        { code: "document.body.style.backgroundColor='" + color + "'" });

}

document.addEventListener('DOMContentLoaded', function () {

    var opIn = localStorage.getItem("opacity"),
        opRange = document.getElementById("opRange");
    opRange.value = opIn * 100 || 20;

    var defaultcolor = localStorage.getItem("defaultcolor"),
		defaultIcon = document.getElementsByClassName(defaultcolor)[0];
    defaultIcon ? defaultIcon.setAttribute("class", defaultcolor + " focus") : "";
   
    var divs = document.getElementsByClassName('colorbox');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', setBgColor);
    }
    opRange.addEventListener('mouseup', setBgOpcity);
});
