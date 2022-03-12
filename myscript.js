let text=document.getElementById('text')
text.innerHTML='hello'
let alpha
let beta
let gamma
let canvas=document.getElementById('canvas')
canvas.height=600
canvas.width=600
let ctx=canvas.getContext('2d')
/*
window.addEventListener('deviceorientation', function(event) {
    alpha = event.alpha
    beta = event.beta
    gamma = event.gamma
    console.log(event)
    text.innerHTML=Math.floor(alpha)+'<br>'+Math.floor(beta)+'<br>'+Math.floor(gamma)
    draw()
}, false);
*/
let deg=0
window.addEventListener('devicemotion', function(event) {
    alpha = event.rotationRate.alpha
    beta = event.rotationRate.beta
    gamma = event.rotationRate.gamma
    deg+=alpha/100
    console.log(event.rotationRate)
    text.innerHTML=Math.floor(alpha)+'<br>'+Math.floor(beta)+'<br>'+Math.floor(gamma)
    draw()
}, false);




function draw(){
    



    ctx.save()
        ctx.fillStyle='black'
        ctx.fillRect(0,0,600,600)
        ctx.translate(300,300)
        ctx.rotate(deg)
        ctx.fillStyle='red'
        ctx.beginPath()
        ctx.moveTo(-10,-20)
        ctx.lineTo(10,-20)
        ctx.lineTo(0,20)
        ctx.closePath()
        ctx.fill()
    ctx.restore()
}
setInterval(draw,20)