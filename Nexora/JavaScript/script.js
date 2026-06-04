let menuBtn = document.getElementById('menu-btn');
let navMenu = document.querySelector('.nav-menu');
let userName = document.getElementById('username')
let email = document.getElementById('email')
let message = document.getElementById('message')
let submitBtn = document.getElementById('submitBtn')


// Ֆունկցիան սահմանում ենք այնպես, որ այն "փոխի" active դասի վիճակը
function toggleMenu() {
    navMenu.classList.toggle('active'); 
}

// Կապում ենք կոճակի հետ
menuBtn.addEventListener('click', toggleMenu);

submitBtn.addEventListener('click',() =>{
    if (!userName.value.trim() || userName.value.trim() === 'none' ||
    !email.value.trim() || email.value.trim() === 'none' ||
    !message.value.trim() || message.value.trim() === 'none') {
    
    alert('Please fill in all the fields!!!');
    }
    
    else{
      alert('Dear,' + username.value + ', your email has been sent, we will respond to you soon.')
      console.log('name :' +userName.value +
         'email' + email.value +
         'Message' + message.value)
    }
})