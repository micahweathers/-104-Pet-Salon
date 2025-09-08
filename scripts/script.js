// -------------------
// Salon Object Literal
// -------------------

const salon = {
  name: "The Fashion Pet",
  phone: "555-1234",
  address: {
    street: "123 Paws Lane",
    city: "Petville",
    zip: "98765"
  },
};

// Show salon info on the homepage
function displaySalonInfo() {
  const salonInfoDiv = document.getElementById("salonInfo");

  if (salonInfoDiv) {
    salonInfoDiv.innerHTML = `
      <h2>${salon.name}</h2>
      <p><strong>Phone:</strong> ${salon.phone}</p>
      <p><strong>Address:</strong> ${salon.address.street}, ${salon.address.city}, ${salon.address.zip}</p>
    `;
  }
}

// -------------------
// Pet Constructor Function
// -------------------

function Pet(name, age, gender, breed, service, type) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.type = type;
}

// -------------------
// Initial Static Pets
// -------------------

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

// -------------------
// Array of Pets
// -------------------

let petsList = [pet1, pet2, pet3];

// -------------------
// UI Update Functions
// -------------------

// Show total number of pets
function showPetCount() {
  const countEl = document.getElementById("petCount");
  if (countEl) {
    countEl.textContent = `Total Pets: ${petsList.length}`;
  }
}

// Show average age of all pets
function showAverageAge() {
  if (petsList.length === 0) return;

  let totalAge = 0;
  for (let i = 0; i < petsList.length; i++) {
    totalAge += petsList[i].age;
  }

  const average = (totalAge / petsList.length).toFixed(1);
  const avgEl = document.getElementById("averageAge");
  if (avgEl) {
    avgEl.textContent = `Average Age: ${average} years`;
  }
}

// Show list of pet names
function showPetNames() {
  const listEl = document.getElementById("petList");
  if (!listEl) return;

  listEl.innerHTML = ""; // Clear previous list

  petsList.forEach((pet) => {
    const li = document.createElement("li");
    li.textContent = pet.name;
    listEl.appendChild(li);
  });
}

// -------------------
// Form Submission Logic
// -------------------

document.addEventListener("DOMContentLoaded", function () {
  // Initial display
  displaySalonInfo();
  showPetCount();
  showAverageAge();
  showPetNames();

  const form = document.getElementById("petForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get values from form
      const name = document.getElementById("petName").value;
      const age = parseInt(document.getElementById("petAge").value);
      const gender = document.getElementById("petGender").value;
      const breed = document.getElementById("petBreed").value;
      const service = document.getElementById("petService").value;
      const type = document.getElementById("petType").value;

      // Create pet using constructor
      const newPet = new Pet(name, age, gender, breed, service, type);

      // Add to array
      petsList.push(newPet);

      // Update UI
      showPetCount();
      showAverageAge();
      showPetNames();

      // Clear form
      form.reset();
    });
  }
});
