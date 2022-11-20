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

	for (var di =0; di < dogs.length; di = di+1) {
		dog = dogs[di]
		var article = document.createElement('article')
		article.className='dog-card'



		var body = document.createElement('div')
		body.className='dog-card-body'
		var img = document.createElement('img')
		img.className='dog-card-dog-image'
		img.src='images/'+ dog.Image
		body.append(img)


		var overlay = document.createElement('div')
		overlay.className='dog-card-overlay'
		var span1 = document.createElement('span')
		span1.className='dog-card-overlay-name'
		span1.textContent=dog.Name
		var span2 = document.createElement('span')
		span2.className='dog-card-overlay-likes'
		span2.textContent=dog.Likes


		var owner_overlay = document.createElement('div')
		owner_overlay.className=['dog-card-overlay', 'fade-in']
		var avatar_img = document.createElement('div')
		avatar_img.className='dog-card-owner-avatar'
		avatar_img.src='images/avatar.png'
		owner_overlay.append(avatar_img)

		var owner_name_div = document.createElement('div')
		owner_name_div.className='dog-card-owner-name'
		owner_name_div.textContent=dog.Owner
		owner_overlay.append(owner_name_div)

	    article.append(body)
	    article.append(overlay)
	    article.append(owner_overlay)

		grid.append(article)
	}





	posts.append(grid)
}

