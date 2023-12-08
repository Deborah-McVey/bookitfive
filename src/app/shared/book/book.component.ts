import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './book.model';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
 /*  @Output() bookSelected = new EventEmitter<void>(); */

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {}

  onBookSelected() {
    // Tell App Component that someone clicked on a book!
    this.bookshelfService.bookSelected.emit(this.book);
  }
  /* onBookSelected() {
    this.bookSelected.emit();
  } */
}
