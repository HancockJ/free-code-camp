//Palindrome Checker
//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

//We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

//We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function cleanPalindrome(str){
  let temp = str.toLowerCase().split("")
  let pal = []
  for(let i = 0; i < temp.length; i++){
    if (/^[a-zA-Z0-9]+$/.test(temp[i])){
      pal.push(temp[i])
    }
  }
  return pal
}

function palindrome(str) {
  let palindrome = cleanPalindrome(str);
  let [a,b] = [0, palindrome.length - 1];
  while(a <= b){
    if(palindrome[a] != palindrome[b])
      return false;
    a++;
    b--;
  }
  return true;
}

palindrome("racecar");
