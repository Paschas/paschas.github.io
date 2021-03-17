let illusion;
let slider1;
let slider2;
let label1;
let label2;

let d1;
function setup() {
    illusion = loadImage('./assets/illusion.png')
    createCanvas(1400, 721)
    background(255);

    label1 = createDiv('Rectangle 1: ');
    slider1 = createSlider(0, 255, 0, 1);
    slider1.style('width', '300px');
    slider1.parent(label1);

    label2 = createDiv('Rectangle 2: ');
    slider2 = createSlider(0, 255, 0, 1);
    slider2.style('width', '300px');
    slider2.parent(label2);

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
    rect(1200, 300, 130);

    fill(0)
    textSize(20)
    text('Color 1: ' + (255 - slider1.value()).toString(), 5, 100)
    text('Color 2: ' + (255 - slider2.value()).toString(), 1000, 100)
    let distance_between_rects = Math.sqrt(3 * ((255 - slider2.value()) - (255 - slider1.value())) * ((255 - slider2.value()) - (255 - slider1.value())))
    let distance_between_illusion1 = Math.sqrt(3 * ((255 - slider1.value()) - 111) * ((255 - slider1.value()) - 111))
    let distance_between_illusion2 = Math.sqrt(3 * ((255 - slider2.value()) - 111) * ((255 - slider2.value()) - 111))
    text('Color distance 1: ' + distance_between_rects.toString().substring(0, 5), 1000, 650)
    text('Color distance 2: ' + distance_between_illusion1.toString().substring(0, 5), 1000, 670)
    text('Color distance 3: ' + distance_between_illusion2.toString().substring(0, 5), 1000, 690)
}
