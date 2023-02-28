# CODERSLogic

1. Introducir el juego

Vamos a crear un juego de Paraulogic con solo JS: https://www.vilaweb.cat/paraulogic/

**NORMAS**:

- Formar palabras con las letras del juego. Las letras se pueden repetir en las palabras.
- El juego tiene una letra requerida del medio del array.
- Las palabras tiene que tener un mínimo de 3 letras.

**PUNTUACIÓN**:

- Palabras de 3 letras, 1 punto.
- Palabras de 4 letras, 2 puntos.
- Palabras a partir de 5 letras, tantos punto como letras tenga la palabra

2. Empezar a pensar en los datos que necesita la aplicacion:

- Lista palabras
- Lista de letras
- Letra required
- Puntuación
- Letra usuario
- Palabras usadas
- Nombre usuario

3. Mostrar

   1. Array de palabras
   2. Letras del juego
   3. Letra obligatoria

4. Pedir la palabra del usuario

```js
// diseñar - naming, recibe, devuelve
// gestion de errores

const getPlayerWord = (requiredLetter) => {
  const playerWord = prompt("What is your word?");

  if (playerWord.length < 3 || !playerWord) {
    alert("You must enter a word with at least 3 characters");
    return getPlayerWord();
  }

  if (!playerWord.includes(requiredLetter)) {
    alert(`You must enter a word with the letter ${requiredLetter}`);
    return getPlayerWord();
  }

  return playerWord;
};
```

5. Checkear la palabra del usuario

```js
// diseñar - naming, recibe, devuelve
// casos

const checkWordIsCorrect = (word, wordList, guessedWords) => {
  if (guessedWords.includes(word)) {
    alert("You already used this word!");
    return false;
  }

  if (!wordList.includes(word)) {
    alert("Wrong!");
    return false;
  }

  alert(`Congratulations, ${word} is correct!`);
  return true;
};
```

6. Checkear puntos usuario:

// Punto de cada palabra, Puntuación acumulada de todas las plabras.
//Preguntar cuántos casos van a haber

```js
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
```

7. Directora orquesta:

```js
/* 
1- diseñar
2- bienvenida, despedida
3- guardamos/movemos los datos a esta funcion
4- el orden del juego
  funciona una vez, y despide
5- implementar do while
*/
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
```
