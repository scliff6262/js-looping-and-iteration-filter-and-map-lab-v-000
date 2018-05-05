// Code your solution here:
function driversWithRevenueOver(objects, revenue){
  return objects.filter(function(object){return object.revenue > revenue})
}

function driverNamesWithRevenueOver(objects, revenue){
  driverObjects = objects.filter(function(object){return object.revenue > revenue})
  return driverObjects.map(function(object){return object.name})
}

function exactMatch(objects, keyValue){
  objects.filter(function(object){return object[Object.keys(keyValue)[0]] === })
}
