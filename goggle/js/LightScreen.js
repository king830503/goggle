var fillter = {
    //建div濾鏡 浮在畫面上
    onHandler: function (e) {
        
       
        chrome.tabs.executeScript(null,
   {

       code: " $('#gogglediv').remove(); var d = document.createElement('div');d.id = 'gogglediv';d.style.width = '100%';d.style.height = '100%';d.style.position = 'fixed';d.style.left = '0';d.style.top = '0';d.style.right = '0';d.style.bottom = '0';d.style.pointerEvents = 'none';d.style.zIndex = '2147483647';d.style.opacity = '0.5';document.body.appendChild(d);"


   });

    },

    offHandler: function (e) {
        
       
    },

    setup: function () {
        var a = document.getElementById('alarmOn');
        a.addEventListener('click', fillter.onHandler);
        var a = document.getElementById('alarmOff');
        a.addEventListener('click',fillter.offHandler);
    }
};


document.addEventListener('DOMContentLoaded', function () {
   
    
        fillter.setup();

    

});


 



