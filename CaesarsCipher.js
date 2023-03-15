function handleClick() {
  var input = document.getElementById("input-text").value;
  var shiftRaw = document.getElementById("shift-value").value;
  var shiftValue = parseInt(shiftRaw);
  var toChiper = document.getElementById("answer");
  toChiper.innerHTML = cipherRot13(input, shiftValue);
}
function cipherRot13(str, num) {
  var shiftNum = num;
  str = str.toUpperCase();
  //CHAR TEST
  if (validator(str)) {
    return str.replace(/[A-Z]|[А-Я]/g, rot13);
  } else return "You use unsopported language or symbol";

  //char test func
  function validator(validationStr) {
    const everPosibleChar = /[A-Z]|[А-Я]|\d|[\,\.\+\—\(\)\!\/\[\]\{\}\\\ \|\"\'\-\;\:\@]/g;
    if (validationStr === "") return true;
    if (validationStr.match(everPosibleChar) === null) {
      return false;
    } else if (
      validationStr.match(everPosibleChar).length == validationStr.length
    ) {
      return true;
    } else return false;
  }

  //char shifting RU, EN
  function rot13(correspondance) {
    const charCode = correspondance.charCodeAt();
    if (charCode >= 1040 && charCode <= 1071) {
      // А = 1040, Я = 1071
      return String.fromCharCode(
        charCode + shiftNum <= 1071
          ? charCode + shiftNum
          : ((charCode + shiftNum) % 1071) + 1039
      );
    } else {
      //A = 65, Z = 90
      return String.fromCharCode(
        charCode + shiftNum <= 90
          ? charCode + shiftNum
          : ((charCode + shiftNum) % 90) + 64
      );
    }
  }
}
