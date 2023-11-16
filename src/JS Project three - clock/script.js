const clock =  document.querySelector("#clock")


setInterval(()=>{

  let time = new Date();

  clock.innerHTML = time.toLocaleTimeString();

},1000)

