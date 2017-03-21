

document.addEventListener('DOMContentLoaded', function () {
    
        var button = document.getElementById("luxlink");
        var nobtn = document.getElementById("nolux");
        button.addEventListener('click', click);
        nobtn.addEventListener('click', clear);
        
        
       
});


function click() {
  

    //回傳的luxval
    //alert(lux);

    chrome.tabs.executeScript(null,
    {
  
        //code: " $('#gogglediv').remove(); var d = document.createElement('div');d.id = 'gogglediv';d.style.width = '100%';d.style.height = '100%';d.style.position = 'fixed';d.style.left = '0';d.style.top = '0';d.style.right = '0';d.style.bottom = '0';d.style.pointerEvents = 'none';d.style.zIndex = '2147483647';d.style.backgroundColor ='hsl(0,0%,"+ lux+"%)'; d.style.opacity = '0.5';document.body.appendChild(d);"
        
       code: "var color = $('body').css('background-color');alert(color)"
    });
    
}

document.addEventListener('DOMContentLoaded', function () {
    //save get page color  from a1
    //chrome.tabs.executeScript(null,
    //{
    //    //code: "var color = $('body').css('background-color');localStorage.setItem('colorval', color);"
        

      

    //});

    

}
 )



function clear() {
    chrome.tabs.executeScript(null,
     {
     
         code: "code:$('#gogglediv').remove();"
     
         });
}





