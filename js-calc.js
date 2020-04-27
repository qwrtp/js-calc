function calc() {

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

  // Display result
  document.querySelector("#result").innerHTML = result;

}
