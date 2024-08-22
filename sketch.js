let cor;
let CirculoX;
let CirculoY;

function setup() {
createCanvas(400, 400);
background("gold");
cor=color(random(0,255),random(0,255),random(0,255));
CirculoX=[0,0,0,0];
CirculoY= [random(height),random(height),random(height),random(height)];

}

function draw() {
fill(cor);

console.log(CirculoX.length);
for (let numero in CirculoX)   {
console.log(numero);  
circle(CirculoX[numero], CirculoY[numero], 70);

CirculoX[numero] += random(0,3);
CirculoY[numero] += random(-3,3);

if(CirculoX[numero] >= width) {
CirculoX[numero] = 0;
CirculoY[numero] = random(height);
}


}


if(mouseIsPressed) {
cor=color(random(0,255),random(0,255),random(0,255), random(0,100));}

}
