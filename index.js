// length
const conversionAreaLength = document.querySelector(".conversion-area-length")
conversionAreaLength.innerHTML = "</br>"

//volume
const conversionAreaVolume = document.querySelector(".conversion-area-volume")
conversionAreaVolume.innerHTML = "</br>"

//mass
const conversionAreaMass = document.querySelector(".conversion-area-mass")
conversionAreaMass.innerHTML = "</br>"


// converts the input
function getConversion() {
    
    let numberInput = document.querySelector("#number-input-text").value

    //Check if valid number is inputted 
    if (isNaN(numberInput) || numberInput === null || numberInput.match(/^ *$/) !== null) {
        alert("Please Enter a number value!")
        return false
    } else {
        conversionAreaLength.innerHTML = `
        ${numberInput} meters = ${(numberInput * 3.28084).toFixed(2)} feet 
        | ${numberInput} feet = ${(numberInput * 0.3048).toFixed(2)} meters
        `
        // volume
        conversionAreaVolume.innerHTML = `
        ${numberInput} liters = ${(numberInput * 0.264172).toFixed(2)} gallons 
        | ${numberInput} gallons = ${(numberInput * 3.785412).toFixed(2)} liters
        `
        // mass
        conversionAreaMass.innerHTML = `
        ${numberInput} kilos = ${(numberInput * 2.2).toFixed(2)} pounds 
        | ${numberInput} pounds = ${(numberInput / 2.2046).toFixed(2)} kilos
        `
    }
    resetForm()
}

function resetForm() {
    let form = document.getElementById("number-input-text")
    form.value = ""
}


