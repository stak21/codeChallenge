var uniqueMorseRepresentations = function (words) {
  const morseHash = {};
  const dict = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
  let count = words.forEach((item) => {
    let morse = '';
    for (let i = 0; i < item.length; i += 1) {
      const char = item.charCodeAt(i) - 97;
      morse = morse.concat(dict[char]);
    }
    morseHash[morse] = true;
  });
  return Object.keys(morseHash).length;
};

const words = ['gin','zen','babe','chicken', 'gin'];
uniqueMorseRepresentations(words);