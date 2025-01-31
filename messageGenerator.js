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

function generateMessage() {
  const randomIndex = getRandomInt(quotes.length);
  return quotes[randomIndex];
}

function getFirstWord(message) {
  const firstWord = message.split(" ")[0];
  return firstWord;
}

function getRandomWords(message, numberOfWords) {
  const words = message.split(" ");
  const randomWords = [];

  for (let i = 0; i < numberOfWords; i++) {
    const randomIndex = getRandomInt(words.length);
    randomWords.push(words[randomIndex].toLowerCase());
  }

  return randomWords.join(" ");
}

const randomQuote = generateMessage();
const firstWord = getFirstWord(randomQuote);
const shuffledQuote = firstWord + ' ' + getRandomWords(generateMessage(), 4) + '.';

console.log(randomQuote);
console.log(`The first word of the quote: ${firstWord}`);
console.log(`New random quote: ${shuffledQuote}`);


