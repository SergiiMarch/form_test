const formEl = document.querySelector(".obratnuj-zvonok");

const KEY_STORAGE = "selectedForm";
const selectedForm = {};
initForm();
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  formData.forEach((value, name) => console.log(value, name));
});

formEl.addEventListener("change", (e) => {
  console.log(e.target.value);
  console.log(e.target.name);
  selectedForm[e.target.name] = e.target.value;
  localStorage.setItem(KEY_STORAGE, JSON.stringify(selectedForm));
});

function initForm() {
  let persistesFilters = localStorage.getItem(KEY_STORAGE);
  if (persistesFilters) {
    persistesFilters = JSON.parse(persistesFilters);
  }
  console.log(persistesFilters);
}
