//  document.addEventListener('keydown' , function(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// });

document.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; // If no audio element matches, exit the function

    audio.currentTime = 0; // Rewind to start if it's already playing
    audio.play(); // Play the audio
});
