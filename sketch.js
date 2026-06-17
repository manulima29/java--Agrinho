let slider;

function setup() {

    let canvas = createCanvas(700, 400);
    canvas.parent("canvas-container");

    slider = createSlider(0, 20, 5);
    slider.position(50, height + 160);
}

function draw() {

    background(135, 206, 235);

    // Sol
    fill(255, 204, 0);
    circle(600, 80, 80);

    // Chão
    fill(80, 180, 80);
    rect(0, 250, width, 150);

    // Fazenda
    fill(200, 120, 60);
    rect(80, 150, 120, 100);

    fill(150, 50, 50);
    triangle(80,150,140,100,200,150);

    let paineis = slider.value();

    for(let i=0; i<paineis; i++){

        let x = 260 + (i % 5) * 70;
        let y = 180 + floor(i / 5) * 60;

        fill(30,60,180);
        rect(x, y, 50, 30);

        stroke(255);
        line(x+25,y,x+25,y+30);
        line(x,y+15,x+50,y+15);
        noStroke();
    }

    let energia = paineis * 50;
    let co2 = paineis * 12;

    document.getElementById("energia").innerHTML =
        "Energia gerada: " + energia + " kWh";

    document.getElementById("co2").innerHTML =
        "CO₂ evitado: " + co2 + " kg";
}
let fazenda;

function preload() {
    fazenda = loadImage("https://agroadvance.com.br/wp-content/uploads/2025/09/2-1-1024x766.webp");
}
