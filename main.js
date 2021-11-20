img="";
status = "";
function preload() {
    img = loadImage('book.jpg')
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Book", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Table", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 50, 250, 300);
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult)
}
function gotResult(eror, results) {
    if (error) {
        console.log(error)
    }
    console.log(results);
}