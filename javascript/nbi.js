function fetch_dogs() {
	fetch('https://scoobadood.github.io/data/dogs.json')
  	.then((response) => response.json())
  	.then((data) => add_dogs(data));
}

function add_dogs(dogs) {
	var posts = document.getElementById('posts')
	var grid = document.createElement('grid')

	for (var di =0; di < dogs.length; di = di+1) {
		dog = dogs[di]
		var article = document.createElement('article')
		article.className='dog-card'

		// The image wrapping div
		var image_wrapper = document.createElement('div')
		image_wrapper.className='dog-card-body'
		var img = document.createElement('img')
		img.className='dog-card-dog-image'
		img.src='images/'+ dog.Image
		image_wrapper.appendChild(img)

		// The Dog overlay
		var dog_overlay = document.createElement('div')
		dog_overlay.className='dog-card-overlay'
		var span = document.createElement('span')
		span.className='dog-card-overlay-name'
		var text = document.createTextNode(dog.Name)
		span.appendChild(text)
		dog_overlay.appendChild(span)

		span = document.createElement('span')
		span.className='dog-card-overlay-likes'
		text =  document.createTextNode(dog.Likes);
		span.appendChild(text)
		dog_overlay.appendChild(span)

		// The Owner overlay
		var owner_overlay = document.createElement('div')
		owner_overlay.className='dog-card-owner-overlay fade-in'
		var avatar_img = document.createElement('img')
		avatar_img.className='dog-card-owner-avatar'
		avatar_img.src='images/' + dog.OwnerImage
		owner_overlay.appendChild(avatar_img)

		var owner_name_div = document.createElement('div')
		owner_name_div.className='dog-card-owner-name'
		text =  document.createTextNode(dog.Owner);
		owner_name_div.appendChild(text)
		owner_overlay.appendChild(owner_name_div)

	    article.appendChild(image_wrapper)
	    article.appendChild(dog_overlay)
	    article.appendChild(owner_overlay)

		grid.append(article)
	}





	posts.append(grid)
}

