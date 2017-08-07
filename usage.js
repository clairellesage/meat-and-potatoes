// console.log("usage.js")
// var usage = document.getElementById('Usage')
// usage.scrollIntoView()

/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text && (msg.text == "report_back")) {
        /* Call the specified callback, passing 
           the web-pages DOM content as argument */
      // var ingredients = $('#ingredients')
	    var ingredientsQS = document.querySelector("[id*=ingredients]").id
	    // var ingredients = $("document:regex(id, .*sd.*)")

	    // var ingredients = $(document)
	    // 		.filter(function() {
	    //         return this.id.match(/ingredient+s/);
	    //     })
	    //     .scrollIntoView()
	    // ;

	    if ($('#ingredients').length > 0) {
	    	window.location.hash = "#ingredients";
	  	} else if (ingredientsQS != null) {
	  		alert(ingredientsQS)
	  		window.location.hash = ingredientsQS;
	  	} else {
	  		alert("error!")
	  	}

		  sendResponse(ingredients);
		  return true;
    }
});
