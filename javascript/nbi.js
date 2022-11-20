var posts = document.getElementById('posts')
var grid = document.createElement('grid')

var dogs=['pooch']

for (dog in dogs) {
	var article = document.createElement('article')
	article.class='dog-card'



	var body = document.createElement('div')
	body.class='dog-card-body'
	var img = document.createElement('img')
	img.class='dog-card-dog-image'
	img.src='images/dog1.png'
	body.append(img)



	var overlay = document.createElement('div')
	overlay.class='dog-card-overlay'

	var owner_overlay = document.createElement('div')
	owner_overlay.class=['dog-card-overlay', 'fade-in']




            // <div class="">
            //     <img class="dog-card-dog-image" src="../images/dog1.png" />
            // </div>

            // <div class="dog-card-overlay">
            //     <span class="dog-card-overlay-name">Pupstar</span>
            //     <span class="dog-card-overlay-likes">10</span>
            // </div>

            // <div class="dog-card-owner-overlay fade-in">
            //     <img class="dog-card-owner-avatar" src="../images/avatar.png"/>
            //     <div class="dog-card-owner-name">Dave</div>
            // </div>

    article.append(body)
    article.append(overlay)
    article.append(owner_overlay)

	grid.append(article)
}





posts.append(grid)



