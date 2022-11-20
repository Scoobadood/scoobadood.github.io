function add_dogs() {
	var posts = document.getElementById('posts')
	var grid = document.createElement('grid')

	var dogs=[
	{
		'Name': 'Pooch',
		'Owner': 'Dave',
		'Likes': 12,
		'Image': 'pooch.png'
	},
	{
		'Name': 'Pooch',
		'Owner': 'Dave',
		'Likes': 12,
		'Image': 'pooch.png'
	},
	{
		'Name': 'Pooch',
		'Owner': 'Dave',
		'Likes': 12,
		'Image': 'pooch.png'
	},
	]

	for (dog in dogs) {
		var article = document.createElement('article')
		article.class='dog-card'



		var body = document.createElement('div')
		body.class='dog-card-body'
		var img = document.createElement('img')
		img.class='dog-card-dog-image'
		img.src='images/'+dog.Image
		body.append(img)


		var overlay = document.createElement('div')
		overlay.class='dog-card-overlay'
		var span1 = document.createElement('span')
		span1.class='dog-card-overlay-name'
		span1.innerText=dog.Name
		var span2 = document.createElement('span')
		span2.class='dog-card-overlay-likes'
		span2.innerText=dog.Likes


		var owner_overlay = document.createElement('div')
		owner_overlay.class=['dog-card-overlay', 'fade-in']
		var avatar_img = document.createElement('div')
		avatar_img.class='dog-card-owner-avatar'
		avatar_img.src='images/avatar.png'
		owner_overlay.append(avatar_img)

		var owner_name_div = document.createElement('div')
		owner_name_div.class='dog-card-owner-name'
		owner_name_div.innerText=dog.Owner
		owner_overlay.append(owner_name_div)

	    article.append(body)
	    article.append(overlay)
	    article.append(owner_overlay)

		grid.append(article)
	}





	posts.append(grid)
}

