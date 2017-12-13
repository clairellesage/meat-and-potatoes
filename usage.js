function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
  return;
}

function findIngredients(tags) {
	var ingredients = /[[i|I]ngredients$/;
	for (var t in tags) {
		if (tags[t]) { 
			// alert(JSON.stringify(tags[t].parentNode.children[0].innerHTML))
			// console.log(JSON.stringify(tags[t]))
			console.log(JSON.stringify[tags[t]])
			if (tags[t].parentNode.innerHTML != "") {
				var parentMatch = ingredients.exec(tags[t].parentNode.innerHTML);
				if (parentMatch) {
					// alert(`parent ${JSON.stringify(tags[t].parentNode.innerHTML)}`)
					scrollIt(tags[t])
					return
		  	}
		  	var children = tags[t].parentNode.children
		  	for (var child in children) {
		  		if (children[child].innerHTML != "") {
		  			var siblingMatch = ingredients.exec(children[child].innerHTML)
		  			if (siblingMatch) {
		  				// alert(`sibl ${JSON.stringify(tags[t].parentNode.children[child])}`)
		  				scrollIt(tags[t])
		  				return
		  			}
		  		}
		  	}
		  }
		}
		// else here to trigger extension response e.g. ("no ingredients found")
	}
}



// var elements = document.querySelectorAll("*")
var tags = document.getElementsByTagName("ul");
// queryTypes = [elements, tags]

findIngredients(tags)
// scrollIt(tags)



// var elements = document.getElementsByTagName("*");
// var elements = document.getElementsByClassName('*')
// const elements = document.querySelector('*');

// var tags = document.getElementsByTagName('*')
// findIngredients(tags)


// const elm = document.querySelector('#Overview');

// findIngredients(elm);
