const menuBtn = document.getElementById("menu-trigger");
const nav = document.getElementById("nav");
const optionVal = document.getElementById("value-output");

const userData = async function data() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    const company = data.users.map((user) => {
      return user.company.department;
    });
  } catch (error) {
    console.log(error.message);
  }
};
userData();

menuBtn.addEventListener("click", (e) => {
  nav.classList.toggle("open");
});
