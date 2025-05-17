// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const amountInput = document.getElementById("amount");
  const expensesInput = document.getElementById("expenses");
  const dateInput = document.getElementById("Savings");
  const typeSelect = document.getElementById("choose");
  const addButton = document.querySelector(".btn button");
  const showcase = document.querySelector("#showcase tbody");


  addButton.addEventListener("click", function () {
    const amount = amountInput.value;
    const use = expensesInput.value;
    const date = dateInput.value;
    const type = typeSelect.value;

    if (!amount || !use || !date) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new table row
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${use}</td>
      <td>${amount} Ksh</td>
      <td>${date}</td>
      <td>${type.charAt(0).toUpperCase() + type.slice(1)}</td>
    `;

    showcase.appendChild(row);

    // Clear inputs
    amountInput.value = "";
    expensesInput.value = "";
    dateInput.value = "";
    typeSelect.selectedIndex = 0;
  });
});

    

