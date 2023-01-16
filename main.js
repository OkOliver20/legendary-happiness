noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 435);
    canvas.position(560,150);
}
function modelLoaded() {
    console.log('PoseNet Is Inititalized!');
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
    }
}
function draw() {
    background('#d3d3d3')
    fill('00FF00');
    textSize(difference);
    text('Oliver Kent',noseX,noseY);

    
}