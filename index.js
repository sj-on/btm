window.addEventListener('keydown', function(el){
    let audio = document.querySelector(`audio[data-key="${el.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${el.keyCode}"]`);

    if(!audio)
        return;
    audio.currentTime = 0;
    audio.play();
});