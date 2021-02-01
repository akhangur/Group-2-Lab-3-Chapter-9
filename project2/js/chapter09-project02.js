/* add code here */
//Step 2
window.addEventListener("load", function()                                              //Load event
{
    var clickImg= document.querySelector("#thumbnails");
    var caption = document.querySelector("#featured figcaption");
        //Step 3
        clickImg.addEventListener("click",function(event)                              //click event
        {
            var filepath = event.target.src;    
            var filename = filepath.split("images/small");                              // split till images/small and extract the filename only  
            document.querySelector("#featured img").src = "images/medium"+filename[1];
            document.querySelector("#featured img").title = event.target.title; 
            document.querySelector("#featured img").alt = event.target.alt;
            caption.innerHTML = event.target.title;
        })
    

    //Step 4
    var LImg = document.querySelector("#featured img");
    LImg.addEventListener("mouseover",function(event)                    //mouseover event
        {
            caption.style.opacity = "80%";
        })


    LImg.addEventListener("mouseout",function(event)                    //mouseout event
        {
            caption.style.opacity = "0%";
           

        })
    
})
