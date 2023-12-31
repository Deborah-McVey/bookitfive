import { Component, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() book: Book;
  myBooks: Book[] = [];

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    // Use the Service to set local "myBooks" array to Service/Global "myBooks" array
    this.myBooks = this.bookshelfService.getBooks();
    // Listen for changes on the global "myBooks" array and update the local version
    this.bookshelfService.bookListChanged.subscribe((books: Book[]) => {
      this.myBooks = books;
    });
  }

  onRemoveBook(idx) {
    this.bookshelfService.removeBook(idx);
  }
}
 /*  @Output() currentSelectedBook = new EventEmitter<Book>();

 handleBookSelected(book: Book) {
    console.log('Book:', book);
    this.currentSelectedBook.emit(book); */
