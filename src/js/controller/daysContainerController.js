
export default{
  dateDashboard(){
    const dateDashboard=document.getElementById("dateDashboard")
    let date=new Date() 
    const dataHora = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    dateDashboard.innerText=dataHora
  },
  
  createDays(){
    let date = new Date()
    
    let daysContainer = document.querySelector("#days-container")
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for(let i = 0; i < 7; i++) {

      //logic for show seven days ahead today 
      let futureDate = new Date(date.getTime());
      futureDate.setDate(date.getDate() + i);
      const dayOfWeek=weekdays[futureDate.getDay()]
     
      //create section with days
      let daySection=document.createElement("section")
      let dayWeek=document.createElement("h3")
      let dayMonth=document.createElement("p")
      

      daySection.className="day"
      dayWeek.className="dayWeek"
      dayWeek.innerHTML=dayOfWeek
      dayMonth.innerHTML=futureDate.getDate(); 
  
      daysContainer.appendChild(daySection);
      daySection.appendChild(dayWeek)
      daySection.appendChild(dayMonth)
    }
    
  }
    
}
