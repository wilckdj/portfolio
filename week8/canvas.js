let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);


function drawGradient() {
    let canvas = document.getElementById("demo3");
    let context = canvas.getContext("2d");
    context.strokeStyle = "red";
    let gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
}

function drawCircle() {
    let canvas = document.getElementById("demo4");
    let context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}

function saveDrawing() {
    var canvas4 = document.getElementById("demo4");
    window.open(canvas4.toDataURL("image/png"));
}
let button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

window.addEventListener("load", drawImageToCanvas, false);
window.addEventListener("load", manipulateImage, false);
function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 76, 76);
}

function manipulateImage() {
    let canvas = document.getElementById("demo7");
    let context = canvas.getContext("2d");
    let image = document.getElementById("myImageElem");
    context.drawImage(image, 76, 76);
    let imageData = context.getImageData(0, 0, 200, 200);
    
    let red, green, blue, grayscale;
    
    for (let i = 0; i < imageData.data.length; i += 4) { 
        red = imageData.data[i];
        green = imageData.data[i + 1];
        blue = imageData.data[i + 2];
        grayscale = red * 0.3 + green * 0.59 + blue * 0.11; 
        imageData.data[i] = grayscale; 
        imageData.data[i + 1] = grayscale;  
        imageData.data[i + 2] = grayscale;  
        }
        context.putImageData(imageData, 0, 0);
}