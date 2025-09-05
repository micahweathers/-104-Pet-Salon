// Define pets as cats with updated breeds

let pet1 = {
  name: "Appa",
  age: 2,
  gender: "Male",
  service: "Bath & Groom",
  breed: "Ginger Cat"
};

let pet2 = {
  name: "Zoro",
  age: 5,
  gender: "Male",
  service: "Nail Trim",
  breed: "Tuxedo Cat"
};

let pet3 = {
  name: "Bugsy",
  age: 3,
  gender: "Female",
  service: "Vaccination",
  breed: "Tuxedo Cat"
};

// Array of pets
let petsList = [pet1, pet2, pet3];

// Show total number of pets
function showPetCount() {
  document.getElementById("petCount").textContent = `Total Pets: ${petsList.length}`;
}

// Show average age
function showAverageAge() {
  let totalAge = 0;

  for (let i = 0; i < petsList.length; i++) {
    totalAge += petsList[i].age;
  }

  let average = (totalAge / petsList.length).toFixed(1); // Round to 1 decimal

  const avgElement = document.getElementById("averageAge");
  avgElement.textContent = `Average Age: ${average} years`;
}

// Show pet names in list
function showPetNames() {
  let petListUL = document.getElementById("petList");
  petListUL.innerHTML = ""; // Clear existing

  for (let i = 0; i < petsList.length; i++) {
    let pet = petsList[i];
    let li = document.createElement("li");
    li.textContent = pet.name;
    petListUL.appendChild(li);
  }
}

// Show info immediately on page load
document.addEventListener("DOMContentLoaded", function () {
  showPetCount();
  showPetNames();
  showAverageAge();
});
