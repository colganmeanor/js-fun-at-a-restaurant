function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
  } else {
    return;
  }
}


function refundOrder(order, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === order) {
      deliveryOrders.splice(i, 1)
      return deliveryOrders
    }
  }
}


function listItems(deliveryOrders) {
  items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item)
  }
  return items.join(", ")
}



function searchOrder(deliveryOrders, item) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
      return true;
    }
  }
  return false
}




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
