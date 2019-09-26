import { Component, OnInit } from "@angular/core";
import { BooksService } from "../../../shared/services/books.service";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'anms-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  books = [];

  constructor(
    public bookService: BooksService,
    private dialogRef: MatDialogRef<EditBookComponent>,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.bookService.form.value.books = this.books;
    const data = this.bookService.form.value;

    this.bookService.createBook(data).then(res => {
      console.log('saved', res);
    });
    this.dialogRef.close()
  }

}
