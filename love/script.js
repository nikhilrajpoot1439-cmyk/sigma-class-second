const text = " LOVE LOVE LOVE LOVE LOVE LOVE ";
const circle= document.getElementById("circleText");

for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.innerText = text[i];
    span.style.transform = "rotate(" + (i * 12) + "deg)";
    circle.appendChild(span);
}