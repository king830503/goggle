//背景顏色

function getAttrStyle(elem,attr){
    if(elem.style[attr]){
        //若樣式存在於html中,優先獲取
        return elem.style[attr];
    }else if(elem.currentStyle){
       
        return elem.currentStyle[attr];
    }else if(document.defaultView && document.defaultView.getComputedStyle){
        
        //元格式屬性為(text-align)獲取的,所以要轉換
        attr=attr.replace(/([A-Z])/g,'-$1').toLowerCase();
        //或取樣是對樣獲取屬性值
        return document.defaultView.getComputedStyle(elem,null).getPropertyValue(attr);
    }else{
        return null;
    }
}
