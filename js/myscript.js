

var movies = JSON.parse(movies);



$("#sort").on('click', function() {
    movies.sort(function sortRating(a, b) {
        var a1 = a.rating,
            b1 = b.rating;
        if (a1 == b1) return 0;
        return a1 < b1 ? 1 : -1;
    });
    console.table(movieCard);
    update();

});


function update() {
    $('.movies').html("");
    for (let i = 0; i < movies.length; i++) {
        $(`<div class="col-12 col-md-6 px-5 mb-3">
				<div class="card h-100 text-white-50">
					<div class="row no-gutters">
						<div class="col-md-4 p-5 p-md-3 shadow-sm">
							<img src="${movies[i].image}" class="card-img p-3" alt= ${movies[i].alt}>
						</div>
						<div class="col-md-8">
							<div class="card-body h-100 d-flex flex-column">
								<h5 class="card-title">${movies[i].title}</h5>
								<p class="card-text">${movies[i].description}</p>
								<div class="card-text d-flex flex-grow-1 align-items-end justify-content-end">
									<button type=button class="lButton btn p-0 d-flex align-items-center align-bottom mb-0">								
										<p class="text-success text-right mb-0 mr-1">Like
											<i class="fas fa-thumbs-up"></i>
										<div class="rounded-circle bg-success rating text-center text-light">
											<p class="font-weight-light mb-0 h-100 align-middle ratingValue">${movies[i].rating}</p>
										</div>
										</button>
									</div>										
								</div>
							</div>
						</div>
					</div>
				</div>`).appendTo(`.movies`);
    }
var likeBtn = $(".lButton");
var ratingValue = $(".ratingValue");

for (let i = 0; i < movies.length; i++) {

    $(likeBtn[i]).on('click', function() {
        ++movies[i].rating;
        $(ratingValue[i]).text(movies[i].rating);
        console.table(movies);
    });
}
}


update();
