function handleMessage(msgEvent) {

    var messageName = msgEvent.name;

    if (messageName === "clickAddToCard") {
        
		var items = document.querySelectorAll("a.ah-add-to-card-button");
		
		for (var i = 0; i < items.length; i++) {
			items[i].click()
		}
    }
}

safari.self.addEventListener("message", handleMessage, false);