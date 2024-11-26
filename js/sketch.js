let canvas;
let xPos = 0; 
let yPos = 0; 
let easing = 0.2; 
let pngImage;

function preload() {
    pngImage = loadImage("images/hand-1000.png");
}

function setup() { 
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", 0);
    canvas.style("position", "fixed");
    imageMode(CORNER); 
} 

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();

    
    let targetX = mouseX + window.scrollX; 
    let targetY = mouseY + window.scrollY;

    
    xPos = xPos + (targetX - xPos) * easing;
    yPos = yPos + (targetY - yPos) * easing;

    drawThing(xPos, yPos);
}

function drawThing(_x, _y) {
    if (pngImage) {
        let offsetX = -80; // Horizontal offset
        let offsetY = -60; // Vertical offset

        
        image(pngImage, _x + offsetX, _y + offsetY, 250, 250); 
    }
}
