function makeOrder()
{
	var menuItem = document.forms["createOrder"].value;
	createOrder(menuItem);
}

function createOrder(menuItem)
{
	var newOrder = {item: menuItem};

	var currentTime = new Date();
	var orderNum = currentTime.getTime();

	orders.child('OrderList/' + orderNumber).set(newOrder);
	var placed = orders.child('Placed');
        placed.once("value")
          .then(function(snapshot) {
            var newKey = snapshot.numChildren(); 
            
            // replace value at key 0 if empty
            if(snapshot.child(0).val() == ""){
                orders.child('Placed/' + 0).set(orderNumber.toString());
            }
            else{
                orders.child('Placed/' + newKey).set(orderNumber.toString());
            }
            
        });
}