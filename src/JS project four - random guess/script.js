let randomNum = Math.round(Math.random()*100)
console.log(randomNum)

let rTry = 10;



const guessNum = [];


const subBtn = document.querySelector("#submit")

subBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  const inNum = parseInt(document.querySelector("#inNum").value)
  checknum(inNum);

})


function checknum(inNum){
  if (isNaN(inNum) || inNum < 1 || inNum > 100 ) {
    document.querySelector("#rMsg").innerHTML = `Please check Your number `
  }else {
    rTry = rTry-1;
    if(rTry > 0){
      console.log(rTry);
      
      document.querySelector("#gNum").innerHTML = `${inNum}`
    document.querySelector('#rTries').innerHTML = `${rTry}`
    guessNum.push(inNum);
    const newElementHTML = `<div class="bg-gray-400 mr-1 p-1 rounded-full">${inNum}</div>`;
    document.querySelector("#pGuess").insertAdjacentHTML('beforeend',newElementHTML)
    checkGuess(inNum);

    }else if(rTry === 0){
      console.log(rTry);
     document.querySelector("#gNum").innerHTML = `${inNum}`
    document.querySelector('#rTries').innerHTML = `${rTry}`
    guessNum.push(inNum);
    const newElementHTML = `<div class="bg-gray-400 mr-1 p-1 rounded-full">${inNum}</div>`;
    document.querySelector("#pGuess").insertAdjacentHTML('beforeend',newElementHTML)
    checkGuess(inNum);
    document.querySelector("#rMsg").innerHTML = ` Your Tries End ! Random number was ${randomNum} <br> <button class="bg-red-500 text-white font-semibold uppercase hover:bg-red-900" id="restart">Restart again <button/>`
      document.querySelector("#restart").addEventListener('click',(e)=>{

        restartAgain();
      })   




    }else{
      document.querySelector("#rMsg").innerHTML = ` Your Tries End ! Random number was ${randomNum} <br><button class="bg-red-500 text-white font-semibold uppercase hover:bg-red-900" id="restart">Restart again <button/>`
      document.querySelector("#restart").addEventListener('click',(e)=>{

        restartAgain();
      })   

     
      
    }
 
  }

}

function restartAgain(){
  document.querySelector('#submit').setAttribute('disabled', '');

  rTry = 10;
  document.querySelector("#gNum").innerHTML = ""
  document.querySelector('#rTries').innerHTML = ""

  const pElem = document.querySelector("#pGuess")

    while ( pElem.firstChild){
      pElem.removeChild(pElem.firstChild)
    }

    document.querySelector("#rMsg").innerHTML = ""
    randomNum = Math.round(Math.random()*100+1)



}


function checkGuess(inNum){
  if (inNum === randomNum) {
    restartAgain()
    
    document.querySelector("#rMsg").innerHTML = ` Congrats !!  You'r guess was Right. <br> <button class="bg-red-500 text-white font-semibold uppercase hover:bg-red-900" id="restart">Restart again <button/>`
    document.querySelector("#restart").addEventListener('click',(e)=>{

      restartAgain();
      document.querySelector('#submit').removeAttribute('disabled');
    })   

    
  } else if(inNum >= randomNum){
    document.querySelector("#rMsg").innerHTML = ` You Guessed Number is TOO BIG`

  }else if (inNum <= randomNum){
    document.querySelector("#rMsg").innerHTML = ` You Guessed Number is TOO SMALL`

  }

}
