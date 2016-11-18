function handleMessage(msgEvent) {

	console.log("running");

    var messageName = msgEvent.name;

    if (messageName === "clickAddToCard") {
        
		var items = document.querySelectorAll("button.ah-btn");
		console.log(items.length);	
		for (var i = 0; i < items.length; i++) {
         console.log('entered loop');
			if (items[i].title == "Add to Card"){
				console.log("added offer");
				items[i].click();	
			}
		}
    }
}

safari.self.addEventListener("message", handleMessage, false);