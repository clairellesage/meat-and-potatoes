function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
}

function findIngredients(queryTypes) {
	var repeat = true;
	for (var type in queryTypes) {
		for (var e in elements) {
			while (repeat) {
				if (elements[e].className || elements[e].id) {
					var ingredients = /[i|I]ngredients/;
					// var ingredients = /Overview/;
					var exactMatchId = ingredients.exec(elements[e].id)
					var exactMatchClass = ingredients.exec(elements[e].className)
					var textMatch = ingredients.exec(elements[e].innerHTML)
					// alert(`${elements[e].id} ${elements[e].className}`)
					if (textMatch) {
						// alert(JSON.stringify(elements[e]))
						// scrollIt(elements[e]);
						scrollIt(elements[e]);
						repeat = false;
					} else if (exactMatchId) {
						scrollIt(elements[e])
						repeat = false;
					}
				}
			}
		}
	}
}

var elements = document.querySelectorAll("*")
var tags = document.getElementsByTagName("div");
queryTypes = [elements, tags]

findIngredients(queryTypes)



// var elements = document.getElementsByTagName("*");
// var elements = document.getElementsByClassName('*')
// const elements = document.querySelector('*');

// var tags = document.getElementsByTagName('*')
// findIngredients(tags)


// const elm = document.querySelector('#Overview');

// findIngredients(elm);
