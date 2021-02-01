/* add code here  */

window.addEventListener('load', function(){
    //Step 2
    var hilightableInputs = document.querySelectorAll(".hilightable");
    for(i=0; i < hilightableInputs.length; i++) {
      var toggle = (event) => { event.target.classList.toggle('highlight') } 
      hilightableInputs[i].addEventListener('focus', toggle)
      hilightableInputs[i].addEventListener('blur', toggle)
    }
  
   //Step 3  
    var form=document.getElementById("mainForm");
    form.addEventListener("submit", submissionCheck);
    function submissionCheck(event){
      var requiredInputs = document.querySelectorAll(".required");
      for(i=0; i < requiredInputs.length; i++){
        if(requiredInputs[i].value == "")                         //Check whether the feild is empty or not
        {
            event.preventDefault();
            requiredInputs[i].classList.add("error");             //Show error by adding class error form css
        }
        else {
          requiredInputs[i].classList.remove("error");          
        }
  
      }
    }
    form.addEventListener("reset", resetForm)
  //step 4
    function resetForm(event){
      var requiredInputs = document.querySelectorAll(".required");
      for(i=0; i < requiredInputs.length; i++){
        requiredInputs[i].classList.remove("error");
      }
    }
  
  })





