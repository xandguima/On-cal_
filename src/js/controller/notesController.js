
export default{
  
  toggleShowNotes(){
    const divNotes=document.getElementById("noteDay")
    const divsDays = document.querySelectorAll(".day");

    divsDays.forEach(divDay => { 
      divDay.addEventListener("click", () => { 
        const dayWeek = divDay.querySelector(".dayWeek");
        divNotes.classList.toggle("hidden");
        this.displayNotesForDay(dayWeek.textContent)
      });
    });

   
  
  },
  displayNotesForDay(day) {
    let hospitalName = document.querySelector("#hospitalName")
    let beginning= document.querySelector("#beginning")
    let price= document.querySelector("#price")
    let duration= document.querySelector("#duration")

    const note=[
      {
        "day":"Monday",
        "hospital":"Hospital Onofre Lopes",
        "time":"13:00",
        "value":"500",
        "duration":"12"
      },
      {
        "day":"Tuesday",
        "hospital":"Hospital São Lucas",
        "time":"15:00",
        "value":"600",
        "duration":"10"
      },
      { 
        "day":"Wednesday",
        "hospital":"Hospital Santa Luzia",
        "time":"22:00",
        "value":"800",
        "duration":"15"
      },
      {
        "day":"Thursday",
        "hospital":"UPA Satélite",
        "time":"15:30",
        "value":"R$500",
        "duration":"10"
      },
    {  
        "day":"Friday",
        "hospital":"Hospital João Paulo",
        "time":"23:00",
        "value":"700",
        "duration":"12"
      },
      {
        "day":"Saturday",
        "hospital":"Promater",
        "time":"19:00",
        "value":"500",
        "duration":"12"
      },
      {
        "day":"Sunday",
        "hospital":"Hospital Rio Grande",
        "time":"21:30",
        "value":"700",
        "duration":"10"
      }
    ]
  
    for(let i = 0; i < note.length; i++) { 
      if(note[i].day == day) {
        hospitalName.textContent = note[i].hospital;
        beginning.textContent = note[i].time;
        price.textContent = note[i].value;
        duration.textContent = note[i].duration;
      }
    }
  }
  
}
