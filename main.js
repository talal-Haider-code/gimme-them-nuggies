
    diffrence=10;
    function setup() {
        video = createCapture(VIDEO);
        video.size(550, 550);

        canvas = createCanvas(550,400);
        canvas.position(560,225);

        poseNet=ml5.poseNet(video,modelLoaded);
        poseNet.on('pose', gotPoses);
    }

function draw() {
    background('red');

    textSize(diffrence);
    text('Talal',50,400);
    fill('#F90093');
    stroke('#F90093');
    square(fontX,fontY,diffrence);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);

leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.X;
diffrence = floor(leftWristX - rightWristX);


        }
}