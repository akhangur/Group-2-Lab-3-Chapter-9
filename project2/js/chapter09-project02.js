/* add code here */

window.addEventListener("load", function()          
{
    var clickImg= document.querySelectorAll("#thumbnails img");
    for(i=0;i<clickImg.length;i++)
    {
        //Step 3
        clickImg[i].addEventListener("click",function(event)                    
        {
            var filepath = event.target.src;    
            var filename = filepath.split("images/small");                       
            document.querySelector("#featured img").src = "images/medium"+filename[1];
            document.querySelector("#featured img").title = event.target.title; 
            document.querySelector("#featured img").alt = event.target.alt;
            var caption = document.querySelector("#featured figcaption");
            caption.style.opacity = "60%";
            caption.innerHTML = event.target.title;
        })
    }
})