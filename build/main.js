const menuBtn = document.getElementById("menu-trigger");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".link");
const section = document.getElementById("employees");
const select = document.getElementById("departments");

const data = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    // Create textContent for the option
    const company = data.users.map((user) => {
      return user.company.department;
    });
    const userDep = [...new Set(company)];
    for (let i = 0; i < userDep.length; i++) {
      const option = document.createElement("option");
      option.textContent = userDep[i];
      select.append(option);
    }

    // Create and append employees
    function renderEmployees(user) {
      section.textContent = "";

      for (let i = 0; i < user.length; i++) {
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
        img.src = user[i].image;
        secDiv.append(img);

        //
        const thirdDiv = document.createElement("div");
        thirdDiv.classList.add("first");
        secDiv.appendChild(thirdDiv);

        //
        const name = document.createElement("p");
        name.textContent = user[i].firstName + " " + user[i].lastName;
        thirdDiv.append(name);

        //
        const role = document.createElement("p");
        role.textContent = user[i].company.department;
        thirdDiv.append(role);

        //
        const contactSec = document.createElement("div");
        contactSec.classList.add("details");
        secDiv.append(contactSec);

        //
        const email = document.createElement("p");
        email.textContent = user[i].email;
        contactSec.append(email);

        //
        const phone = document.createElement("p");
        phone.textContent = user[i].phone;
        contactSec.append(phone);
      }
    }
    renderEmployees(data.users);

    // Search filter
    function searchFilter() {
      const search = document.getElementById("depart-search");

      search.addEventListener("input", () => {
        const value = search.value.toLowerCase();
        const filter = data.users.filter((user) => {
          return (
            user.firstName.toLowerCase().includes(value) ||
            user.lastName.toLowerCase().includes(value)
          );
        });
        renderEmployees(filter);
      });
    }
    searchFilter();

    const searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", () => {
      searchFilter();
    });
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
