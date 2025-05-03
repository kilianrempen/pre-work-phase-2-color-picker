window.onload = function() {
    initColorPicker();
};

function initColorPicker() {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPickers = document.getElementsByClassName("color-picker");
    setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(colorBox, rgb, pickerElements) {
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerLen; i++) {
        pickerElements[i].addEventListener("change", () => {
            console.log("Red: " + rgb.red.value + " | Green: " + rgb.green.value + " | Blue: " + rgb.blue.value);
            // dont need console.log once you're done debugging but I'm keeping it in as a note.
            let red = rgb.red.value;
            let green = rgb.green.value;
            let blue= rgb.blue.value;
            setBoxBGColor(colorBox, red, green, blue);
            setDisplayValues(red, green, blue);
        })
    }
/*
    rgb.red.addEventListener("change", () => {
        console.log("red value: ", rgb.red.value);
        setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
    })
    rgb.green.addEventListener("change", () => {
        console.log("green value: ", rgb.green.value);
        setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
    })
    rgb.blue.addEventListener("change", () => {
        console.log("blue value: ", rgb.blue.value);
        setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
    })
 */
}

function setBoxBGColor(colorBox, red, green, blue) {
    let rgbVal = [red, green, blue].join(",");
    colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
}

function setDisplayValues (red, green, blue) {
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal");

    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;
}