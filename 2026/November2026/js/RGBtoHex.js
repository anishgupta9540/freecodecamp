//https://www.freecodecamp.org/learn/daily-coding-challenge/09-02
//RGB to Hex

function rgbToHex(rgb) {
  const values = rgb.match(/\d+/g).map(Number);

  return "#" + values
    .map(value => value.toString(16).padStart(2, "0"))
    .join("");
}

rgbToHex("rgb(255, 255, 255)"); // #ffffff
rgbToHex("rgb(1, 11, 111)");    // #010b6f
rgbToHex("rgb(173, 216, 230)"); // #add8e6
rgbToHex("rgb(79, 123, 201)");  // #4f7bc9