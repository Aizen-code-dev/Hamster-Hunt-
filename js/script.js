const animal = document.getElementById('animal');
const pointsDisplay = document.getElementById('points');
const coinsDisplay = document.getElementById('coins');

let points = 0;
let coins = 0.00000000;

// Function to handle clicks on the animal
function handleAnimalClick() {
  if (animal.style.visibility === 'visible') {
    points++;
    pointsDisplay.textContent = points;

    // Update coins (adjust the multiplier as needed)
    coins += 0.00000001 * points;
    coinsDisplay.textContent = coins.toFixed(8);

    // Randomly determine if the animal should disappear
    const shouldDisappear = Math.random() < 0.5;
    console.log("shouldDisappear:", shouldDisappear);

    if (shouldDisappear) {
      animal.style.visibility = 'hidden';
      console.log("Animal hidden");
      setTimeout(showAnimal, 1000); // Show the animal again after 2 seconds
      console.log("Timeout set");
    }
  }
}

// Function to show the animal
function showAnimal() {
  animal.style.visibility = 'visible';
}

// Attach event listener to the animal
animal.addEventListener('click', handleAnimalClick);

// Initialize the game by showing the animal
showAnimal();

function change() {
  const button = document.querySelector('#name');
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}


function redeem(Message) {
  const alertElement = document.getElementById('alertMessage');
  alertElement.textContent = Message;
  alertElement.style.display = 'block';
  setTimeout(() => {
    alertElement.style.display = 'none';
  }, 1000);
}

const redeemButton = document.querySelector('.redeem-button');

redeemButton.addEventListener('click', () => {
  setTimeout(() => {
    redeem('Not Available Yet...');
  }, 100);
  // 100 milliseconds (0.1 second) delay

});


const audio = document.getElementById('backgroundMusic'); // Use the retrieved audio element

muteButton.addEventListener('click', () => {
  if (audio.muted) {
audio.muted = false;
muteButton.querySelector('i').classList.remove('bi-volume-mute');
muteButton.querySelector('i').classList.add('bi-volume-up');
} else {
audio.muted = true;
muteButton.querySelector('i').classList.remove('bi-volume-up');
muteButton.querySelector('i').classList.add('bi-volume-mute');
}
});

volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});