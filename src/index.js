const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  let result = "";
  let arr = expr.match(/.{0,10}/g);
  arr.pop();
  for (let i = 0; i < arr.length; i++) {
    let letter = "";
    for (let j = 0; j < 10; j = j + 2) {
      if (arr[i][j] == "*") {
        letter += " ";
        break;
      }
      if (arr[i][j] == "0" && arr[i][j + 1] == "0") {
        continue;
      }
      if (arr[i][j] == "1" && arr[i][j + 1] == "0") {
        letter += ".";
      } else {
        letter += "-";
      }
    }
    if (letter == " ") {
      result += letter;
    } else {
      result += MORSE_TABLE[letter];
    }
  }
  return result;
}

module.exports = {
  decode,
};
