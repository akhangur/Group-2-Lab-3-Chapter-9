/* add code here */
//Step 2
window.addEventListener("load", function()                                              //Load event
{
    var clickImg= document.querySelector("#thumbnails");
    var LImg = document.querySelector("#featured img");
    var caption = document.querySelector("#featured figcaption");
    //Step 3
    clickImg.addEventListener("click",function(event)                                   //click event
        {
            var filepath = event.target.src;    
            var filename = filepath.split("images/small/");                              // split till images/small and extract the filename only  
            LImg.src = "images/medium/"+filename[1];
            LImg.title = event.target.title; 
            LImg.alt = event.target.alt;
            caption.innerHTML = event.target.title;
        });

    //Step 4
    LImg.addEventListener("mouseover",function(event)                                  //mouseover event
        {
            caption.style.opacity = "80%";
        });


    LImg.addEventListener("mouseout",function(event)                                    //mouseout event
        {
            caption.style.opacity = "0%";    
            //Step 5                                    
            caption.style.transition = "opacity 1s";                                     

        });
    
})
