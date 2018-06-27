// Code your solution in this file.
function lowerCaseDrivers(name){
return name.map(function(driver){
  return driver.toLowerCase();
});
}

function nameToAttributes(name){
  return name.map(function(driver){
    names = driver.split('')
    return {firstName: names[0], lastName: names[1]}
  });
}
