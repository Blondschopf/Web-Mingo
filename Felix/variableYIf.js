let var1 = 5;

if (var1 === 5) {
  console.log("Var1 es mayor que 5");
} else {
  console.log("Var1 es menor que 5");
}
*/

// paste text
let input = document.getElementById("text-input");
let output = document.getElementById("text-output");

function pasteText() {
  output.innerHTML = input.value;
}
