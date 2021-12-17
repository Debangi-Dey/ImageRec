// https://teachablemachine.withgoogle.com/models/WDKe5E30B/

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WDKe5E30B/model.json", modelLoaded)
}
function modelLoaded(){
    console.log("modelLoaded")
}
function draw() {
    image(video, 0, 0, 300, 300)
    classifier.classify(video, gotResult)
}
function gotResult(error, result){
 if (error){
     console.error(error)
 }
 else {
     console.log(result)
     document.getElementById("result_obj").innerHTML=result[0].label;
     document.getElementById("result_acc").innerHTML=result[0].confidence.toFixed(3);
 }
}