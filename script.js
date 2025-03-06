function displayDetails(bookId) {
    let book = document.getElementById(bookId);
    book.style.visibility = (book.style.visibility === "visible") ? "hidden" : "visible"; //Ternary Operator
}