status="";
function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
    canvas.position(380,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image (video, 0, 0, 500, 500);
}
function start(){
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status: detecting objects";
object_name=document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log('Model is loaded');
    status=true;
}