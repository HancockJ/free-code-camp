//Roman Numeral Converter
//Convert the given number into a roman numeral.

//All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {

  let romanArr = [[1000, "M"], [900, "CM"], [500, "D"], [400,"CD"], [100,"C"], [90,"XC"], [50,"L"], [40,"XL"], [10,"X"], [9,"IX"], [5,"V"], [4,"IV"], [1,"I"]];

  let remaining = num;
  let roman = "";

  while(remaining > 0){
    for(let i = 0; i < romanArr.length; i++){
      if(remaining - romanArr[i][0] >= 0){
        roman += romanArr[i][1];
        remaining -= romanArr[i][0];
        break;
      }
    }
  }

 return roman
}

convertToRoman(36);
