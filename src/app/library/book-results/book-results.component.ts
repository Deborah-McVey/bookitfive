import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { LibraryService } from '../library.service';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent implements OnInit {
  allBooks: Book[] = [
  /*   new Book(
      'Book of Testing',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Book of Testing',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Book of Testing',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ) */
  ];

  constructor( private bookshelfService: BookshelfService,
  private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.allBooks = this.libraryService.getBooks();
  }

  onSaveBook(book: Book) {
    return this.bookshelfService.saveBook(book);
  }
}
