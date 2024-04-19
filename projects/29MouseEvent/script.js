const containerEl = document.querySelector(".container");

containerEl.addEventListener("mouse", () => {});

window.addEventListener("mousemove", (e) => {
  containerEl.innerHTML = `<div class="mouse-event">
  ${e.clientX}
  <h4>Mouse X Proportion(px)</h4>
     </div> 
     <div class="mouse-event">
           ${e.clientY}
            <h4>Mouse Y Proportion(px)</h4>
        </div>`;
});
