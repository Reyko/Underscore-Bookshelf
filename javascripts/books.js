function handleResponse(response) {
  console.log(response.items);


  _.each(response.items, function(book) {

    var img_url = book.volumeInfo.imageLinks.thumbnail;
    var bookCon = document.getElementById('bookshelf');
    var image = document.createElement("img");
    
    var container = document.createElement("div");
    container.setAttribute('class',"wrapper");

    var star = document.createElement("div");
    star.setAttribute("class","hot");
    var starImage = document.createElement("img");
    
    starImage.src = "img/star.png";

    var averageRating = book.volumeInfo.averageRating;

    if (averageRating >= 4){
      star.appendChild(starImage);
    }

    image.setAttribute('src',img_url);
    container.appendChild(image);
    container.appendChild(star);

    bookCon.appendChild(container);

  });

}


"We' ll call this constructor"

// function Book(book_info) {
//   this.image_url = book_info.volumeInfo.imageLinks.thumbnail;
//   this.title = book_info.volumeInfo.title;
//   this.rating = book.volumeInfo.averageRating;
// }


// Book.prototype.add_to_bookshelf = function(){

//   var image = $("img");
//   image.attr("src")


// }








// $(document).ready(function(){

//   var callback = function(event) {
//     console.log("Hello");
//   };

//   $('img').click(callback);

//   $('search-box').change(function(){

//   });



// })


// response.items[0].volumeInfo.imageLinks.thumbnail;