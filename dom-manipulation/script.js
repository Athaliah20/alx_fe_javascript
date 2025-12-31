// Array of quote objects
const quotes = [
{ text: 'The only way to do great work is to love what you do.', category: 'Inspiration' },
{ text: 'Innovation distinguishes between a leader and a follower.', category: 'Leadership' },
{ text: 'The future belongs to those who believe in the beauty of their dreams.', category: 'Inspiration' }
];
// Function to display a random quote
function showRandomQuote() {
const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];
const quoteDisplay = document.getElementById('quoteDisplay');
quoteDisplay.innerHTML = \`<p>"${randomQuote.text}"</p><p><em>Category: ${randomQuote.category}</em></p>\`;
}
// Function to create and add a quote form (placeholder implementation)
function createAddQuoteForm() {
console.log("Logic for dynamic quote addition form goes here.");
}
// Event listener for the 'Show New Quote' button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
// Display an initial quote when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
showRandomQuote();
createAddQuoteForm();
});
