const container = document.querySelector('.container')

 const text = document.querySelector('#text')

 const totalTime = 4500 
 const breatheTime = (totalTime / 5) * 2
 const holdTime = totalTime / 5 

breatheAnimation()

 function breatheAnimation () {
     text.innerHTML = 'Luxury'
     container.className = 'container grow'

     setTimeout(() => {

text.innerText = 'Classy'

setTimeout(() => {
text.innerText = 'Excellent'
container.className = 'container shrink'
}, holdTime)

}, breatheTime)

}

setInterval(breatheAnimation, totalTime)




document.write('hello, World')