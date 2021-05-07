// Get all the keys
let keys = document.querySelectorAll(".key");
// console.log(keys)


//Play the notes
function playNote(event) {
    // To see on the console which events
    // console.log(event)

    // To see on the console which keycodes numbers when I pressed the pc keyboard buttons.
    // console.log(event.keyCode)

    // To see on the console which data-key(HTML) i'm clicking
    // console.log(event.target.dataset.key)


    // keyCode reference
    let audioKeyCode = getKeyCode(event);


    // Typed or pressed key
    let key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    // console.log(key)

    // If key exists 
    const cantFoundAnyKey = !key

    if (cantFoundAnyKey) {
        return;
    }

    //function to visual represent with a blur when the piano key is pressed
    addPlayingClass(key)

    //play audio function call
    playAudio(audioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function getKeyCode(event) {
    let keyCode;

    let isKeyboard = event.type === "keydown" //true or false (boolean)
    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function playAudio(audioKeyCode) {
    // Play the respective sound of each key pressed
    let audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    console.log(audio)
    //audio.currentTime it's to make the audio start from "0", from the beginning.
    audio.currentTime = 0;
    // self explained :)
    audio.play();
}


// function to remove the blur after the piano key is pressed (70ms)
function removePlayingClass(event) {
    event.target.classList.remove("playing")

}


//Click events with mouse
// window.addEventListener("click", playNote)
keys.forEach(function (key) {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass)
})

//Keyboard events
window.addEventListener("keydown", playNote)