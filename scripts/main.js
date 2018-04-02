var myImage = document.querySelector('img');

myImage.onclick = function()
{
    var mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/Chrysanthemum.jpg'){
        myImage.setAttribute('src', 'images/Desert.jpg');
    } else{
        myImage.setAttribute('src', 'images/Chrysanthemum.jpg');
    }
}

//Personalized welcome message

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
    var myName = prompt('Pleae enter your name');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'How are you ' +myName +'?';
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'How are you ' +myName +'?'; 
}

myButton.onclick = function(){
    setUserName();
}