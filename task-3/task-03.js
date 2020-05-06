

const findLongestWord = function (string) {
  const arr = string.split(' ');
  let longWord = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i].length > longWord.length) {
      longWord = arr[i];
    }
  }
  const result = `Самое длинное слово - "${string}" - это ${longWord}`;
  return result;
};



/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
