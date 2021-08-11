const quotesList = [{
	quote:"The purpose of our lives is to be happy.",
	author:"Dalai Lama"
},{
	quote:" Life is what happens when you're busy making other plans.",
	author:"John Lennon"
},{
	quote:"Get busy living or get busy dying.",
	author:"Stephen King"
},{
	quote:"You only live once, but if you do it right, once is enough.",
	author:"Mae West"
},{
	quote:"Design is not just what it looks like and feels like. Design is how it works.",
	author:"Steve Jobs"
},{
	quote:"I want to put a ding in the universe.",
	author:"Steve Jobs"
},{
	quote:"Innovation distinguishes between a leader and a follower.",
	author:"Steve Jobs"
},{
	quote:"Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
	author:"Steve Jobs"
},{
	quote:"It's better to be a pirate than to join the Navy.",
	author:"Steve Jobs"
} ]

const quote = document.querySelector("#quote div:first-child")
const author = document.querySelector ("#quote div:last-child")

const todaysQuotes = quotesList[Math.floor(Math.random() * quotesList.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;