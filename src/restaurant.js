function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurant
}


function addMenuItem(restaurant, item) {
  if (restaurant.menus[item.type].includes(item)) {
    return restaurant.menus[item.type]
  } else {
    return restaurant.menus[item.type].push(item)
  }
}



function removeMenuItem(restaurant, item, menu) {
  for (var i = 0; i < restaurant.menus[menu].length; i++) {
    if (restaurant.menus[menu][i].name === item) {
      restaurant.menus[menu].splice(i);
    }
    return `No one is eating our ${item} - it has been removed from the ${menu} menu!`
  }
  return `Sorry, we don't sell ${item}, try adding a new recipe!`
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
