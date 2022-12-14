song1 = "";
song2 = "";
song3 = "";
song4 = "";
song5 = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload() 
{
    song1 = loadSound("doraemone.mp3");
    song2 = loadSound("Harry-Potter-Theme.mp3");
    song3 = loadSound("Home-Free-Sea-Shanty-Medley.mp3");
    song4 = loadSound("Axel F Mp3 By and Crazy Frog.mp3")
    song5 = loadSound("Imagine Dragons - Believer  (Pendona.com).mp3")
}

function setup() 
{
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log('posenet is inetialized');
}

function draw() 
{
    image(video, 0, 0, 600, 550);

    fill("#FF0000");
    stroke("#FF0000")



    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX, rightWristY, 20);

        if (rightWristY >0 && rightWristY <= 100)
        {
            document.getElementById("speed").innerHTML = "speed = 0.5x";
            song.rate(0.5);
        }

        else if (rightWristY >100 && rightWristY <= 200)
        {
            document.getElementById("speed").innerHTML = "speed = 1x";
            song1.rate(1);
            song2.rate(1);
            song3.rate(1);
            song4.rate(1);
            song5.rate(1);
        }
        
        else if (rightWristY >200 && rightWristY <= 300)
        {
            document.getElementById("speed").innerHTML = "speed = 1.5x";
            song1.rate(1.5);
            song2.rate(1.5);
            song3.rate(1.5);
            song4.rate(1.5);
            song5.rate(1.5);
        }

        else if (rightWristY >300 && rightWristY <= 400)
        {
            document.getElementById("speed").innerHTML = "speed = 2x";
            song1.rate(2);
            song2.rate(2);
            song3.rate(2);
            song4.rate(2);
            song5.rate(2);
        }

        else if (rightWristY >400 && rightWristY <= 500)
        {
            document.getElementById("speed").innerHTML = "speed = 2.5x";
            song1.rate(2.5);
            song2.rate(2.5);
            song3.rate(2.5);
            song4.rate(2.5);
            song5.rate(2.5);
        }
    }
}
    
function stopall() 
{
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
}

function playDoraemon() 
{
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

function playHarryPotter() 
{
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}

function playSeaShanty() 
{
    song3.play();
    song3.setVolume(1);
    song3.rate(1);
}

function playCrazyFrog() 
{
    song4.play();
    song4.setVolume(1);
    song4.rate(1);
}

function playBeliever() 
{
    song5.play();
    song5.setVolume(1);
    song5.rate(1);
}

function gotPoses(results) 
{
    if(results.length > 0) 
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreRightWrist = " + scoreRightWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = " + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = " + rightWristY);
    }
}
