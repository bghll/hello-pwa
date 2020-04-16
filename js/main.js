

// Load up and start SW script
window.onload = () => {  
    'use strict';     
    if ('serviceWorker' in navigator) {     
        navigator.serviceWorker.register('./sw.js'); 
    } 
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
installItself = () => {

    console.log("installing...");
}
    
/* Get today's date */
n =  new Date();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "(Tänään on "+ d + "." + m + ".)";
