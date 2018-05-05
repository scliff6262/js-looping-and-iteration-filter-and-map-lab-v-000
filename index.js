// Code your solution here:
function driversWithRevenueOver(objects, revenue){
  return objects.filter(function(object){return object.revenue > revenue})
}

function driverNamesWithRevenueOver(objects, revenue){
  let driverObjects = objects.filter(function(object){return object.revenue > revenue})
  return driverObjects.map(function(object){return object.name})
}

function exactMatch(objects, keyValue){
  return objects.filter(function(object){return object[Object.keys(keyValue)[0]] === keyValue[Object.keys(keyValue)[0]]})
}
