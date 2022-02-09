var dog=0;
var lion=0;
var cat=0;
var cow=0;
function startClassification()

{
navigator.mediaDevices.getUserMedia({audio:true});
classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u7joM08ok/', modelReady);
}
 
 function modelReady(){ classifier.classify( gotResults); }
function gotResults(error,results)
{
if (error) {
    console.error(error);
}
else {
    console.log(results);
    random_number_r=Math.floor(Math.random()* 255) + 1;
    random_number_g=Math.floor(Math.random()* 255) + 1;
    random_number_b=Math.floor(Math.random()* 255) + 1;


    document.getElementById("detected").innerHTML= "Dectected dog = "+dog+" Dectected Cat = "+cat+" Dectected Lion = "+lion+" Dectected Cow = "+cow+"";
}
}
