//Telephone Number Validator
//Return true if the passed string looks like a valid US phone number.

//The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

function telephoneCheck(str) {
  return /^(1 |1)?((\d{3})|(\(\d{3}\)))(-| |)(\d{3})(-| |)(\d{4})$/.test(str)
}

telephoneCheck("5555555555");
