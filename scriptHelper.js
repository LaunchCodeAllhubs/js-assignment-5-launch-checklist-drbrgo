// Write your helper functions here!
require('isomorphic-fetch');


//initializing variables
const form = document.getElementById("launchForm")


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `
   
}

function validateInput(testInput) {
   if (testInput === ""){
    return "Empty"
   } 
   if (isNaN(Number(testInput))) {
    return "Not a Number"
   }
   if (typeof(Number(testInput)) === "number") {
    return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
 
    
   //let's declare and initialize some local variables
//    let pilotName = document.querySelector("input[name=pilotName]");
//    let copilotName = document.querySelector("input[name=copilotName]");
//    let fuelLevel = document.querySelector("input[name=fuelLevel");
//    let cargoMass = document.querySelector("input[name=cargoMass]");


    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let faultyItems = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");

    console.log(pilotStatus.innerHTML);
    
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        alert("All fields are required!")
     } else if ((validateInput(pilot) != "Not a Number") || (validateInput(copilot) != "Not a Number") || (validateInput(fuelLevel) != "Is a Number") || (validateInput(cargoLevel) != "Is a Number")) {
         alert("Make sure to enter valid information for each field!")
         //and now to update the HTML with form values

         //if fuel is too low and cargo mass too high
     } else if ((Number(fuelLevel) < 10000) && (Number(cargoLevel) > 10000)) {
        // document.getElementById("formSubmit").addEventListener("submit", function(event){ thought i needed this, but the code was actually just breaking because parameters of conditionals were not numbers and variables below were not referring to input paramters of greater function
          pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
          copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch.`;
          fuelStatus.innerHTML = `There is not enough fuel for the journey!`;
          cargoStatus.innerHTML = `There is too much mass for the shuttle to take off!`;
        list.style.visibility = "visible";
        launchStatus.style.color = "#C7254E";
        launchStatus.innerHTML = "Shuttle not ready for launch!";
         console.log(document.getElementById("faultyItems"));
         //event.preventDefault();
         
        //});
    
         //if fuel level is too low 
     } else if ((Number(fuelLevel) < 10000) && (Number(cargoLevel) < 10001)) {
         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
         copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch.`;
         fuelStatus.innerHTML = `There is not enough fuel for the journey!`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
         list.style.visibility = "visible";
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch!";
         //if cargo mass is too high
     } else if ((Number(fuelLevel) > 9999) && (Number(cargoLevel) > 10000)) {
         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
         copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch.`;
         fuelStatus.innerHTML = `Fuel level high enough for launch.`;
         cargoStatus.innerHTML = `There is too much mass for the shuttle to take off!`;
         list.style.visibility = "visible";
         launchStatus.style.color = "#C7254E";
         launchStatus.innerHTML = "Shuttle not ready for launch!"; 
     } else {
         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
         copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch.`;
         fuelStatus.innerHTML = `Fuel level high enough for launch.`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch.`;
        list.style.visibility = "visible";
         launchStatus.style.color = "419F6A";
         launchStatus.innerHTML = "Shuttle is ready for launch!"; 
     }
     document.getElementById("formSubmit").addEventListener("submit", function(event){ 
     event.preventDefault()
    })
};

async function myFetch() {
    let planetsReturned;
    let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    planetsReturned = await response.json();
    //console.log(planetsReturned[0].name)
    return planetsReturned;
        };

function pickPlanet(planets) {
    let randomizer = Math.floor(Math.random()*6);
    return planets[randomizer];
    // pickedPlanet = myFetch()[randomizer]
    // console.log(pickedPlanet);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
