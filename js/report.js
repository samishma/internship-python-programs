function runReportScript() {
  const src = document.getElementById('reportScript').value;

  // Avoid executing user-provided JavaScript
  const result = "Custom scripts are not allowed.";

  document.getElementById('reportResult').innerText = result;
}


function evalReport() {
  const expr = document.getElementById('reportEval').value;

  // Allow only safe mathematical expressions
  if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
    document.getElementById('reportEvalResult').innerText =
      "Invalid expression";
    return;
  }

  const result = Function(`"use strict"; return (${expr})`)();

  document.getElementById('reportEvalResult').innerText = result;
}