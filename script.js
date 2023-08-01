// Write your JavaScript code here!
window.addEventListener("load", function() {

   console.log("this is so fun");
   //myFetch();
   //pickPlanet();
  
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {

    //DOM variables for input
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    //DOM variables for innerHTML of div faulty items
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let faultyItems = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");

    //DOM variables for mission target
    let missionTarget = document.getElementById("missionTarget")

    //console.log(pilotName.value)

    //conditionals to validate input and alert appropriately. guess this should really be within the form submission function. will incorporate later.
    console.log(faultyItems.innerHTML)
    formSubmission(document, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
    // if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
    //    alert("All fields are required!")
    // } else if ((validateInput(pilotName.value) != "Not a Number") || (validateInput(copilotName.value) != "Not a Number") || (validateInput(fuelLevel.value) != "Is a Number") || (validateInput(cargoMass.value) != "Is a Number")) {
    //     alert("Make sure to enter valid information for each field!")
    //     //and now to update the HTML with form values
    //     //if fuel is too low and cargo mass too high
    // } else if ((fuelLevel.value < 10000) && (cargoMass.value > 10000)) {
    //     pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
    //     copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
    //     fuelStatus.innerHTML = `There is not enough fuel for the journey!`;
    //     cargoStatus.innerHTML = `There is too much mass for the shuttle to take off!`;
    //     faultyItems.style.visibility = "visible";
    //     launchStatus.style.color = "#C7254E";
    //     launchStatus.innerHTML = "Shuttle not ready for launch!";
    //     //if fuel level is too low 
    // } else if ((fuelLevel.value < 10000) && (cargoMass.value < 10001)) {
    //     pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
    //     copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
    //     fuelStatus.innerHTML = `There is not enough fuel for the journey!`;
    //     cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    //     faultyItems.style.visibility = "visible";
    //     launchStatus.style.color = "red";
    //     launchStatus.innerHTML = "Shuttle not ready for launch!";
    //     //if cargo mass is too high
    // } else if ((fuelLevel.value > 9999) && (cargoMass.value > 10000)) {
    //     pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
    //     copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
    //     fuelStatus.innerHTML = `Fuel level high enough for launch.`;
    //     cargoStatus.innerHTML = `There is too much mass for the shuttle to take off!`;
    //     faultyItems.style.visibility = "visible";
    //     launchStatus.style.color = "#C7254E";
    //     launchStatus.innerHTML = "Shuttle not ready for launch!"; 
    // } else {
    //     pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
    //     copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
    //     fuelStatus.innerHTML = `Fuel level high enough for launch.`;
    //     cargoStatus.innerHTML = `Cargo mass low enough for launch.`;
    //     faultyItems.style.visibility = "visible";
    //     launchStatus.style.color = "419F6A";
    //     launchStatus.innerHTML = "Shuttle is ready for launch!"; 
    // }
    

    event.preventDefault()
   })
   
    
//now for the mission destination fetch
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       //console.log(pickPlanet(listedPlanets));
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)

       
       
   })
   
});