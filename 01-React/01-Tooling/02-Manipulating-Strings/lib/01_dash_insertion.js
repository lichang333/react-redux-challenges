function isConsonant(letter) {
  return !letter.match(/[aeiouy\s]/i);
}

function insertDash(word) {
  // TODO: implement the method and return word with dashes
  if (!word || word.length === 0) {
    return "";
  }
  return word.split("").map((letter, i, letters) => {
    if (i > 0 && isConsonant(letters[i - 1]) && isConsonant(letter)) {
      return `-${letter}`;
    }
    return letter;
  }).join("");
}

module.exports = insertDash;
