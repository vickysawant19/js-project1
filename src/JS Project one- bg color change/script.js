const circle_col = document.querySelectorAll(".rounded-full")

console.log(circle_col)

circle_col.forEach((cir)=>{
    cir.addEventListener("click",(e)=>{
        document.body.classList = `bg-${cir.id}-500`;
        console.log(e.target.id)
        // document.body.style.opacity ="60%"

    });




})