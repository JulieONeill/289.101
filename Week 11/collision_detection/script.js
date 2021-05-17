/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red while the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

var puck = document.getElementById('puck');
var gap = document.getElementById('gap');
var puck_x = 210;
var puck_y = 210;
var speed = 50;

function logcoordinates() {
  console.log('x=' + puck_x + 'y=' + puck_y);  
}

function checkCollision() {
   if(puck_x >= 250 && puck_x <= 350){
       if (puck_y >= 150 && puck_y <=250){
          console.log('collision!'); 
       {document.getElementById('gap').style.backgroundColor = 'red';
   }}}
    else { 
        document.getElementById('gap').style.backgroundColor = 'white';
         }
    
     if(puck_y >= 150 && puck_y <= 250){
       if (puck_x >= 250 && puck_x <=350){
          console.log('collision!'); 
       {document.getElementById('gap').style.backgroundColor = 'red';
   }}}
    else { 
        document.getElementById('gap').style.backgroundColor = 'white';
         }
    
    console.log('check');
}

function checkBorder (){
    if (puck_x <=0){
        puck.style.left = 599 + 'px';
        puck_x = 599;
    }
         
    if (puck_x >=600){
        puck.style.left = 1 + 'px';
        puck_x = 1;
            }
    
    if (puck_y <=0){
        puck.style.top = 399 + 'px';
        puck_y = 399;
            }
    
    if (puck_y >=400){
        puck.style.top = 1 + 'px';
        puck_y = 1;
            }
}

 
puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';

document.getElementById('left').addEventListener('click', () => {
    puck_x -= speed; 
    puck.style.left = puck_x + 'px';
   logcoordinates();
    checkCollision();
    checkBorder ();
});

document.getElementById('right').addEventListener('click', () => {
    puck_x += speed; 
    puck.style.left = puck_x + 'px';
     logcoordinates();
     checkCollision();
    checkBorder ();
});

document.getElementById('up').addEventListener('click', () => {
    puck_y -= speed; 
    puck.style.top = puck_y + 'px';
     logcoordinates();
     checkCollision();
    checkBorder ();
});


document.getElementById('down').addEventListener('click', () => {
    puck_y += speed; 
    puck.style.top = puck_y + 'px';
     logcoordinates();
     checkCollision();
    checkBorder ();
});

