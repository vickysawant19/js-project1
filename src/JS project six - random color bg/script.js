const hex = '0123456789ABCDEFH'

let randomColor = `#`

let timerEvent = ""



document.querySelector("#start").addEventListener( 'click',()=>{
  if(timerEvent === ""){
  timerEvent = setInterval(()=>{
    for ( i=0 ; i <6 ;  i++) {
      let num = Math.floor(Math.random()*16)
      randomColor += hex[num]
    };
    console.log(randomColor)

    document.querySelector('body').style.backgroundColor = randomColor
    randomColor = "#";
    
  },1000)
}


})


document.querySelector("#stop").addEventListener('click', ()=>{
  clearInterval(timerEvent)
  timerEvent= "";

})