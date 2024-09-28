//========= LOGIN AREA =========
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let email = document.getElementById("email-input"),
        password = document.getElementById("password-input");

      if (isEmailValid(email.value) && isPasswordLongEnough(password)) {
        window.location.href = "../../index.html";
      } else {
        alert("invalid!");

        setTimeout(() => {
          email.value = "";
          password.value = "";
        }, 1500);
      }
    });
  }
});

//Checks password length
const minPasswordLength = 8;
function isPasswordLongEnough(password) {
  return password.value.length >= minPasswordLength;
}

//Checks email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isEmailValid(email) {
  return emailRegex.test(email);
}

//============== CREATE ACCOUNT & SIGN UP AREA ==============
document.addEventListener("DOMContentLoaded", () => {
  //Create account button
  const createAccountBtn = document.getElementById("create-account-btn"),
    signUpArea = document.getElementById("sign-up-area"),
    closeBtn = document.getElementById("close-btn"),
    main = document.querySelector(".facebook-login");

  if (createAccountBtn && closeBtn) {
    createAccountBtn.addEventListener("click", () => {
      signUpArea.classList.add("display-block");

      main.style.opacity = ".3";
    });

    closeBtn.addEventListener("click", () => {
      signUpArea.classList.remove("display-block");

      main.style.opacity = "";
    });
  } else {
    console.error("Create / Close button not found!");
  }

  //Question Icon hover
  const questionIconOne = document.getElementById("question-icon-one"),
    questionIconTwo = document.getElementById("question-icon-two"),
    otherInfoOne = document.getElementById("create-element-one"),
    otherInfoTwo = document.getElementById("create-element-two");

  if (questionIconOne) {
    questionIconOne.addEventListener("mouseover", () => {
      otherInfoOne.classList.add("display-block");
    });

    questionIconOne.addEventListener("mouseout", () => {
      otherInfoOne.classList.remove("display-block");
    });
  } else {
    console.error("Question icon element not found");
  }

  if (questionIconTwo) {
    questionIconTwo.addEventListener("mouseover", () => {
      otherInfoTwo.classList.add("display-block");
    });

    questionIconTwo.addEventListener("mouseout", () => {
      otherInfoTwo.classList.remove("display-block");
    });
  } else {
    console.error("Question icon element not found!");
  }

  //===== Day and Year Select =====
  const daySelect = document.getElementById("day");
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");

    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  const yearSelect = document.getElementById("year"),
    currentYear = new Date().getFullYear(),
    minSelectYear = currentYear - 100;

  for (let i = currentYear; i >= minSelectYear; i--) {
    const option = document.createElement("option");

    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }

  //Gender Select
  const maleSelect = document.getElementById("male"),
    femaleSelect = document.getElementById("female"),
    customSelect = document.getElementById("custom");

  if (maleSelect && femaleSelect && customSelect) {
    handleGenderSelect(maleSelect, femaleSelect, customSelect);
  } else {
    console.error("ERROR!");
  }
});

//Function to handle gender select
function handleGenderSelect(male, female, custom) {
  const customArea = document.getElementById("gender-custom");

  if (male && female && custom) {
    male.addEventListener("click", () => {
      customArea.classList.remove("display-block");
    });

    female.addEventListener("click", () => {
      customArea.classList.remove("display-block");
    });

    custom.addEventListener("click", () => {
      customArea.classList.add("display-block");
    });
  } else {
    console.log("Some option(s) not found!");
  }
}

// ============== SIGN UP BUTTON EVENT LISTENER ==============
document.addEventListener("DOMContentLoaded", () => {
  //User's info
  const firstName = document.getElementById("first-name"),
    lastName = document.getElementById("last-name"),
    email = document.getElementById("email"),
    password = document.getElementById("password");

  //Birthdate
  const birthMonth = document.getElementById("month"),
    birthDay = document.getElementById("day"),
    birthYear = document.getElementById("year");

  //Gender Custom Select
  const genderCustomSelect = document.getElementById("gender");

  //Sign Up Button
  const signUpBtn = document.getElementById("sign-up-btn");

  if (signUpBtn) {
    signUpBtn.addEventListener("click", () => {
      checkInputs(firstName, lastName);
      isSignUp_Email_Valid(email);
      isSignUp_Password_LongEnough(password);
      isUser_oldEnough(birthMonth, birthDay, birthYear);
      validateGender();
      genderCustom_Select(genderCustomSelect);
    });
  }
});

//Function to check the first name and last name inputs
function checkInputs(inputOne, inputTwo) {
  let isValid = true;

  function validate_firstName_lastName(field, index) {
    if (field.value === "") {
      field.classList.add("border-red");
      input_icons[index].classList.add("display-block");
      isValid = false;
    }

    if (field.value.length < 2) {
      field.classList.add("border-red");
      input_icons[index].classList.add("display-block");
      isValid = false;
    } else {
      field.classList.remove("border-red");
      input_icons[index].classList.remove("display-block");
    }
  }

  validate_firstName_lastName(inputOne, 0);
  validate_firstName_lastName(inputTwo, 1);
}

const input_icons = document.querySelectorAll(
  "#signup-form .fa-solid.fa-circle-exclamation"
);

//Function to check if the email is valid on signup area
function isSignUp_Email_Valid(email) {
  if (emailRegex.test(email.value) === false) {
    email.classList.add("border-red");
    input_icons[2].classList.add("display-block");
    setTimeout(() => {
      email.value = "";
    }, 3000);
  } else {
    input_icons[2].classList.remove("display-block");
    email.classList.remove("border-red");
  }
}

//Function to check if the password long enough
function isSignUp_Password_LongEnough(password) {
  if (password.value.length <= minPasswordLength) {
    password.classList.add("border-red");
    input_icons[3].classList.add("display-block");

    setTimeout(() => {
      password.value = "";
    });
  } else {
    password.classList.remove("border-red");
    input_icons[3].classList.remove("display-block");
  }
}

//Function to check if the user is old enough
function isUser_oldEnough(birthmonth, birthday, birthyear) {
  let minAge = 13;
  let currentYear = new Date().getFullYear();
  let isValid = true;
  const warningMsg = document.querySelector(".warning-message");

  function validateField(field, index) {
    if (field.value === "") {
      field.classList.add("border-red");
      input_icons[index].classList.add("display-block");
      isValid = false;
    } else {
      field.classList.remove("border-red");
      input_icons[index].classList.remove("display-block");
    }
  }

  validateField(birthmonth, 4);
  validateField(birthday, 4);
  validateField(birthyear, 4);

  if (isValid) {
    let birthDate = new Date(
      birthyear.value,
      birthmonth.value - 1,
      birthday.value
    );
    let age = currentYear - birthyear.value;
    let currentDate = new Date();

    // Check if the birthday has occurred yet this year
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age < minAge) {
      input_icons[4].classList.add("display-block");
      warningMsg.classList.add("display-block");
      warningMsg.textContent = "You are not old enough!";
      setTimeout(() => {
        warningMsg.textContent = "";
      }, 3000);
      isValid = false;
    } else {
      input_icons[4].classList.remove("display-block");
      warningMsg.classList.remove("display-block");
    }
  }
}

//Function to validate gender
function validateGender() {
  const maleSelect = document.getElementById("male"),
    femaleSelect = document.getElementById("female"),
    customSelect = document.getElementById("custom"),
    genderOption = document.querySelectorAll(".gender .gender-option");
  if (!maleSelect.checked && !femaleSelect.checked && !customSelect.checked) {
    input_icons[5].classList.add("display-block");
    genderOption.forEach((element) => {
      element.classList.add("border-red");
    });
  } else {
    // If at least one option is checked
    input_icons[5].classList.remove("display-block");
    genderOption.forEach((element) => {
      element.classList.remove("border-red");
    });
  }
}

//Function to handle gender-custom select
function genderCustom_Select(genderSelect) {
  const selectedValue = genderSelect.value;
  isValid = true;

  if (selectedValue === "") {
    genderSelect.classList.add("border-red");
    input_icons[6].classList.add("display-block");
    isValid = false;
  } else {
    genderSelect.classList.remove("border-red");
    input_icons[6].classList.remove("display-block");
  }
}
