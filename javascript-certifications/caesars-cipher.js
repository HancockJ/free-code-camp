//Caesars Cipher
//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

//Write a function which takes a ROT13 encoded string as input and returns a decoded string.

//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  function shiftBack(num, shiftSize){
    for(let i = 0; i < shiftSize; i++){
      if(num == 65){
        num = 90;
      } else{
        num--;
      }
    }
    return String.fromCharCode(num);
  }

  let codeArr = str.split("");
  let decoded = "";
  for(let i = 0; i < codeArr.length; i++){
    if(codeArr[i].charCodeAt(0) >= 65 && codeArr[i].charCodeAt(0) <= 90){
      decoded += shiftBack(codeArr[i].charCodeAt(0), 13);
    } else{
      decoded += codeArr[i];
    }
  }
  return decoded;
}

console.log(rot13("SERR PBQR PNZC"));