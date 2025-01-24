//Create array of planets
const planets = [
  { name: "Mercury", inner: true, diameter: 3031.9, color: "#696969" },
  { name: "Venus", inner: true, diameter: 7520.8, color: "#b89165" },
  { name: "Earth", inner: true, diameter: 7917.5, color: "#5a5b86" },
  { name: "Mars", inner: true, diameter: 4212.3, color: "#df8c4e" },
  { name: "Jupiter", inner: false, diameter: 86881, color: "#f6a049" },
  { name: "Saturn", inner: false, diameter: 72367, color: "#dcd3a1" },
  { name: "Uranus", inner: false, diameter: 31518, color: "#b4d9df" },
  { name: "Neptune", inner: false, diameter: 30599, color: "#456eff" },
];

//Display planets in console
console.log("Planets in our solar system:");
planets.forEach((planets) => {
  console.log(`Name: ${planets.name}, Diameter (km): ${planets.diameter}`);
});

//Function to calculate average Diameter of planets
function averageDiameter(planets) {
  const totalDiameter = planets.reduce(
    (sum, planet) => sum + planet.diameter,
    0
  );
  return totalDiameter / planets.length;
}

//Display average diameter in console
console.log(`Average Diameter of planets: ${averageDiameter(planets)} km`);

//list all planets in the dom in a list and display the current planet information as well as the avarage diameter
const planetList = document.getElementById("planetList");
planets.forEach((planet) => {
  const li = document.createElement("li");
  li.textContent = planet.name;
  planetList.appendChild(li);
});

//display average diameter in the dom
let avgDiemeter = averageDiameter(planets);
const averageDiameterElement = document.getElementById("averageDiameter");
averageDiameterElement.textContent = `Average Diameter of planets: ${avgDiemeter} km`;

//variable to store current planet index
let currentPlanetIndex = 0;

//Event Listener fo previous and next buttons
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const planetName = document.getElementById("planetName");
const planetType = document.getElementById("planetType");
const planetDiameter = document.getElementById("planetDiameter");
const planetIndex = document.getElementById("planetIndex");
const planetVisual = document.getElementById("planetVisual");

prevButton.addEventListener("click", () => {
  currentPlanetIndex =
    (currentPlanetIndex - 1 + planets.length) % planets.length;
  displayPlanet();
});

nextButton.addEventListener("click", () => {
  currentPlanetIndex = (currentPlanetIndex + 1) % planets.length;
  displayPlanet();
});

//Function to display current planets information
function displayPlanet() {
  const currentPlanet = planets[currentPlanetIndex];
  planetName.textContent = currentPlanet.name;
  planetType.textContent = currentPlanet.inner
    ? "Inner Planet"
    : "Outer Planet";
  planetDiameter.textContent = `Diameter: ${currentPlanet.diameter} km`;
  planetIndex.textContent = `Index ${currentPlanetIndex + 1}`;
  planetVisual.style.backgroundColor = currentPlanet.color;
  planetVisual.style.width = `${currentPlanet.diameter / 100}px`; // Scale down for visual representation
  planetVisual.style.height = `${currentPlanet.diameter / 100}px`; // Scale down for visual representation
  prevButton.disabled = currentPlanetIndex === 0; // Disable button if at first planet
  nextButton.disabled = currentPlanetIndex === planets.length - 1; // Disable button if at last planet
}

//initially display the first planet
displayPlanet();
