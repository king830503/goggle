document.addEventListener('DOMContentLoaded', function () {
   

    var nobtn = document.getElementById("remove_btn");

    nobtn.addEventListener('click', clearset);



});


function clearset() {



    chrome.tabs.executeScript(null,
    { code: "localStorage.removeItem('bgdefault');document.body.style.backgroundColor = '';$('#gogglediv').remove();" });

}

