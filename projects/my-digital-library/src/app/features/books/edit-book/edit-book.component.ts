import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConsoleService } from '../../../core/console/console.service';
import { BooksService } from '../../../shared/services/books.service';

@Component({
  selector: 'anms-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // providers: [
  //   {provide: DateAdapter, useClass: AppDateAdapter},
  //   {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  // ]
})
export class EditBookComponent implements OnInit {
  books = [];
  selectedBooks;
  editorTitle = 'Add new Book';
  idRow;

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    public bookService: BooksService,
    private console: ConsoleService,
    private dialogRef: MatDialogRef<EditBookComponent>
  ) {
    if (data) {
      this.selectedBooks = data;
      this.console.log('selected edit', this.selectedBooks);

      this.editorTitle = 'Edit Book';

      this.bookService.formGroup.setValue({
        bookName: this.selectedBooks[0].bookName,
        writerName: this.selectedBooks[0].writerName,
        publisherName: this.selectedBooks[0].publisherName,
        numberOfPages: this.selectedBooks[0].numberOfPages,
        datePublished: this.selectedBooks[0].datePublished
      });

      this.idRow = this.selectedBooks[0].id;
    } else {
      bookService.formGroup.reset();
    }
  }

  get formsCtl() {
    return this.bookService.formGroup.controls;
  }

  ngOnInit() {
  }

  onSubmit() {
    // this.bookService.formGroup.value.books = this.books;
    const data = this.bookService.formGroup.value;

    if (this.idRow == null) {
      this.bookService.createBook(data).then(res => {
        ConsoleService.log2('save book', res);
      });
    } else {
      this.bookService.updateBook(data, this.idRow).then(res => {
        ConsoleService.log2('update book', res);
      });
    }
    this.dialogRef.close();
  }

  onReset() {
    ConsoleService.log2('Form Reseted');
    this.bookService.formGroup.reset();
    this.idRow = null;
    this.editorTitle = 'Add new Book';
  }
}
