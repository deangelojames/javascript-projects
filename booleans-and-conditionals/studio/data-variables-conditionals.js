// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
totalMassKg += "kg"; //add kg unit of measure to fuel mass
let maximumMassLimit = 850000;
let fuelTempCelsisus =  -225;
let minimumFuelTemp = -300;
minimumFuelTemp += "°C"; //add the degree Celsius symbol to min fuel temp
let maximumFuelTemp = -150;
maximumFuelTemp += "°C"; //add the degree Celsius symbol to max fuel temp
let fuelLevel = 100;
fuelLevel += "%"; // add the % sign to the fuel level
let weatherStatus = "clear";
let preparedForLiftOff = "true";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount === 7){
// add logic below to verify all astronauts are ready
    if (astronautStatus === "ready")
// add logic below to verify the total mass does not exceed the maximum limit of 850000
    if (totalMassKg < maximumMassLimit)
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
    if (fuelTempCelsisus >= minimumFuelTemp || fuelTempCelsisus <= maximumFuelTemp )
// add logic below to verify the fuel level is at 100%
    if (fuelLevel === 100)
// add logic below to verify the weather status is clear
    if (weatherStatus === "clear")
// Verify shuttle launch can proceed based on above conditions
averageAstronautMassKg += "kg"; //add kg unit of measure to average astronaut mass
crewMassKg += "kg"; //add kg unit of measure to crew mass
fuelMassKg += "kg"; //add kg unit of measure to fuel mass
shuttleMassKg += "kg"; //add kg unit of measure to shuttle mass
fuelTempCelsisus += "°C"; //add the degree Celsius symbol to fuel temp

console.log(date);
console.log(time);
console.log(astronautCount);
console.log(crewMassKg);
console.log(fuelMassKg);
console.log(shuttleMassKg);
console.log(totalMassKg);
console.log(fuelTempCelsisus);
console.log(weatherStatus);
console.log("Enjoy your flight, godspeed and a great journey!");
}