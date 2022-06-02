function preload(){
}
function setup(){
    canvas= createCanvas(550,350);
    canvas.position(200,350);
    video= createCapture(VIDEO);
    video.hide();

    tint_color="";

}
function draw(){
    image(video,0,0,550,350);
    tint(tint_color);
}

function take_snapshot(){
    save('image_p5.png');
}
function filter_tint(){
    tint_color= document.getElementById("color_name").value;
}