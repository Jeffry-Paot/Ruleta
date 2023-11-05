const roulette = document.querySelector("#roulette");
const spinButton = document.querySelector("#spin");
const resetButton = document.querySelector("#reset");

const maxSpins = 10;
const minSpins = 1;

const maxDegrees = 360;
const minDegrees = 1;

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

spinButton.addEventListener("click", () => {

    const spins = getRandomNumber(minSpins, maxSpins);
    const degrees = getRandomNumber(minDegrees, maxDegrees);

    const fullSpins = (spins - 1) * 360;
    const spin = fullSpins + degrees;

    const animationTime = spins;
    
    roulette.style.transform = `rotate(${spin}deg)`;
    roulette.style.transitionDuration = `${animationTime}s`;

    spinButton.style.display = "none";
    resetButton.style.display = "inline-block";

});

resetButton.addEventListener("click", () => {

    roulette.style.transform = "rotate(0deg)";
    roulette.style.transitionDuration = "2s";
    spinButton.style.display = "inline-block";
    resetButton.style.display = "none";


});

spinButton.addEventListener("click", () => {
    const spins = getRandomNumber(minSpins, maxSpins);
    const degrees = getRandomNumber(minDegrees, maxDegrees);

    const fullSpins = (spins - 1) * 360;
    const spin = fullSpins + degrees;

    const animationTime = spins;

    roulette.style.transform = `rotate(${spin}deg)`;
    roulette.style.transitionDuration = `${animationTime}s`;

    spinButton.style.display = "none";
    resetButton.style.display = "inline-block";

    roulette.addEventListener("transitionend", () => {
        const resultElement = document.querySelector("#result");
        const resultTextElement = document.querySelector("#result-text");
        const currentSection = Math.floor((360 - (spin % 360)) / 30); // Calcula la sección actual.
        const sectionContainers = document.querySelectorAll(".roulette-section-container");
        resultTextElement.textContent = sectionContainers[currentSection].textContent;
        resultElement.style.display = "block";

        const closeButton = document.querySelector("#close-button");
        closeButton.addEventListener("click", () => {
        resultElement.style.display = "none";
        });
    });
    
});
