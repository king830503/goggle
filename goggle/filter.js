//fillter
var temperature = Object();

// Restores select box state to saved value from localStorage.
function restore_options() {
    try {
        temperature = jQuery.parseJSON(localStorage["favorite_colour"]);
    } catch (err) {
        temperature.color = "#FF9329";
        temperature.alpha = 0.3;
        
        temperature.timerenabled = false;
        temperature.iscustom = false;
    }

    $("#trans").val(temperature.alpha * 100);
    if (temperature.iscustom === true) {
        $("#custom").css({
            "border-color": "#999999",
            "border-width": "2px",
            "border-style": "solid"
        });
        $("#custom").css("background-color", temperature.color);
    } else {
        $("*[data-value='" + temperature.color + "']").css({
            "border-color": "#999999",
            "border-width": "2px",
            "border-style": "solid"
        });
    }

   
}

document.addEventListener('DOMContentLoaded', function () {
    
    restore_options();

    $("span").each(function () {
        $(this).on("click", function () {
            resetBorder();
            $(this).css({
                "border-color": "#999999",
                "border-width": "3px",
                "border-style": "solid"
            });
            temperature.color = $(this).attr("data-value");

           
        });
    });

    $("#slider").on("change", function () { temperature.alpha = $("#trans").val() / 100; });

    
    $("#saveBtn").on("click", function () {
        save();
        
        window.close();
        
    });

   
    $('.color-box').colpick({
        colorScheme: 'dark',
        layout: 'rgbhex',
        color: 'ff8800',
        onSubmit: function (hsb, hex, rgb, el) {
            $(el).css('background-color', '#' + hex);
            $(el).colpickHide();
            temperature.color = '#' + hex;
            temperature.iscustom = true;
        }
    })
    .css('background-color', temperature.color);

});


function resetBorder() {
    $("span").each(function () {
        $(this).css("border", "none");
    });
    $("#white, #off").css({
        "border-color": "#00000",
        "border-width": "1px",
        "border-style": "solid"
    });
}

// Saves options to localStorage.
function save() {
    localStorage["favorite_colour"] = JSON.stringify(temperature);



    localStorage.setItem("fcolor", temperature.color);

    localStorage.setItem("falpha", temperature.alpha);

    reloadpage();

}






function reloadpage() {

    chrome.tabs.executeScript(null,
    {

        code: "location.reload();"
    });



}

