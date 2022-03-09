let text=document.getElementById('text')
text.innerHTML='hello'
let alpha
let beta
let gamma
let canvas=document.getElementById('canvas')
canvas.height=600
canvas.width=600
let ctx=canvas.getContext('2d')

window.addEventListener('deviceorientation', function(event) {
    alpha = event.alpha
    beta = event.beta
    gamma = event.gamma
    console.log(event)
    text.innerHTML=Math.floor(alpha)+'<br>'+Math.floor(beta)+'<br>'+Math.floor(gamma)
    draw()
}, false);
function draw(){
    ctx.save()
        ctx.fillStyle='black'
        ctx.fillRect(0,0,600,600)
        ctx.translate(300,300)
        ctx.rotate(alpha*Math.PI/180)
        ctx.translate(-15,-15)
        ctx.fillStyle='red'

        ctx.fillRect(0,0,30,30)
    ctx.restore()
}
//setInterval(draw,20)
