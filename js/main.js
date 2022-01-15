/* $('#kitty').on("click",function(){
    console.log("We are going to be millionaries this year!")
})

let word = ""
$("input[type='text']").on("keypress",function(e){
    console.log(word += e.key);
    //console.log($(this).val());
})  */ 
  $(function(){
    let mouse = false;
    let hue = 0;
    let previewXposition = 0;   

    $(document).mousedown(function(e){
        mouse = true;
       
    })

    $(document).mouseup(function(e){
        mouse = false;
        
    })

    const draw = function(posX, PosY){        
        //const mouseSpeed = posX - previewXposition;
        const circleNumber = Math.random() * 150;   
        //const circleNumber = Math.abs(mouseSpeed) * 2; //convert negative to positive
        //const circleNumber = posX;   
        const r = Math.random() * 255; 
        const g = Math.random() * 255;
        const b = Math.random() * 255; 

        //HSL = Hue, Stauration, Lightness

        const $divDrawing = $("<div class='circle'></div>");
        $divDrawing.css({
            "left":  (posX - circleNumber/2) + "px",
            "top": ( PosY - circleNumber/2) + "px",  
            "width":  circleNumber+"px",
            "height": circleNumber+"px",
            "backgroundColor": `hsla(${hue},100%,50%,40%)`,
            //"backgroundColor": `rgb(${r},${g},${b})`,
        })
        $(document.body).append($divDrawing);
        $divDrawing.animate({
            top: Math.random() * window.innerHeight + "px",
            left:  Math.random() * window.innerWidth + "px",
        }, 8000, function(){
            $(this).remove();
        })
        
    };
    
    $(document).on("mousemove", function(e){ 
        if(mouse){
            hue++;
            draw(e.originalEvent.clientX, e.originalEvent.clientY)
            previewXposition = e.originalEvent.clientX;
        }
        
    }) 
}); 