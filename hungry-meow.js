const container = document.querySelector('.container')

 const text = document.querySelector('#text')

 const totalTime = 4500 
 const breatheTime = (totalTime / 5) * 2
 const holdTime = totalTime / 5 

breatheAnimation()

 function breatheAnimation () {
     text.innerHTML = 'Greetings'
     container.className = 'container grow'

     setTimeout(() => {

text.innerText = 'Thank you for visiting us'

setTimeout(() => {
text.innerText = 'Please Stay Classy Cheers'
container.className = 'container shrink'
}, holdTime)

}, breatheTime)

}

setInterval(breatheAnimation, totalTime)



