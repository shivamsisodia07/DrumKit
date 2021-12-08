document.querySelector("button").addEventListener("click",function(){
    alert("rotate the screen for better experience");
})

function keysound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    console.log(audio);
    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
}
function clicksound(e) {

    const audio = document.querySelector(`audio[data-key="${e.path[1].dataset.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.path[1].dataset.key}"]`);

    if (!audio) return;
    console.log(audio);
    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
}

function removetransition(e) {
    if (e.propertyName !== 'transform') return;

    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removetransition));

document.addEventListener("keydown", keysound);//for keypress
//for click event
document.addEventListener("click", clicksound);