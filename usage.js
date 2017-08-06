/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text && (msg.text == "report_back")) {
        /* Call the specified callback, passing the web-pages DOM content as argument */

      var ingArr = document.querySelector('[id*=ingredient]').id
      // var ingArr = document.getElementById('#ingredients')

      sendResponse(ingArr)
      

	  //   if (ingredients != null) {
		 //    ingredients.scrollIntoView()
		 //    sendResponse(ingredients);
		 //  } else {
		 //  	sendResponse("it's undefined")
		 //  }
    }
});
