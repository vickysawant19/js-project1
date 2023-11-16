window.addEventListener('keydown',(e)=>{

 document.querySelector('#data').innerHTML= ` 
 <td>${e.key === ' '?'Space':e.key}</td>
  <td>${e.keyCode}11</td>
  <td>${e.code}</td>
 

`

})