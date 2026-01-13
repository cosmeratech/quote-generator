const quotes = [
    { text: "Believe in yourself.", author: "Unknown" },
    { text: "Small steps every day.", author: "Japanese Proverb" },
    { text: "Discipline beats motivation.", author: "Jocko Willink" },
    { text: "Focus on progress, not perfection.", author: "Bill Phillips" },
    { text: "You are stronger than you think.", author: "A.A. Milne" },
    { text: "Consistency creates confidence.", author: "Unknown" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "You must take your opponent into a deep dark forest where 2+2=5, and the path leading out is only wide enough for one.", author: "Mikhail Tal" },
    { text: "The blunders are all there on the board, waiting to be made.", author: "Savielly Tartakower" },
    { text: "Chess is life in miniature. Chess is a struggle, chess is battles.", author: "Garry Kasparov" },
    { text: "Play the opening like a book, the middlegame like a magician, and the endgame like a machine.", author: "Rudolf Spielmann" },
    { text: "I don't believe in psychology. I believe in good moves.", author: "Bobby Fischer" },
    { text: "My brain is the key that sets me free.", author: "Harry Houdini" },
    { text: "Magic is wandering in the unknown.", author: "Ricky Jay" },
    { text: "The magician takes the ordinary something and makes it do something extraordinary.", author: "The Prestige" },
    { text: "People want to be fooled.", author: "Harry Houdini" },
    { text: "Real magic is not about gaining power over others: it is about gaining power over yourself.", author: "Unknown" },
    { text: "I don't believe in empirical science. I only believe in a priori truth.", author: "Kurt Gödel" },
    { text: "Pure mathematics is, in its way, the poetry of logical ideas.", author: "Albert Einstein" },
    { text: "God does not play dice with the universe.", author: "Albert Einstein" },
    { text: "Mathematics is the language with which God has written the universe.", author: "Galileo Galilei" },
    { text: "The moving power of mathematical invention is not reasoning but imagination.", author: "Augustus De Morgan" },
    { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "I think, therefore I am.", author: "René Descartes" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" }
];

const app = document.getElementById("app");

// Create Card Container
const card = document.createElement("div");
card.className = "glass p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 text-center max-w-sm mx-auto transition-all duration-300";

// Create Quote Text Element
const quoteText = document.createElement("p");
quoteText.className = "text-2xl md:text-3xl font-serif text-white mb-4 leading-tight min-h-[5rem] flex items-center justify-center italic";
quoteText.textContent = "Click below to find inspiration.";

// Create Author Element
const authorText = document.createElement("p");
authorText.className = "text-neutral-400 text-sm font-sans uppercase tracking-widest mb-8 opacity-0 transition-opacity duration-300";

// Create Button
const button = document.createElement("button");
button.className = "group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white rounded-full shadow-lg hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 transform hover:scale-105 active:scale-95";
button.innerHTML = `
    <span>Get Inspired</span>
    <svg class="w-4 h-4 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
`;

// Append Elements
card.appendChild(quoteText);
card.appendChild(authorText);
card.appendChild(button);
app.appendChild(card);

// Generate Quote Function
function generateQuote() {
    // 1. Fade OUT
    quoteText.classList.remove("animate-fade-in");
    authorText.classList.remove("animate-fade-in");

    quoteText.style.opacity = "0";
    authorText.style.opacity = "0";

    setTimeout(() => {
        // 2. Update Content
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];

        quoteText.textContent = `"${quote.text}"`;
        authorText.textContent = `— ${quote.author}`;

        // 3. Fade IN
        quoteText.style.opacity = "1";
        authorText.style.opacity = "1";

        // Re-trigger animation
        void quoteText.offsetWidth; // trigger reflow
        quoteText.classList.add("animate-fade-in");
        authorText.classList.add("animate-fade-in");
    }, 200); // short delay for fade out effect
}

// Event Listeners
button.addEventListener("click", generateQuote);

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        generateQuote();
    }
});

// Initial Load Animation
window.addEventListener('DOMContentLoaded', () => {
    card.classList.add('animate-fade-in');
});
