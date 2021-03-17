let illusion;
let slider1;
let slider2;
let label1;
let label2;

function setup() {
    illusion = loadImage('./assets/illusion.png')
    createCanvas(1400, 721)

    label1 = createDiv('Rectangle 1: ');
    slider1 = createSlider(0, 255, 0, 1);
    slider1.style('width', '300px');
    slider1.parent(label1);

    label2 = createDiv('Rectangle 2: ');
    slider2 = createSlider(0, 255, 0, 1);
    slider2.style('width', '300px');
    slider2.parent(label2);
    background(255);
}

function draw() {
    image(illusion, 0, 0);
    noStroke();

    beginShape();

    fill(255 - slider1.value());
    vertex(455, 343);
    vertex(579, 370);
    vertex(513, 443);
    vertex(388, 415);
    endShape(CLOSE);

    strokeWeight(0.01)
    stroke(100)
    fill(255 - slider2.value())
    rect(1200, 300, 130);
}
