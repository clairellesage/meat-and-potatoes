// console.log("usage.js")
// var usage = document.getElementById('Usage')
// usage.scrollIntoView()

/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text && (msg.text == "report_back")) {
        /* Call the specified callback, passing 
           the web-pages DOM content as argument */
	    var ingredients = document.getElementById("ingredients")
	    if (ingredients != "undefined") {
		    ingredients.scrollIntoView()
		    sendResponse(ingredients);
		  } else {
		  	sendResponse("it's undefined")
		  }
    }
});