
export default{
  
  createDays(){
    let date = new Date();

    let daysInMouth=new Date(date.getFullYear(),date.getMonth()+1,0).getDate()

    let dayToday=date.getDate()
    let daysContainer=document.getElementById("days-container")

    for(let i=dayToday;i<=daysInMouth;i++){
      let daySection=document.createElement("section")
      daySection.className="day"
      daySection.innerHTML=i;

      daysContainer.appendChild(daySection);
    }
  
  },
  buttonsScroll(){
    let scrollLeftButton = document.getElementById("scroll-left");
    let scrollRightButton = document.getElementById("scroll-right");
    let daysContainer = document.getElementById("days-container");

   // Add event listeners to the buttons
    scrollLeftButton.addEventListener("click", function() {
    daysContainer.scrollBy({ left: -100, behavior: 'smooth' });
    });

    scrollRightButton.addEventListener("click", function() {
    daysContainer.scrollBy({ left: 100, behavior: 'smooth' });
    });

  }
}
