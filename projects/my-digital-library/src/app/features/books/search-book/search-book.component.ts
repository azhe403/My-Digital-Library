import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../shared/services/books.service';
import { ConsoleService } from '../../../core/console/console.service';

@Component({
  selector: 'anms-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

  resultBooks;
  searchKeyword;

  constructor(public bookService: BooksService) {
    this.searchBook()
  }

  searchBook() {
    if (this.searchKeyword) {
      ConsoleService.log2('search keyword', this.searchKeyword);

      this.bookService.filterBooks(this.searchKeyword, this.searchKeyword).subscribe(res => {
        this.resultBooks = res;
        ConsoleService.log2('search book', res);
      });
    } else {
      this.bookService.getBooks().subscribe(res => this.resultBooks = res);
    }
  }

  ngOnInit() {
  }

}
