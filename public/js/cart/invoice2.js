var j = true;
function move(){
    if(localStorage.getItem('received-funds')) {
        if(!localStorage.getItem('paidtime')){
            var elemj = document.getElementById('pablos');
            localStorage.setItem('time-left',3600)
            var width = localStorage.getItem('time-left');
            var id = setInterval(frame, 1000);
            function frame(){
                if(width <= 0){
                    clearInterval(id);
                    i = false;
                    localStorage.clear();
                    alert("Time's up. This progress is lost, select another bank log from the website and pay for it on time");
                    window.location.reload();
                } 
                else if( width <= 1200) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    elemj.style.width = (width/36) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width <= 2400) {
                    elemj.classList.add("bg-warning");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    elemj.style.width = (width/36) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else {
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    elemj.style.width = (width/36) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                }
            }
        } else{
            var elemj = document.getElementById('pablos');
            var width = localStorage.getItem('time-left');
            var id = setInterval(frame, 1000);
            function frame(){
                if(width <= 0){
                    clearInterval(id);
                    i = false;
                    localStorage.clear();
                    alert("Time's up. This progress is lost, select another bank log from the website and pay for it on time");
                    window.location.reload();
                } 
                else if( width <= 1200) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    elemj.style.width = (width/36) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width <= 2400) {
                    elemj.classList.add("bg-warning");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    elemj.style.width = (width/36) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else {
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){
                        seconds = '0'+seconds
                    }
                    elemj.style.width = (width/36) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                }
            }
        }
        localStorage.setItem('paidtime',true)     
    } else {
        console.log('There was nothing on your cart')
    }
}
