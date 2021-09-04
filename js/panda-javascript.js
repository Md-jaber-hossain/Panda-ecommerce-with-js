console.log('I just added external js with my panda e-commerce site');

// h2 color change 
const h2Title = document.getElementsByClassName('h2-title');
for(const title of h2Title){
    title.style.color = 'lightblue';
}

// backpack background color set
const backpackBg = document.getElementById('backpackBg');
backpackBg.style.backgroundColor = 'tomato';

// card border radius 30px
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = '30px';
}

// button click handler 
document.getElementById('panda-btn').addEventListener('click', function(){
    console.log('Checking click handler for shoes first button');
})

// remove button when click on button 
/* 
const jsBtn = document.getElementsByClassName('js-btn');
for(const btn of jsBtn){

    btn.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    });
} 
*/

// remove card when click on button 
const jsBtn = document.getElementsByClassName('js-btn');
for(const btn of jsBtn){

    btn.addEventListener('click', function(){
        btn.parentNode.parentNode.style.display = 'none';
    });
}

// button disabled but when when written email in input field then enable
document.getElementById('input-field').addEventListener('keyup', function(event){
    const inputField = document.getElementById('input-field');
    console.log(inputField.value);
    const submitBtn = document.getElementById('submit-btn');
    if(event.target.value == 'email'){
        submitBtn.removeAttribute('disabled');
    }
    else{
        submitBtn.setAttribute('disabled', true);
    }
})

document.getElementById('input-field').addEventListener('change', function(event){
    const inputField = document.getElementById('input-field');
    console.log(inputField.value);
})


// mouseenter then change img.  only 1 img will be change

/* 
document.getElementById("mouse-enter").addEventListener("mouseenter", function() {
    document.getElementById("mouse-enter").src = "pic/bags/bag-1.png";
  });
document.getElementById("mouse-enter").addEventListener("mouseout", function() {
    document.getElementById("mouse-enter").src = "pic/shoes/shoe-1.png";
  }); 
*/


// mouseenter then change img. All img will be change
const images = document.getElementsByTagName('img');

for(const image of images){
    const oldimg = image.src;

    image.addEventListener("mouseenter", function() {
        image.src = "pic/bags/bag-1.png";
      });
    image.addEventListener("mouseout", function() {
        image.src = oldimg;
      });
}

// double click to change background color
document.getElementById('subscribe').addEventListener('dblclick', function(){
    document.getElementById('subscribe').style.backgroundColor = 'lightblue';
})