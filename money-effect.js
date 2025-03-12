document.addEventListener("DOMContentLoaded", function () {
    const roastCards = document.querySelectorAll(".roast-card");

    if (!roastCards.length) {
        console.error("Error: No .roast-card elements found!");
        return;
    }

    // List of random roasts
    const roasts = [
        "You bring everyone so much joy... when you leave the room. 😂",
        "You have something on your chin… no, the third one. 🤡",
        "I'd agree with you, but then we’d both be wrong. 💀",
        "Your WiFi signal is stronger than your personality. 📶",
        "You're like a JavaScript function: undefined and useless. 💻",
        "Your budget is like a five-year-old in a candy store. 🍭",
        "Your jokes are like expired milk: sour and hard to swallow. 🥛"
    ];

    roastCards.forEach(card => {
        card.addEventListener("click", function () {
            const roast = document.createElement("div");
            roast.classList.add("roast");
            roast.innerText = roasts[Math.floor(Math.random() * roasts.length)];

            document.body.appendChild(roast);

            // Get positions
            const cardRect = card.getBoundingClientRect();
            roast.style.position = "absolute";
            roast.style.zIndex = "1000";
            roast.style.padding = "10px 15px";
            roast.style.background = "#FF6347"; // Tomato Red 🔥
            roast.style.color = "#FFF";
            roast.style.borderRadius = "10px";
            roast.style.fontSize = "1.2rem";
            roast.style.fontWeight = "bold";
            roast.style.textAlign = "center";
            roast.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
            roast.style.maxWidth = "250px";

            // Wait for the element to be added to the DOM before measuring its size
            document.body.appendChild(roast);
            const roastRect = roast.getBoundingClientRect();

            // Adjust so it's perfectly centered over the roast-card
            roast.style.left = `${cardRect.left + window.scrollX + (cardRect.width / 2) - (roastRect.width / 2)}px`;
            roast.style.top = `${cardRect.top + window.scrollY - roastRect.height - 10}px`;

            // Make the roast fade out & remove it
            setTimeout(() => {
                roast.style.opacity = "0";
                setTimeout(() => roast.remove(), 1000);
            }, 2000);
        });
    });
});
