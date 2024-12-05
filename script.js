class FamilyMember {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const familyMembers = [];

function submitFamilyMember() {
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('gender');

  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;

  const familyMember = new FamilyMember(name, age, gender);
  familyMembers.push(familyMember);

  reloadFamilyMembers();
}

function reloadFamilyMembers() {
  const familyList = document.getElementById('familyMembers').tBodies[0];
  familyList.innerHTML = '';

  familyMembers.forEach((familyMember, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <strong>${familyMember.name}</strong>
      </td>
      <td>${familyMember.age}</td>
      <td>${familyMember.gender}</td>
      <td class="button-container">
        <div>
          <button class="primary small" onclick="addAge(${index})">Add Age</button>
        </div>
        <div>
          <button class="secondary small" onclick="changeName(${index})">Change Name</button>
        </div>
      </td>
    `;
    familyList.appendChild(row);
  });
}

function addAge(index) {
  const currentAge = familyMembers[index].age;
  const newAge = currentAge + 1;
  familyMembers[index].age = newAge;

  reloadFamilyMembers();
}

function changeName(index) {
  const newName = prompt('Enter new name: ');
  familyMembers[index].name = newName;

  reloadFamilyMembers();
}
