let weight = document.getElementById('weight');
let height = document.getElementById('height');
let weightinputKg = document.getElementById('weightinputKg');
let weightinputPound = document.getElementById('weightinputPound');
let heightinputmt = document.getElementById('heightinputmt');
let heightinputcm = document.getElementById('heightinputcm');
let heightinputft = document.getElementById('heightinputft');
let heightinputin = document.getElementById('heightinputin');
let result = document.querySelector('.result');
let form = document.querySelector('.form');

weight.addEventListener('change', () => {
    if(weight.value=='kg'){
        weightinputKg.style.display = 'block';
        weightinputPound.style.display = 'none';
    }
    else if(weight.value=='Pound'){
        weightinputKg.style.display = 'none';
        weightinputPound.style.display = 'block';
    }
})

height.addEventListener('change', () => {
    if(height.value=='meter'){
        heightinputmt.style.display = 'block';
        heightinputcm.style.display = 'none';
        heightinputft.style.display = 'none';
        heightinputin.style.display = 'none';
    }
    else if(height.value=='Centimeter'){
        heightinputmt.style.display = 'none';
        heightinputcm.style.display = 'block';
        heightinputft.style.display = 'none';
        heightinputin.style.display = 'none';
    }
    else if(height.value=='Feet'){
        heightinputmt.style.display = 'none';
        heightinputcm.style.display = 'none';
        heightinputft.style.display = 'block';
        heightinputin.style.display = 'block';
    }
})

function calculate(){
    let heightinmt=0;
    let weightinkg=0;
    if(weight.value=='Kg'){
        weightinkg=weightinputKg.value;
    }
    else if(weight.value=='Pound'){
        weightinkg=weightinputPound.value*0.453592;
    }

    if(height.value=='Meter'){
        heightinmt=heightinputmt.value;
    }
    else if(height.value=='Centimeter'){
        heightinmt=heightinputcm.value*0.01;
    }
    else if(height.value=='Feet'){
        heightinmt=heightinputft.value*0.3048 + heightinputin.value*0.0254;
    }

    let bmi = weightinkg/ (heightinmt*heightinmt);
    

    let status = '';
    if(bmi<18.5){
        status = 'You Need to gain weight!!';
    }
    else if(bmi>=18.5 && bmi<=24.9){
        status = 'You have normal weight!!';
    }
    else if(bmi>=24.9 && bmi<=29.9){
        status = 'You are overweight!!';
    }
    else{
        status = 'You are obese!!';
    }
    result.style.display = 'flex';
    form.style.display = 'none';
    result.querySelector('h2').innerHTML=`Your bmi is: ${bmi.toFixed(2)}`;
    result.querySelector('.status').innerHTML = status
}







