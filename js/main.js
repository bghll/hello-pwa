
// Load up and start SW script
window.onload = () => {  
    'use strict';     
    if ('serviceWorker' in navigator) {     
        navigator.serviceWorker.register('./sw.js'); 
    } 
}
    