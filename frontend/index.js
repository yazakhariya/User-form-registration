const button = document.querySelector(".button");
const email = document.getElementById("email");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const fields = document.querySelectorAll(".field");
const nameBox = document.querySelector(".name");
const emailBox = document.querySelector(".email");
const phoneBox = document.querySelector(".phone");
const errorName = document.createElement("div");
const errorEmail = document.createElement("div");
const errorPhone = document.createElement("div");
const checkbox = document.getElementById("checkbox");
errorName.classList.add("error");
errorEmail.classList.add("error");
errorPhone.classList.add("error");

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\+[1-9]{1}[0-9]{7,11}$/gm;
  return re.test(phone);
}

function RemoveError() {
  for (const field of fields) {
    field.addEventListener("keyup", () => {
      field.classList.remove("empty_field");
      button.disabled = false;
    });
  }
}

RemoveError();

function InputsValidation() {
  if ((email.value && !validateEmail(email.value)) || !email.value) {
    email.classList.add("empty_field");
    errorEmail.innerHTML = "Поле, обязательное для заполнения";
    emailBox.appendChild(errorEmail);
    button.disabled = true;
  }

  if ((phone.value && !validatePhone(phone.value)) || !phone.value) {
    phone.classList.add("empty_field");
    errorPhone.innerHTML = "Поле, обязательное для заполнения";
    phoneBox.appendChild(errorPhone);
    button.disabled = true;
  }

  if ((name.value && name.value.length < 8) || !name.value) {
    name.classList.add("empty_field");
    errorName.innerHTML = "Поле, обязательное для заполнения (более 8 знаков)";
    nameBox.appendChild(errorName);
    button.disabled = true;
  }
}

function SendingData() {
  let obj = {};
  fields.forEach((field) => (obj[field.id] = field.value));
  console.log(obj)
  fetch("http://localhost:3005/auth", {
    mode: 'no-cors',
    method: "POST",
    body: JSON.stringify(obj),
  })
    .then((response) => console.log(response));
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  InputsValidation();
  if (!button.disabled && checkbox.checked === true) {
    SendingData();
  }
});
