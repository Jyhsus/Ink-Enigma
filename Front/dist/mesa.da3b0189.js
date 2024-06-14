document.addEventListener("DOMContentLoaded", function(event) {
    const canvas = document.getElementById("main-canvas");
    const contexto = canvas.getContext("2d");
    let prevX;
    let prevY;
    let currX;
    let currY;
    let color = null;
    let cuentaCuentaColor = 0;
    let mouseIsDown = false;
    for(i = 0; i < document.getElementsByClassName("swatch").length; i++)document.getElementsByClassName("swatch")[i].style.backgroundColor = colors[i];
    const colors = [
        "#FF8080",
        "#8080FF",
        "#FFD700"
    ];
    function colorSelection(index) {
        color = colors[index];
    }
    function dibujar(context, color) {
        context.beginPath();
        context.lineWidth = 10;
        context.moveTo(prevX, prevY);
        context.lineTo(currX, currY);
        context.strokeStyle = color;
        context.stroke();
        context.closePath();
    }
    canvas.addEventListener("mousemove", function(event) {
        if (mouseIsDown) {
            if (event.offsetX >= 0 && event.offsetX <= canvas.width && event.offsetY >= 0 && event.offsetY <= canvas.height) {
                dibujar(contexto, color);
                prevX = currX;
                prevY = currY;
            }
            currX = event.offsetX;
            currY = event.offsetY;
        }
    });
    canvas.addEventListener("mousedown", function(event) {
        if (event.offsetX >= 0 && event.offsetX <= canvas.width && event.offsetY >= 0 && event.offsetY <= canvas.height) {
            mouseIsDown = true;
            prevX = event.offsetX;
            prevY = event.offsetY;
        }
        currX = event.offsetX;
        currY = event.offsetY;
    });
    canvas.addEventListener("mouseup", function() {
        mouseIsDown = false;
        cuentaCuentaColor = (cuentaCuentaColor + 1) % colors.length;
        color = colors[cuentaCuentaColor];
    });
    canvas.addEventListener("mouseout", function() {
        mouseIsDown = false;
    });
});

//# sourceMappingURL=mesa.da3b0189.js.map
