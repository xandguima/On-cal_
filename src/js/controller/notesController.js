
export default{
  
  toggleShowNotes(){
    let firstClickSection;
    const divNotes=document.getElementById("noteDay")
    const divsDays=document.querySelectorAll(".day")

   
    divsDays.forEach(divDay=>{
      const dayNow=divDay.innerHTML
     // let isClicked = false;
     //const ComputedStyle=window.getComputedStyle(divDay);
     //const backgroundColor=ComputedStyle.backgroundColor
      divDay.addEventListener("click",()=>{
        divNotes.classList.toggle("hidden")
       
          //divDay.style.backgroundColor = '#77DE82';
          //divDay.style.backgroundColor = '#202E2F';
      })

    })
   
  
  }
}
