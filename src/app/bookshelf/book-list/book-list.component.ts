import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  myBooks: Book[] = [];

  @Output() currentSelectedBook = new EventEmitter<Book>();

  handleBookSelected(book: Book) {
    // console.log('Book:', book);
    this.currentSelectedBook.emit(book);
  }
}
