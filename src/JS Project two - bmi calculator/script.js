const form = document.querySelector("form")



form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const weight = parseInt(document.querySelector("input[name='weight']").value) 
    const height = parseInt(document.querySelector("input[name='height']").value)

  if(!isNaN(weight)){
    const result = (weight / ((height / 100) ** 2)).toFixed(2)

    relem = document.querySelector("#result");
    console.log(relem)

    if(result <= 18.5 ){
      relem.innerHTML = `Your BMI is: ${result} <br>Underweight:BMI less than 18.5`
    }else if (result <= 24.9 ){
      relem.innerHTML = `Your BMI is: ${result} <br>Normal weight (Healthy): BMI between 18.5 and 24.9`
    }else if(result <= 29.9 ){
      relem.innerHTML = `Your BMI is: ${result} <br>Overweight:BMI between 25 and 29.9`
    }else{
      relem.innerHTML = `Your BMI is: ${result} <br>Obese:BMI of 30 or greater`
    }


    
  }
   

})