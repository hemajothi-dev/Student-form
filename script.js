// Row setting
function saveDetails() {
  event.preventDefault();
  
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;
  
    if (!name || !age || !gender || !course || !email) {
      alert("Please fill-out all the fields.");
      return;
    }
  
    const table = document.getElementById("saveItems").getElementsByTagName("tbody")[0];
  
    const newRow = table.insertRow();
    newRow.innerHTML = `
      <td data-label="NAME">${name}</td>
      <td data-label="AGE">${age}</td>
      <td data-label="GENDER">${gender}</td>
      <td data-label="COURSE">${course}</td>
      <td data-label="EMAIL">${email}</td>
      <td data-label="ACTION">
        <div class="actionbutton">
          <button class="edit" onclick="editDetails(this)">Edit</button>
          <button class="delete" onclick="deleteDetails(this)">Delete</button>
        </div>
      </td>
    `;
  
    document.getElementById("studentinfo").reset();
  }
  
  // Delete setting
  function deleteDetails(button) {
    const row = button.closest("tr");
    row.remove();
  }
  
  // Edit setting
  function editDetails(button) {
    const row = button.closest("tr");
    const cells = row.getElementsByTagName("td");
  
    document.getElementById("name").value = cells[0].textContent;
    document.getElementById("age").value = cells[1].textContent;
    const gender = cells[2].textContent.toLowerCase();
    document.querySelector(`input[name='gender'][value='${gender}']`).checked = true;
    document.getElementById("course").value = cells[3].textContent;
    document.getElementById("email").value = cells[4].textContent;
  
    row.remove();
  }