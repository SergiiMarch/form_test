const formEl = document.querySelector(".obratnuj-zvonok");

const KEY_STORAGE = "selectedForm";

initForm();
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  formData.forEach((value, name) => console.log(value, name));
});

formEl.addEventListener("change", (e) => {
  //   console.log(e.target.value);
  //   console.log(e.target.name);
  let persistetFilters = localStorage.getItem(KEY_STORAGE);
  persistetFilters = persistetFilters ? JSON.parse(persistetFilters) : {};
  persistetFilters[e.target.name] = e.target.value;

  localStorage.setItem(KEY_STORAGE, JSON.stringify(persistetFilters));
});

function initForm() {
  let persistesFilters = localStorage.getItem(KEY_STORAGE);
  if (persistesFilters) {
    persistesFilters = JSON.parse(persistesFilters);
    Object.entries(persistesFilters).forEach(([name, value]) => {
      formEl.elements[name].value = value;
      //   selectedForm = {};
      //   localStorage.removeItem(KEY_STORAGE);
    });
  }
}
console.log(KEY_STORAGE);
