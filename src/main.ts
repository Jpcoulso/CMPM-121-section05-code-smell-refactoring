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

  // Get the increment button element from the document
  const bI = document.getElementById(a);
  // Get the decrement button element from the document
  const bD = document.getElementById("dec");
  // Get the reset button element from the document
  const bR = document.getElementById("reset");
  // Get the counter span element from the document
  const ctr = document.getElementById(b);

  // Check if any element is missing, then exit the function
  if (!bI || !bD || !bR || !ctr) return;

  const buttonList: HTMLElement[] = [bI, bD, bR];

  for (const button of buttonList) {
    addListener(button, ctr);
  }
}
function addListener(button: HTMLElement, ctr: HTMLElement) {
  button.addEventListener("click", () => {
    if (button === document.getElementById(a)) {
      c++;
    } else if (button === document.getElementById("dec")) {
      c--;
    } else if (button === document.getElementById("reset")) {
      c = 0;
    }
    ctr.innerHTML = `${c}`;
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
