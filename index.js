// Code your solution in this file.
function lowerCaseDrivers(name){
return name.map(function(driver){
  return driver.toLowerCase();
});
}

function nameToAttributes(name){
  return name.map(function(driver){
    return (driver.firstName + " " + driver.lastName)
  })
}
