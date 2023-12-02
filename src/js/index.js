import daysContainer from "./controller/daysContainerController.js"
import notesDays from "./controller/notesController.js"


const routes = {
  "/": "src/pages/dashboard.html",
  "/notification":"src/pages/notification.html",
  "/addNotes":"src/pages/addNotes.html",
  "/settings":"src/pages/settings.html",
  "/exit":"src/pages/exit.html"
 
}
window.onload = function() {
  handle();
};
 
function route(event) {
  event.preventDefault()
  window.history.pushState({},"",event.currentTarget.href)
  handle()
}

async function handle() {
  const {pathname}=window.location
  console.log(pathname)
  
  const route = routes[pathname] || routes[404]
  console.log(route)
  await fetch(route)
  .then(data => data.text())
  .then(html => {
    const styleSheet = document.querySelector("#css")
    document.querySelector('#overall').innerHTML = html
    
    if(pathname=="/settings"){
      styleSheet.href = "src/css/settings.css"

    }else if (pathname == "/addNotes") {
      styleSheet.href = "src/css/addNotes.css"
    }
    else if (pathname == "/notification") {
      styleSheet.href = "src/css/notification.css"

    }else if (pathname == "/exit") {
      styleSheet.href = "src/css/exit.css"
      document.querySelector('#app').innerHTML = html
    }
    else if(pathname=="/") {      
      daysContainer.createDays()
      notesDays.toggleShowNotes()
     daysContainer.dateDashboard()
     styleSheet.href = "src/css/dashboard.css"
    }

  })
  
  
}
window.onpopstate=()=>handle()
window.route = route;
