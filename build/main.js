const menuBtn = document.getElementById("menu-trigger");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".link");
const section = document.getElementById("employees");

const data = async () => {
  try {
    const userDep = [];
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    // console.log(data.users);

    // Create textContent for the option
    const company = data.users.map((user) => {
      userDep.push(user.company.department);
    });

    // Create and append employees
    function renderEmployees() {
      for (let i = 0; i < data.users.length; i++) {
        const div = document.createElement("div");
        div.classList.add("holder");
        section.append(div);

        //
        const secDiv = document.createElement("div");
        secDiv.classList.add("contents");
        div.append(secDiv);

        //
        const img = document.createElement("img");
        img.classList.add("img");
        img.src = data.users[i].image;
        secDiv.append(img);

        //
        const thirdDiv = document.createElement("div");
        thirdDiv.classList.add("first");
        secDiv.appendChild(thirdDiv);

        //
        const name = document.createElement("p");
        name.textContent =
          data.users[i].firstName + " " + data.users[i].lastName;
        thirdDiv.append(name);

        //
        const role = document.createElement("p");
        role.textContent = data.users[i].company.department;
        thirdDiv.append(role);

        //
        const contactSec = document.createElement("div");
        contactSec.classList.add("details");
        secDiv.append(contactSec);

        //
        const email = document.createElement("p");
        email.textContent = data.users[i].email;
        contactSec.append(email);

        //
        const phone = document.createElement("p");
        phone.textContent = data.users[i].phone;
        contactSec.append(phone);
      }
    }

    renderEmployees();
  } catch (error) {
    console.log(error.message);
  }
};

data();

menuBtn.addEventListener("click", (e) => {
  nav.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
  });
});
