function handleMessage(msgEvent) {

	console.log("running");

    var messageName = msgEvent.name;

    if (messageName === "clickAddToCard") {
        
		var items = document.querySelectorAll('[title="Add to Card"]');
		console.log(items.length);	
		for (var i = 0; i < items.length; i++) {
         	console.log('entered loop');	
			
			items[i].click();	
			console.log("added offer");
		}
    }
}

safari.self.addEventListener("message", handleMessage, false);