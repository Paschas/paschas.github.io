let illusion;
let slider1;
let slider2;
let slider3;
let label1;
let label2;
let label3;

let d1;
function setup() {
    illusion = loadImage('./assets/illusion.png')
    createCanvas(1900, 721)
    background(255);

    label1 = createDiv('Team 1&2, Task 1 (t1): ');
    label1.style('font-size', '20px')
    slider1 = createSlider(0, 255, 0, 1);
    slider1.style('width', '300px');
    label1.position(55, 750)
    slider1.parent(label1);

    label2 = createDiv('Team 1, Task 2 (t2): ');
    label2.style('font-size', '20px')
    slider2 = createSlider(0, 255, 0, 1);
    slider2.style('width', '250px');
    label2.position(950, 750);
    slider2.parent(label2);

    label3 = createDiv('Team 2, Task 2 (t2): ');
    label3.style('font-size', '20px')
    slider3 = createSlider(0, 255, 0, 1);
    slider3.style('width', '250px');
    label3.position(1450, 750)
    slider3.parent(label3);
}


function draw() {
    background(255)
    image(illusion, 0, 0);
    noStroke();

    beginShape();

    fill(255 - slider1.value());
    vertex(455, 343);
    vertex(579, 370);
    vertex(513, 443);
    vertex(388, 415);
    endShape(CLOSE);

    strokeWeight(0.1)
    stroke(0)
    fill(255 - slider2.value())
    rect(1100, 300, 130);


    fill(0)
    rect(1400, 0, 721);

    strokeWeight(0.1)
    stroke(0)
    fill(255 - slider3.value());
    rect(1600, 300, 130);


    fill(0)
    textSize(20)
    text('Team 1&2, Task 1 (t1): ' + (255 - slider1.value()).toString(), 55, 100)
    text('Team 1, Task 2 (t2): ' + (255 - slider2.value()).toString(), 1050, 100)
    fill(255)
    text('Team 2, Task 2 (t2): ' + (255 - slider3.value()).toString(), 1550, 100)

    fill(0)
    let distance_between_illusion1 = ((255-slider1.value()) - (255-slider2.value()))
    let distance_between_illusion2 = ((255-slider1.value()) - (255-slider3.value()))
    text('Color difference T = t1-t2: ' + distance_between_illusion1.toString().substring(0, 5), 1050, 650)
    fill(255)
    text('Color difference T = t1-t2: ' + distance_between_illusion2.toString().substring(0, 5), 1550, 650)
}
