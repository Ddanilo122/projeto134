function setup(){
    canvas=createCanvas(600,300)
 video=createCapture(VIDEO)
 video.size(600,300)

 background('goldenrod')

 leopard= ml5.poseNet(video,modelLoaded)
 leopard.on('pose',gotPose)
}
function modelLoaded(){
    console.log('leopard esta pronto para identificar pose')
}
function gotPose(){
   
}
