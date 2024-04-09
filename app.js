// Selecting elements
const ageInput = document.getElementById("user-age");
const heightInput = document.getElementById("user-height");
const weightInput = document.getElementById("user-weight");
const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");
const form = document.getElementById("bmi-form");
const submitButton = document.getElementById("submit-button");

// Function to validate form on submission
const validateForm = () => {
  if (
    ageInput.value === "" ||
    heightInput.value === "" ||
    weightInput.value === "" ||
    (maleRadio.checked === false && femaleRadio.checked === false)
  ) {
    alert("All fields are required!");
    return false; // Prevent form submission
  } else {
    return true; // Allow form submission
  }
};

// Adding event listener to form submission
form.addEventListener("submit", validateForm);

// Function to calculate BMI
const calculateBMI = () => {
  const parameters = [ageInput.value, heightInput.value, weightInput.value];
  const gender = maleRadio.checked ? "male" : "female";
  form.reset(); // Reset form fields after submission

  // Calculating BMI
  const bmi =
    Number(parameters[2]) /
    ((Number(parameters[1]) / 100) * (Number(parameters[1]) / 100));

  let result = "";
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Healthy";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Overweight";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Obese";
  } else if (35 <= bmi) {
    result = "Extremely obese";
  }

  // Creating elements to display result
  const resultHeading = document.createElement("h1");
  const bmiLabel = document.createElement("h2");

  const resultText = document.createTextNode(result);
  const bmiLabelText = document.createTextNode("BMI: ");
  const bmiValueText = document.createTextNode(parseFloat(bmi).toFixed(2));

  resultHeading.appendChild(resultText);
  bmiLabel.appendChild(bmiLabelText);
  bmiLabel.appendChild(bmiValueText);

  // Appending elements to the body
  document.body.appendChild(resultHeading);
  document.body.appendChild(bmiLabel);

  // Removing event listeners to prevent multiple submissions
  submitButton.removeEventListener("click", calculateBMI);
  form.removeEventListener("submit", validateForm);
};

// Adding event listener to submit button for BMI calculation
submitButton.addEventListener("click", calculateBMI);
