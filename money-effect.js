document.addEventListener("DOMContentLoaded", function () {
    const roastCards = document.querySelectorAll(".roast-card");

    if (!roastCards.length) {
        console.error("Error: No .roast-card elements found!");
        return;
    }

    // List of random roasts (funny, savage, nerdy, and random)
    const roasts = [
        // 🔥 Savage Roasts
        "You bring everyone so much joy... when you leave the room. 😂",
        "You have something on your chin… no, the third one. 🤡",
        "I'd agree with you, but then we’d both be wrong. 💀",
        "Your secrets are safe with me. I never even listen when you tell them. 🤷‍♂️",
        "You're like a software update... always annoying and never on time. 📲",

        // 🤓 Nerdy Roasts
        "Your WiFi signal is stronger than your personality. 📶",
        "You're proof that even the trash takes itself out sometimes. 🚮",
        "You're like a JavaScript function: undefined and useless. 💻",
        "Your social skills have more bugs than Windows 95. 🐛",
        "Your personality is like an Excel sheet—dull, repetitive, and hard to read. 📊",

        // 💸 Financial Roasts
        "You're so broke, your Monopoly money has more value. 🎲",
        "Your wallet is like a meme: everyone laughs at it. 😭",
        "Your credit card company just sent you a sympathy card. 🤦‍♂️",
        "You budget like a five-year-old in a candy store. 🍭",
        "Even your piggy bank is on a hunger strike. 🐷",

        // 🤣 Random Life Roasts
        "You have something on your face... oh wait, never mind. 😬",
        "Your cooking is why takeout exists. 🍕",
        "You're like a cloud: when you disappear, it's a beautiful day. ☀️",
        "You're like a penny—two-faced and not worth much. 🪙",
        "Your jokes are like expired milk: sour and hard to swallow. 🥛"
    ];

    roastCards.forEach(card => {
        card.addEventListener("click", function (event) {
            const roast = document.createElement("div");
            roast.classList.add("roast");
            roast.innerText = roasts[Math.floor(Math.random() * roasts.length)];

            document.body.appendChild(roast);

            // Get roast-card position and size
            const cardRect = card.getBoundingClientRect();
            const roastRect = roast.getBoundingClientRect();

            // Position the roast **centered** above the roast-card
            roast.style.position = "absolute";
            roast.style.left = `${cardRect.left + window.scrollX + cardRect.width / 2 - roastRect.width / 2}px`;
            roast.style.top = `${cardRect.top + window.scrollY - roastRect.height - 10}px`; // Slightly above the card
            roast.style.padding = "10px 15px";
            roast.style.background = "#FF6347"; // Tomato Red 🔥
            roast.style.color = "#FFF";
            roast.style.borderRadius = "10px";
            roast.style.fontSize = "1.2rem";
            roast.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
            roast.style.transition = "opacity 1s ease-in-out";
            roast.style.opacity = "1";
            roast.style.fontWeight = "bold";
            roast.style.textAlign = "center";
            roast.style.maxWidth = "250px";
            roast.style.zIndex = "1000";

            // Make the roast fade out & remove it
            setTimeout(() => {
                roast.style.opacity = "0";
                setTimeout(() => roast.remove(), 1000);
            }, 2000);
        });
    });
});
