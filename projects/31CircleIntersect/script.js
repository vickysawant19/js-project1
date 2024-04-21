let circlesvalue = [];

document.addEventListener("click", (e) => {
  const circles = document.body.querySelectorAll(".circle");

  if (circles.length === 2) {
    document.body.removeChild(circles[0]);
    document.body.removeChild(circles[1]);
    circlesvalue = [];
  }
  drawCircle(e.clientX, e.clientY);
  circlesvalue.length >= 2 ? checkIntersect() : "";
});

function drawCircle(x, y) {
  const radius = Math.floor(Math.random() * (100 - 50) + 50);
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = radius * 2 + "px";
  circle.style.height = radius * 2 + "px";
  circle.style.top = y - radius + "px";
  circle.style.left = x - radius + "px";

  circlesvalue.push({
    x,
    y,
    radius,
  });

  document.body.appendChild(circle);
}

function checkIntersect() {
  const x0 = circlesvalue[0].x;
  const x1 = circlesvalue[1].x;
  const y0 = circlesvalue[0].y;
  const y1 = circlesvalue[1].y;
  const r0 = circlesvalue[0].radius;
  const r1 = circlesvalue[1].radius;

  //   console.log(x0, x1, y0, y1, r0, r1);
  const intersect = Math.hypot(x0 - x1, y0 - y1) <= r0 + r1;
  console.log("intercept :", intersect);
}
