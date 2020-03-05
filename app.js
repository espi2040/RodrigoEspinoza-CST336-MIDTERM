
let search = function () {

var url = "https://openlibrary.org/api/books?bibkeys=ISBN:" + $("#number-images").val() + "&jscmd=details&callback=mycallback"

 var keyData = "0553283685";
$.ajax({
  url: url,
  dataType: "jsonp",
  success: function(data) {
    console.log(data);
    
    var getData = data["ISBN:" + keyData];
    var title = getData.details.title,
      author = getData.details.authors[0].name,
      pyear = getData.details.publish_date ,
      publisher = getData.details.publishers[0],
     pages = getData.details.number_of_pages,
     isbn = getData.details.isbn_10[0];
     console.log(pages);
    $('.title').text(title);
    $('.author').text(author);
    $('.year').text(pyear);
    $('.pages').text(pages);
    $('.publisher').text(publisher);
    $('.isbn').text(isbn);
    
    
      
  }
  });



}; 