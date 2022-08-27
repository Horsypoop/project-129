song1 = "";
song2 = ""
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload()
{
	song1 = loadSound("music.mp3");
  song2 = loadSound("music2.mp3")
}


function setup() {
    canvas =  createCanvas(600, 500);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('PoseNet Is Initialized');
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score1;
    console.log("ScoreLeftWrist = " +scoreLeftWrist);
    scoreRightWrist = results[0].pose.keypoints[9].score2;
    console.log("ScoreRightWrist = " +scoreRightWrist);

	  leftWristX = results[0].pose.leftWrist.x;
	  leftWristY = results[0].pose.leftWrist.y;
	  console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

	  rightWristX = results[0].pose.rightWrist.x;
	  rightWristY = results[0].pose.rightWrist.y;
	  console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	}
  }

function play1()
{
	song1.play();

}
function play12()
{
	song2.play();

}

function draw() {
   image(video, 0, 0, 600, 500);

   fill("#efdecd");
   stroke("#ff9966");
if (scoreLeftWrist >0.2){

   circle(leftWristX,leftWristY,20);
   InNumberLeftWrist = Number(leftWristY);
   remove_decimals = floor(InNumberLeftWrist);
   
   var leftWristY_divide_1000 = remove_decimals/1000;   
   volume = leftWristY_divide_1000 *2;
   document.getElementById("volume").innerHTML = "Peter Pan Will Play" +volume;
   song1.play1()
}
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}
