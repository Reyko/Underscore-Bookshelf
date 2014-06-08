function handleResponse(response,title) {

  $( "#searchbox" ).submit(function( event ) {
    var title = document.getElementById("search").value.toLowerCase();
    $(".wrapper").remove();
    handleResponse(response,title);
    event.preventDefault();
  });

  console.log(response.items);
  console.log(title);

  _.each(response.items, function(book) {
    var book = new Book(book);
    bookTitle = book.title.toLowerCase();
    if (title != null && book.title.toLowerCase() == title){
      book.add_to_bookshelf();
    }
    else if(title == null || title == ""){
      book.add_to_bookshelf();
    }
  });
}



function Book(book_info) {
  this.image_url = book_info.volumeInfo.imageLinks.thumbnail;
  this.title = book_info.volumeInfo.title;
  this.rating = book_info.volumeInfo.averageRating;
}


Book.prototype.add_to_bookshelf = function(title){
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
