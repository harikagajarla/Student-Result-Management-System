const resultForm = document.getElementById("resultForm");
const resultTable = document.getElementById("resultTable");
const tbody = resultTable.querySelector("tbody");

resultForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const rollInput = document.getElementById("roll");
    const mathsInput = document.getElementById("maths");
    const physicsInput = document.getElementById("physics");
    const chemistryInput = document.getElementById("chemistry");

    const name = nameInput.value;
    const roll = rollInput.value;
    const maths = mathsInput.value;
    const physics = physicsInput.value;
    const chemistry = chemistryInput.value;

    const total =
        parseInt(maths) + parseInt(physics) + parseInt(chemistry);
    const percentage = ((total / 300) * 100).toFixed(2);

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${maths}</td>
        <td>${physics}</td>
        <td>${chemistry}</td>
        <td>${total}</td>
        <td>${percentage}%</td>
        <td>
          <button class="edit-button" onclick="editResult(this)">Edit</button>
        </td>
      `;

    tbody.appendChild(newRow);

    nameInput.value = "";
    rollInput.value = "";
    mathsInput.value = "";
    physicsInput.value = "";
    chemistryInput.value = "";
});

function editResult(button) {
    const row = button.parentNode.parentNode;
    const cells = row.querySelectorAll("td");

    const name = cells[0].textContent;
    const roll = cells[1].textContent;
    const maths = cells[2].textContent;
    const physics = cells[3].textContent;
    const chemistry = cells[4].textContent;

    const nameInput = document.getElementById("name");
    const rollInput = document.getElementById("roll");
    const mathsInput = document.getElementById("maths");
    const physicsInput = document.getElementById("physics");
    const chemistryInput = document.getElementById("chemistry");

    nameInput.value = name;
    rollInput.value = roll;
    mathsInput.value = maths;
    physicsInput.value = physics;
    chemistryInput.value = chemistry;

    row.remove();
}