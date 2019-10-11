function check_Palindrome(str) {
  str = str.replace(' ', '');
  console.log(str);
  return str === str.split('').reverse().join('');
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');
