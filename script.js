const formEl = document.querySelector(".obratnuj-zvonok");

const KEY_STORAGE = "key_form";
const selectedForm = {};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  formData.forEach((value, name) => console.log(value, name));
});

formEl.addEventListener("change", (e) => {
  console.log(e.target.value);
  console.log(e.target.name);
  selectedForm[e.target.name] = e.target.value;
  console.log(selectedForm);
  localStorage.setItem(KEY_STORAGE, JSON.stringify(selectedForm));
});
