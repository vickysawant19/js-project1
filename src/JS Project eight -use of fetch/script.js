url = `https://source.unsplash.com/random/200x300`


const imageBox = document.getElementById('imageBox')




function createEl(val = 3){

  for (let i = 0; i < val; i++) {
    const imgElem = document.createElement('img')

    imgElem.className = 'object-cover aspect-square min-h-96 w-96 border'
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

let lastScrollTop = 0;
let isScrollPuase = false;

function handleScroll() {

  if(!isScrollPuase){

    const currentScrollTop = window.scrollY;
    console.log(`currentScrollTop:${currentScrollTop}`)
    console.log(`lastScrollTop:${lastScrollTop}`)

    isScrollPuase = true;
    
    

    // Check if scrolling down
    if (currentScrollTop > lastScrollTop) {
   
      console.log('Scrolled down!');
      createEl(12);
      
    }

    // Update the last scroll position
    lastScrollTop = currentScrollTop;
    setTimeout(()=>{
      isScrollPuase = false;

    },2000)
    

  }
  
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);




createEl(12);

// setInterval(createEl , 3000)







