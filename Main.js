
    dog=0;
    cat=0;
    lion=0;
    cow=0;
    
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hWvCkXFxX/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){

    if(error){
        console.error(error);
    }
else{
    console.log(results);

    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML='I can hear- '+results[0].label;

    document.getElementById("result_label").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
    document.getElementById("frequency").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

    img = document.getElementById("ear");

    if(results[0].label=="Mooing"){
        img.src='Cow.gif';
        cow=cow+1;
        document.getElementById("frequency").innerHTML=cow;
    }
    else if(results[0].label=="Roaring"){
        img.src='Lion.gif';
        lion=lion+1;
        document.getElementById("frequency").innerHTML=lion;
    }
    else if(results[0].label=="Barking"){
        img.src='Dog.gif';   
        dog=dog+1;
        document.getElementById("frequency").innerHTML=dog;
    }
    else if(results[0].label=="Meowing"){
        img.src='Cat.gif'; 
        cat=cat+1;
        document.getElementById("frequency").innerHTML=cat;
    }
    else{
        img.src='image1.jpeg'; 
    }

}



}

