function nameMenuItem(menuItemName) {
  return "Delicious " + menuItemName;
}

function createMenuItem(name, price, type) {
var menuItem = {
  name: name,
  price: price,
  type: type
};
return menuItem
}



function addIngredients(ingredient, ingredients) {
if(ingredients.includes(ingredient)) {
  return ingredients
} else {
  ingredients.push(ingredient);
}
return ingredients;
}


function formatPrice(initialPrice) {
  return `$${initialPrice}`
}


function decreasePrice(initialPrice) {
  decreasedPrice = initialPrice - (initialPrice * .1)
  return decreasedPrice
}

function createRecipe(title, ingredients, menuItemType) {
var recipe = {
  title: title,
  ingredients: ingredients,
  type: menuItemType
};
return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
