const quotes = [
    "Believe in yourself.",
    "Small steps every day.",
    "Discipline beats motivation.",
    "Focus on progress, not perfection.",
    "You are stronger than you think.",
    "Consistency creates confidence."
];

// Select main root container :
const app = document.getElementById("app");

// Create elements dynamically :

const card = document.createElement("div");
card.className = "card";

const quoteText = document.createElement("p");
quoteText.textContent = "Click the button to see a quote!";

const button = document.createElement("button");
button.textContent = "Generate Quote";

// Append elements :

app.appendChild(card);
card.appendChild(quoteText);
card.appendChild(button);

// Generate random quote :

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `"${quotes[randomIndex]}"`; // It puts a random quote inside the <p> element.
}

// Interaction with "Generate Quote" button :
button.addEventListener("click", generateQuote);

// Extra DOM interaction (keyboard) :

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        generateQuote();
    }

});

