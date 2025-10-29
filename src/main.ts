// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let c = 0;

// These constants are for button IDs and heading text
const a: string = "increment", b: string = "counter", h: string = "CMPM 121 Project";

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

  for(let button of buttonList){
    addListener(button, ctr);
  }
/*
  // Add click event to the increment button
  bI.addEventListener("click", () => {
    // Increase the counter by 1
    c++;
    // Update the counter display
    ctr.innerHTML = `${c}`;
    // Update the document title
    document.title = "Clicked " + c;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  });

  // Add click event to the decrement button
  bD.addEventListener("click", () => {
    // Decrease the counter by 1
    c--;
    // Update the counter display
    ctr.innerHTML = `${c}`;
    // Update the document title
    document.title = "Clicked " + c;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  });

  // Add click event to the reset button
  bR.addEventListener("click", () => {
    // Reset the counter to 0
    c = 0;
    // Update the counter display
    ctr.innerHTML = `${c}`;
    // Update the document title
    document.title = "Clicked " + c;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  });
}
*/
function addListener(button: HTMLElement, ctr: HTMLElement) {
  button.addEventListener("click", () => {
    if(button === document.getElementById(a)){
      c++;
    }else if(button === document.getElementById("dec")){
      c--;
    }else if(button === document.getElementById("reset")){
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
