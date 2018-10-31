// H Let’s go back to our little website we coded in the HTML / CSS introduction. See picture below for inspiration:

// Once the user hovers over the 4 icons, they should increase in size by 40%, once the users mouse leaves 
//the icons their size should decrease to normal again

// Make the Learn More button clickable. Once the user clicks on it:
// Remove the black overlay so that we can see the flowers clearly.
// Change the title from ‘beautiful flowers’ to ‘welcome to my flower shop’, give the text a background and change the color to blue.
// Change the text of the button from ‘learn more’ to ‘buy flowers’, change the background color to red.
//

//style property

// var element = document.getElementById('navbar');

// element.style.width = '1000px';
// element.style.backgroundColor = 'blue';
// element.style.display = 'flex';

// change an element HTML : innerHTML property



var button = document.getElementById('learn-more');
var backgroundWord = document.getElementsByClassName('display-4')
var banner = document.getElementsByClassName('banner')
    button.onclick = function() {
        button.style.backgroundColor = 'red';
        button.textContent = 'buy flowers';
        backgroundWord[0].textContent = 'welcome to my flower shop';
        backgroundWord[0].style.backgroundColor = 'grey';
        backgroundWord[0].style.color = 'blue';
        banner[0].style.backgroundColor = 'transparent';

    
}


//var icons = document.getElementsByClassName('icon');


// for (var i = 0; i < icons.length; i++) {
//     icons[i].addEventListener ('mouseover', function(y){y.target.style.width = '10rem';})
//     icons[i].addEventListener ('mouseleave', function(y){y.target.style.width = '8rem';})
//     };

    //refactor this code into yours and see if it works - change the document.get.....
let icons = document.getElementsByClassName('icon');

for(let icon of icons){
   icon.addEventListener('mouseenter',function(){
       this.style.height = "156px";
       this.style.width  = "156px";
   });
   icon.addEventListener('mouseleave',function(){
       this.style.height = "112px";
       this.style.width  = "112px";
   });
}