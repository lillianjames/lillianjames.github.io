//variables
const heading = document.querySelector("#heading"); 
let country = document.querySelector("#country"); 
let city = document.querySelector("#city");

//functions 
country.oninput = function(){
    if (country.value == "Africa"){
        heading.innerHTML = "Yes! I would love to visit africa!"; 
    } else if (country.value =="Australia"){
        heading.innerHTML= "No thank you! Bugs there are too serious for me.";
    } else{ 
        heading.innerHTML = "Great Suggestion!";
    }
} 
city.oninput = function(){
    if (city.value == "Miami"){
        heading.innerHTML = "Yes! I would love to visit Miami!"; 
    } else if (city.value =="Paris"){
        heading.innerHTML= "No thank you! Not enough beaches for me.";
    } else{ 
        heading.innerHTML = "Great Suggestion!";
    }
}   
function checkTravel() {

    if (document.getElementById("yesTravel").checked) {
        alert("Cool! You have traveled before.");
    } 
    else if (document.getElementById("noTravel").checked) {
        alert("Maybe someday! Never too late to start.");
    } 
    else {
        alert("Please select Yes or No.");
    }

}