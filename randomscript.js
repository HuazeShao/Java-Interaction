var heading;
var executeButton;
var outputLines;
var inputElement;

var randompoem = ["Words, words were truly alive on the tongue, in the head. Warm, beating, frantic, winged; music and blood. But then I was young.",


"No man is an island, entire of itself, every man is a piece of the continent, a part of the main.",


"You do not have to be good. You do not have to walk on your knees. For a hundred miles through the desert, repenting. You only have to let the soft animal of your body, love what it loves.",


"For I have known them all already, known them all: Have known the evenings, mornings, afternoons; I have measured out my life with coffee spoons."
];

// addEventListener requires two parameters: the event that is occurring and a callback that includes the event
// heading.addEventListener("mouseover", demonstrationFunction);
// document.addEventListener('mousemove', mouseMovedFunc);

document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputLines = document.getElementById("outputText");
  inputElement = document.getElementById("Input");

  executeButton.addEventListener("click", function(){
    generateLine();
  });
});

function generateLine(){
  var currentInputText = inputElement.value;
  var randomLineIndex = Math.floor(Math.random()*randompoem.length);
  outputLines.innerText = currentInputText + " " + ", here are poem lines for you: " + randompoem[randomLineIndex];
  newstyleOutput();

}

function newstyleOutput() {
  var randomR = Math.random() * 255;
  var randomG = Math.random() * 255;
  var randomB = Math.random() * 255;

  var randomR2 = Math.random() * 200;
  var randomG2 = Math.random() * 200;
  var randomB2 = Math.random() * 200;

  var outputColorString = "rgb(" + randomR + "," + randomG + "," + randomB + ")";
  var outputseconColorString = "rgb(" + randomR2 + "," + randomG2 + "," + randomB2 + ")";
  outputLines.style.color = outputColorString;
  outputLines.style.backgroundColor = outputseconColorString;

  document.getElementById("outputText").style.fontSize = Math.floor((Math.random() * 30 +2)+"px";
  console.log(randomSize)
}
