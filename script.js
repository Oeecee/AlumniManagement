const alumniData = [];

function registerAlumni(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const batch = document.getElementById("batch").value;

  const alumni = { name, email, batch };
  alumniData.push(alumni);

  updateAlumniList();
  resetForm();
}

function updateAlumniList() {
  const alumniTableBody = document.getElementById("alumniTableBody");
  alumniTableBody.innerHTML = "";

  alumniData.forEach(alumni => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${alumni.name}</td>
      <td>${alumni.email}</td>
      <td>${alumni.batch}</td>
    `;
    alumniTableBody.appendChild(row);
  });
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("batch").value = "";
}

document.querySelector("form").addEventListener("submit", registerAlumni);
