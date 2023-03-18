function handleClick() {
  var input = document.getElementById("input-text").value;
  var shiftRaw = document.getElementById("shift-value").value;
  var shiftValue = parseInt(shiftRaw);
  var toChiper = document.getElementById("answer");
  toChiper.innerHTML = cipherRot13(input, shiftValue);
}
function cipherRot13(str, num) {
  var shiftNum = num;
  let newStr = str.toUpperCase();
  //CHAR TEST
  if (validator(newStr)) {
    return newStr.replace(/[A-Z]|[А-Я]|[Ё]/g, rot13);
  } else return "You use unsopported language or symbol";

  //char test func
  function validator(validationStr) {
    const everPosibleChar = /[A-Z]|[А-Я]|\d|[Ё\,\.\+\—\(\)\!\/\[\]\{\}\\\ \?\|\"\'\-\;\:\@]/g;
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
    // is it rus?
    if ((charCode >= 1040 && charCode <= 1071) || charCode === 1025) {
      //for russian latters need new script, because some latters have missed in queue

      let alphabetRU = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
      return alphabetRU[
        alphabetRU.indexOf(correspondance) + shiftNum <= 32
          ? alphabetRU.indexOf(correspondance) + shiftNum
          : (alphabetRU.indexOf(correspondance) + shiftNum) % 33
      ];
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
