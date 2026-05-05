function calculate() {
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;

    // BMI
    let bmi = (weight / (height * height)).toFixed(2);
    let bmiStatus = "";
    let bmiAdvice = "";

    if (bmi < 18.5) {
        bmiStatus = "Underweight";
        let gain = (18.5 * height * height - weight).toFixed(1);
        bmiAdvice = "Gain " + gain + " kg";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiStatus = "Fit";
        bmiAdvice = "Maintain your weight";
    } else {
        bmiStatus = "Overweight";
        let loss = (weight - 24.9 * height * height).toFixed(1);
        bmiAdvice = "Lose " + loss + " kg";
    }

    // BMR (Mifflin-St Jeor)
    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * (height * 100) - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * (height * 100) - 5 * age - 161;
    }

    let bmrStatus = bmr < 1500 ? "Low" : (bmr > 2000 ? "High" : "Normal");

    // Body Fat %
    let bodyFat = (1.20 * bmi + 0.23 * age - (gender === "male" ? 16.2 : 5.4)).toFixed(2);
    let fatStatus = "";
    let fatAdvice = "";

    if (bodyFat < 18) {
        fatStatus = "Low";
        fatAdvice = "Increase body fat slightly";
    } else if (bodyFat <= 25) {
        fatStatus = "Normal";
        fatAdvice = "Maintain";
    } else {
        fatStatus = "High";
        fatAdvice = "Reduce fat by exercise";
    }

    // Visceral Fat (rough estimate)
    let visceral = (bmi / 2).toFixed(1);
    let visStatus = visceral < 10 ? "Normal" : "High";
    let visAdvice = visceral < 10 ? "Good" : "Reduce belly fat";

    document.getElementById("result").innerHTML = `
        <b>BMI:</b> ${bmi} (${bmiStatus}) → ${bmiAdvice} <br><br>
        <b>BMR:</b> ${bmr.toFixed(0)} (${bmrStatus}) <br><br>
        <b>Body Fat %:</b> ${bodyFat}% (${fatStatus}) → ${fatAdvice} <br><br>
        <b>Visceral Fat:</b> ${visceral} (${visStatus}) → ${visAdvice}
    `;
}

// Popup functions
function showPopup(id) {
    document.getElementById(id).style.display = "block";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}