var BookMarkerName = document.getElementById("BookMarkerName");
var websiteURL = document.getElementById("websiteURL");
var bodyContant = document.getElementById("bodyContant");
var booksContainer;
  console.log(websiteURL)
if (localStorage.getItem("mybooks") == null) {
  booksContainer = [];
} else {
  booksContainer = JSON.parse(localStorage.getItem("mybooks"));
  displayBooks(booksContainer);
}

function addBooks() {
  var books = {
    bookName: BookMarkerName.value,
    link: websiteURL.value,
  };
  booksContainer.push(books);
  localStorage.setItem("mybooks", JSON.stringify(booksContainer));
  displayBooks(booksContainer);
  clearForm()
}
function clearForm() {
    BookMarkerName.value = "";
    websiteURL.value = "";
}   

function deletedBook(indexBook) {
  booksContainer.splice(indexBook, 1);
  displayBooks(booksContainer);
  localStorage.setItem("mybooks", JSON.stringify(booksContainer));
}
function displayBooks(list) {
  var box = ``;
  for (let i = 0; i < list.length; i++) {
    box += `         <div class="box p-4 row">
    <div class="col-8">
      <h6>${list[i].bookName}</h6>
    </div>
    <div class="col-4">
      <div class="buttons">
        <a
          class="btn btn-info text-light btn-md"
          href="${list[i].link}"
          target="_blank"
          rel="noopener noreferrer"
          >visit</a>
        <button onclick="deletedBook(${i})" class="btn btn-danger btn-md">
          Deleted
        </button>
      </div>
    </div>
  </div> `;
  }
  bodyContant.innerHTML = box;
}

function searchBook(searchTerm) {
    var searchReult = []
    for (let i = 0; i < booksContainer.length; i++) {
        if(booksContainer[i].bookName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) == true){
            searchReult.push(booksContainer[i])
            displayBooks(searchReult);
        }
    }

}




