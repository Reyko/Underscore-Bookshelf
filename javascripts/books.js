function handleResponse(response) {
  console.log(response.items);


  _.each(response.items, function(book) {

    var img_url = book.volumeInfo.imageLinks.thumbnail;
    var bookCon = document.getElementById('bookshelf');
    var image = document.createElement("img");
    image.setAttribute('src',img_url);
    bookCon.appendChild(image);

  });

}



// response.items[0].volumeInfo.imageLinks.thumbnail;