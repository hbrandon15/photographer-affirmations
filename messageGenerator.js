const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Art takes time. - Leonardo Da Vinci",
  "Creativity is intelligence having fun. - Albert Einstein",
  "You can do anything you set your mind to. - Benjamin Franklin",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Creativity is contagious, pass it on. - Albert Einstein",
  "Every artist was first an amateur. - Ralph Waldo Emerson",
  "Art is the most intense mode of individualism that the world has known. - Oscar Wilde",
  "Art is the lie that enables us to realize the truth. - Pablo Picasso",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateQuote() {
  const randomIndex = getRandomInt(quotes.length);
  return quotes[randomIndex];
}

function getFirstWord(quote) {
  const firstWord = quote.split(" ")[0];
  return firstWord;
}

function getRandomWords(quote, numberOfWords) {
  const allWords = [];

  // Combine words from all quotes
  quotes.forEach((quote) => {
    const cleanedQuote = quote.replace(/[.-]/g, "");
    const words = cleanedQuote.split(" ");
    words.forEach((word) => {
		allWords.push(word.trim().toLowerCase());
  });
  });

  const randomWords = [];

  for (let i = 0; i < numberOfWords; i++) {
    const randomIndex = getRandomInt(allWords.length);
    randomWords.push(allWords[randomIndex]);
  }

  return randomWords.join(" ");
}

const randomQuote1 = generateQuote();
const randomQuote2 = generateQuote();
const randomQuote3 = generateQuote();
const firstWord = getFirstWord(randomQuote1);

const shuffledQuote =
  firstWord + ' ' + getRandomWords([randomQuote1, randomQuote2, randomQuote3], 4) + ".";

console.log(randomQuote1);
console.log(randomQuote2);
console.log(randomQuote3);
console.log(`The first word of the quote: ${firstWord}`);
console.log(`New random quote: ${shuffledQuote}`);
