document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#calculate");
  button.addEventListener("submit", function () {
    calc(event);
  });
});

function calc(event) {
  event.preventDefault();
  a = parseInt(document.querySelector("#value1").value);
  b = parseInt(document.querySelector("#value2").value);
  var result;

  // Calculate result
  op = document.querySelector("#operator").value;
  if (op == "add") {
    result = a + b;
  }
  if (op == "sub") {
    result = a - b;
  }
  if (op == "mul") {
    result = a * b;
  }
  if (op == "div") {
    result = a / b;
  }
  if (op == "divint") {
    result = parseInt(a / b);
  }
  if (op == "mod") {
    result = a % b;
  }

  // Display result
  document.querySelector("#result").value = result;
  console.log("electron recycling by Bernard Cribbins");

}
