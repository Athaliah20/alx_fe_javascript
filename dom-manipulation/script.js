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
function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    if (newQuoteText && newQuoteCategory) {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };
        quotes.push(newQuote);
        console.log('Quotes array updated:', quotes);
        // Additional code would be needed here to update the DOM visually
        // e.g., create a new div element and append it to a quotes container
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';
    } else {
        alert('Please enter both a quote and a category.');
    }
}
const saveQuotes = () => { localStorage.setItem('quotes', JSON.stringify(quotes)); };
const loadQuotes = () => { const storedQuotes = localStorage.getItem('quotes'); if (storedQuotes) { quotes = JSON.parse(storedQuotes); displayQuotes(); } };
const saveLastViewed = (quote) => { sessionStorage.setItem('lastViewedQuote', JSON.stringify(quote)); };
const getLastViewed = () => { const lastViewed = sessionStorage.getItem('lastViewedQuote'); return lastViewed ? JSON.parse(lastViewed) : null; };
document.getElementById('export-btn').addEventListener('click', () => { const json = JSON.stringify(quotes, null, 2); const blob = new Blob([json], { type: 'application/json' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'quotes.json'; a.click(); URL.revokeObjectURL(url); });
document.getElementById('import-file').addEventListener('change', (event) => { const file = event.target.files[0]; if (!file) { return; } const reader = new FileReader(); reader.onload = (e) => { try { const importedQuotes = JSON.parse(e.target.result); quotes = importedQuotes; saveQuotes(); displayQuotes(); alert('Quotes imported successfully!'); } catch (error) { alert('Error importing quotes: Invalid JSON file'); } }; reader.readAsText(file); });
 function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }

