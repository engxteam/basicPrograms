//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function upperCase(str) {
  var array1 = str.split(" ");
  var newArray1 = [];
  for (var x = 0; x < array1.length; x++) {
    newArray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newArray1.join(" ");
}

console.log(upperCase("the quick brown fox"));
