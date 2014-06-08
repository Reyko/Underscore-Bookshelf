function handleResponse(response) {
  console.log(response.items);

  _.each(response.items, function(book) {

    new Book(book).add_to_bookshelf();

  });

}

function hello() {
    var val = document.getElementById("search").value;
    var findByTitle = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    alert(val);
}

"We' ll call this constructor"

function Book(book_info) {
  this.image_url = book_info.volumeInfo.imageLinks.thumbnail;
  this.title = book_info.volumeInfo.title;
  this.rating = book_info.volumeInfo.averageRating;
}


Book.prototype.add_to_bookshelf = function(){

    var bookCon = document.getElementById('bookshelf');
    var image = document.createElement("img");

    var container = document.createElement("div");
    container.setAttribute('class',"wrapper");

    var star = document.createElement("div");
    star.setAttribute("class","hot");
    var starImage = document.createElement("img");

    starImage.src = "img/star.png";

    _.filter([this.rating], function(num){ if (num > 3){ return star.appendChild(starImage);}});
      
   

    image.setAttribute('src',this.image_url);


    container.appendChild(image);
    container.appendChild(star);
    bookCon.appendChild(container);

}





// $(document).ready(function(){

//   var callback = function(event) {
//     console.log("Hello");
//   };

//   $('img').click(callback);

//   $('search-box').change(function(){

//   });



// })


// response.items[0].volumeInfo.imageLinks.thumbnail;