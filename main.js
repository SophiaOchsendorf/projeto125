difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWrist + " rightWristX = " + rightWrist + " difference = " + difference);
    }
}

function draw() {
    background('#6C91C2');


document.getElementById("texto").innerHTML = "Tamanho da fonte será = " + difference +"px";
textSize(difference);
fill('#FFE787');
text('Sophia', 50, 400)
}

