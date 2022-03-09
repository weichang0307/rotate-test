let text=document.getElementById('text')
text.innerHTML='hello'
window.addEventListener('deviceorientation', function(event) {
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    console.log(event)
    text.innerHTML=alpha+'<br>'+beta+'<br>'+gamma
}, false);
