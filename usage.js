function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
  return;
}

// function findIngredients(queryTypes) {
// 	for (var type in queryTypes) {
// 		for (var e in elements) {
// 			if (elements[e].className || elements[e].id) {
// 				var el = elements[e]
// 				var ingredients = /[[i|I]ngredients/;
// 				// var ingredients = /Overview/;
// 				var exactMatchId = ingredients.exec(elements[e].id)
// 				var exactMatchClass = ingredients.exec(elements[e].className)
// 				var textMatch = ingredients.exec(elements[e].innerHTML)
// 				// alert(`${elements[e].id} ${elements[e].className}`)
// 				if (textMatch) {
// 					// console.log(`Text match \nelements: ${JSON.stringify(elements)}, \nelement:${JSON.stringify(elements[e])}, \ninnerHTML: ${JSON.stringify(elements[e].innerHTML)}`)
// 					// scrollIt(elements[e]);
// 					for (var i in el) {
// 						console.log(el[i])
// 						// var elMatch = ingredients.exec(el[i].innerHTML)
// 						// if (elMatch) {
// 						// 	for (j in el[i]) {
// 						// 		console.log(JSON.stringify(j))
// 						// 	}
// 						// }
// 					}
// 					return;
// 				// } else if (exactMatchId || exactMatchClass) {
// 				// 	// console.log(`Exact match \nelements: ${JSON.stringify(elements)}, \nelement:${JSON.stringify(elements[e])}, \ninnerHTML: ${JSON.stringify(elements[e].innerHTML)}`)
// 				// 	for (var i in el) {
// 				// 		console.log(JSON.stringify(el[i][0]))
// 				// 	}
// 					// scrollIt(elements[e])
// 				}
// 			}
// 		}
// 	}
// }

// function getElementsByIdStartsWith(container, selectorTag, prefix) {
//     var items = [];
//     var myPosts = document.getElementById(container).getElementsByTagName(selectorTag);
//     for (var i = 0; i < myPosts.length; i++) {
//         //omitting undefined null check for brevity
//         if (myPosts[i].id.lastIndexOf(prefix, 0) === 0) {
//             items.push(myPosts[i]);
//         }
//     }
//     return items;
// }

// var postedOnes = getElementsByIdStartsWith("posts", "div", "post-");

function findIngredients(tags) {
	var ingredients = /[[i|I]ngredients/;
	for (var t in tags) {
		if (tags[t]) { 
			// alert(JSON.stringify(tags[t].parentNode.children[0].innerHTML))
			// console.log(JSON.stringify(tags[t]))
			console.log(JSON.stringify[tags[t]])
			if (tags[t].parentNode.innerHTML != "") {
				var parentMatch = ingredients.exec(tags[t].parentNode.innerHTML);
				if (parentMatch) {
					alert(`parent ${JSON.stringify(tags[t].parentNode.innerHTML)}`)
					scrollIt(tags[t])
		  	}
		  	var children = tags[t].parentNode.children
		  	for (var child in children) {
		  		if (children[child].innerHTML != "") {
		  			var siblingMatch = ingredients.exec(children[child].innerHTML)
		  			if (siblingMatch) {
		  				alert(`sibl ${JSON.stringify(tags[t].parentNode.children[child])}`)
		  				scrollIt(tags[t])
		  				return
		  			}
		  		}
		  	}
		  }
		}
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
