const sounds = [
    "birds", 
    "evil-laugh", 
    "explosion", 
    "scratch", 
    "shotgun",
];

sounds.forEach((sound)=>{
    const btn = document.createElement("button");
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', ()=>{
        const current_sound = document.getElementsByClassName(sound+"-sound")
        
        stopSongs()
        current_sound[0].play()
    });


    document.getElementById('sound-bar').appendChild(btn);
});

function stopSongs(){
    sounds.forEach((sound) => {
        const song = document.getElementsByClassName(sound+"-sound");

        song[0].pause()
        song[0].currentTime = 0;
    })
}

document.querySelector('.stop').addEventListener('click', () => {
    stopSongs();
})