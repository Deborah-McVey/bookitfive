import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookshelfService {
  private myBooks: Book[] = [
    new Book(
        'Book of Testing',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
        'Testing Title 2',
        'Nolan Hovis',
        'Science',
        'https://source.unsplash.com/50x50/?science,book'
    ),
    new Book(
        'Fantasy Test',
        'German Cruz',
        'Non-Fiction',
        'https://source.unsplash.com/50x50/?fantasy,book'
    ),
    new Book(
        'Fantasy Test',
        'Lex Pryor',
        'Math',
        'https://source.unsplash.com/50x50/?math,book'
    ),
];

bookSelected = new EventEmitter<Book>();
bookListChanged = new EventEmitter<Book[]>();

  // Read
getBooks() {
  return this.myBooks.slice();
}

// Create
/* saveBook(book: Book) {
  this.myBooks.push(book)
}; */

/* saveBook(book: Book) {
  this.myBooks.push(book)
  this.bookListChanged.emit(this.myBooks.slice())
} */
  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookSelected.next(book);
    this.bookListChanged.next(this.myBooks.slice());
}

// Delete
/* removeBook(idx: number) {
  if (idx !=== -1) {
      // We have a book at that index
      this.myBooks.splice(idx, 1)
  }
} */

/* removeBook(idx: number) {
  if (idx !=== -1) {
      // We have a book at that index
      this.myBooks.splice(idx, 1)
      this.bookListChanged.emit(this.myBooks.slice());
  }
} */

removeBook(idx: number) {
    if (idx !== -1) {
      // We found a book at that index
      this.bookSelected.next(this.myBooks[idx]);
      this.myBooks.splice(idx, 1);
      this.bookListChanged.next(this.myBooks.slice());
    }
}
  constructor() {}
}
