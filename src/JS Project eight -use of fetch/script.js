url = `https://source.unsplash.com/random/400x400`


const imageBox = document.getElementById('imageBox')




function createEl(){

  for (let i = 0; i < 3; i++) {
    const imgElem = document.createElement('img')

    imgElem.className = 'object-cover aspect-square min-h border'
    imgElem.id = `${new Date().getTime()}`

    fetchImg(imgElem)
  
    imageBox.appendChild(imgElem)
    
    
    
  }
 
}

function fetchImg(imgT){
  fetch(url).then((res) => {

    imgT.src = res.url
  })
  
}



createEl();

setInterval(createEl , 300)







