// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let c = 0;

// These constants are for button IDs and heading text
const a: string = "increment",
  b: string = "counter",
  h: string = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${h}</h1>
    <p>Counter: <span id="${b}">0</span></p>
    <button id="${a}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  const incrementButton = document.getElementById(a);
  const decrementButton = document.getElementById("dec");
  const resetButton = document.getElementById("reset");
  const counter = document.getElementById(b);

  // Check if any element is missing, then exit the function
  if (!incrementButton || !decrementButton || !resetButton || !counter) return;

  const buttonList: HTMLElement[] = [
    incrementButton,
    decrementButton,
    resetButton,
  ];

  for (const button of buttonList) {
    addListener(button, counter);
  }
}
function addListener(button: HTMLElement, counter: HTMLElement) {
  button.addEventListener("click", () => {
    if (button === document.getElementById(a)) {
      c++;
    } else if (button === document.getElementById("dec")) {
      c--;
    } else if (button === document.getElementById("reset")) {
      c = 0;
    }
    counter.innerHTML = `${c}`;
    document.title = "Clicked " + c;
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
