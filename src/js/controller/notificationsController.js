export default{
  createNotifications(){
    let date=new Date()
    let hour=date.getHours()
    let minutes=date.getMinutes()
    let currentTime= hour+":"+minutes
    let notificationPanel = document.querySelector("#notificationPanel")

    const heading=[
      "Pagamento em atraso",
      "Novo pagamento",
      "Nova mensagem",
      "Pagamento atualizado",
      "Data do plantão Atualizado",
      "Proximo pagamento",
      "Proximo pagamento",
      "Cancelamento"
    ]
    const text=[
      "Voce acaba de ficar com um pagamento em atraso",
      "Voce acaba de receber um novo pagamento",
      "Voce acaba de receber uma nova mensagem",
      "Pagamento atualizado referente ao plantão do dia 22/12/2023",
      "Data de plantão no Onofre Lopes Atualizado",
      "Proximo pagamento será na data 12/12/2023",
      "Valor do proximo pagamento é de R$ 500,00",
      "Plantão cancelado"
    ]
    //const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for(let i = 0; i < 8; i++) {
      let notification=document.createElement("section")
      let notificationContent=document.createElement("h4")

      let headNotification=document.createElement("div")
      let title=document.createElement("h2")
      let hora=document.createElement("p")
      
      notification.className="notification"
      notificationContent.innerHTML=text[i]
      headNotification.className="headNotification"
      title.innerHTML=heading[i]
      hora.innerHTML=currentTime
  
  
      notificationPanel.appendChild(notification);
      notification.appendChild(headNotification)
      notification.appendChild(notificationContent)
      headNotification.appendChild(title)
      headNotification.appendChild(hora)
    }
    
  }
    
  
}