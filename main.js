const sounds = ['applause' ,'boo' ,'gasp' ,'tada' ,'victory' ,'wrong']

sounds.forEach(song => {
    const btn = document.createElement('button');
    btn.classList.add('btn')
    btn.innerText = song;
    const container = document.querySelector('.container');
    container.appendChild(btn)

    btn.addEventListener('click' , () => {
        audioStop()
        const audio = document.getElementById(song)
        audio.play()
    })
})
function audioStop(){
    sounds.forEach(song =>{
        const audio = document.getElementById(song)
        audio.pause()
        audio.currentTime = 0;
    })
}
