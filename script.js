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
    let key = document.querySelector(`[data-key="${audioKeyCode}"]`)
    console.log(key)

    // If key exists 


    // Play the respective sound of each key pressed
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


//Click events with mouse
// window.addEventListener("click", playNote)
keys.forEach( function(key){
    key.addEventListener("click", playNote);
})

//Keyboard events
window.addEventListener("keydown", playNote)
