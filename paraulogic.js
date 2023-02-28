const getPlayerInput = (message) => {
  const playerInput = prompt(message);

  if (!playerInput) {
    return getPlayerInput(message);
  }

  return playerInput;
};

const getPlayerName = () => {
  return getPlayerInput("Welcome to CODERSlogic! What's your name?");
};

const getPlayerWord = (requiredLetter) => {
  const playerWord = prompt("What is your word?");

  if (playerWord.length < 3 || !playerWord) {
    alert("You must enter a word with at least 3 characters");
    return getPlayerWord(requiredLetter);
  }

  if (!playerWord.includes(requiredLetter)) {
    alert(`You must enter a word with the letter ${requiredLetter}`);
    return getPlayerWord(requiredLetter);
  }

  return playerWord;
};

const checkWordIsCorrect = (word, wordList, guessedWords) => {
  if (guessedWords.includes(word)) {
    alert("You already used this word!");
    return false;
  }

  if (!wordList.includes(word)) {
    alert("Oohh, You didn't guess the word!");
    return false;
  }

  alert(`Congratulations, ${word} is correct!`);
  return true;
};

const checkPlayAgain = (guessedWords, gameWords) => {
  return guessedWords.length !== gameWords.length && confirm("Try again?");
};

const calculatePoints = (word) => {
  switch (word.length) {
    case 3:
      return 1;
    case 4:
      return 2;
    default:
      return word.length;
  }
};

const getUserPoints = (guessedWords) => {
  return guessedWords.reduce(
    (accumulatedPoints, currentWord) =>
      accumulatedPoints + calculatePoints(currentWord),
    0
  );
};

const playCodersLogic = () => {
  const gameWords = ["doc"];
  const guessedWords = [];
  const gameLetters = ["c", "o", "d", "e", "r", "s"];
  const requiredLetter = gameLetters[2];

  const playerName = getPlayerName();

  alert(
    `Hi ${playerName}! The letters for this game are ${gameLetters.join(
      ", "
    )}. The required letter is ${requiredLetter}. Let's start!`
  );

  do {
    const newWord = getPlayerWord(requiredLetter);
    const isCorrect = checkWordIsCorrect(newWord, gameWords, guessedWords);

    if (isCorrect) {
      guessedWords.push(newWord);
    }
  } while (checkPlayAgain(guessedWords, gameWords));

  alert(
    `Good job! You have guessed ${
      guessedWords.length
    } words! These are your points: ${getUserPoints(guessedWords)}`
  );

  alert("Bye bye ✌️");
};

playCodersLogic();
