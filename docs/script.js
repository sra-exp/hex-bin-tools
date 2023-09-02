function fetchQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quote = document.getElementById('quote');
            quote.textContent = `"${data.content}" - ${data.author}`;
        })
        .catch(error => console.error('There was an error fetching the quote!', error));
}
