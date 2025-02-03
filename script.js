let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let question = document.querySelector("h1");

let noResponses = [
    "Deveritas deveritas? 😢",
    "Va a ser especial! 🌹",
    "Reconcidéralo po favo! 💔",
    "Prometo que será bonito! 🎉",
    "Solo di que si! 🥺"
];

noButton.addEventListener("click", function() {
    noButton.style.fontSize = (parseInt(window.getComputedStyle(noButton).fontSize) - 2) + "px"; 
    yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 6) + "px";
    noButton.style.padding = (parseInt(window.getComputedStyle(noButton).padding) - 2) + "px " + (parseInt(window.getComputedStyle(noButton).padding) - 4) + "px";
    yesButton.style.padding = (parseInt(window.getComputedStyle(yesButton).padding) + 6) + "px " + (parseInt(window.getComputedStyle(yesButton).padding) + 8) + "px";
    question.innerText = noResponses.shift();
    if (noResponses.length === 0) {
        noResponses = [
            "Deveritas deveritas? 😢",
            "Va a ser especial! 🌹",
            "Reconcidéralo po favo! 💔",
            "Prometo que será bonito! 🎉",
            "Solo di que si! 🥺"
        ];
    }
});

yesButton.addEventListener("click", function() {
    question.innerText = "Yay! No puedo esperar más! 💖";
    noButton.style.display = "none";
    yesButton.style.display = "none";
});
