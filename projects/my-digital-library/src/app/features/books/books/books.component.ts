import { Component, OnInit } from "@angular/core";
import { BooksService } from "../../../shared/services/books.service";
import { GridApi } from "ag-grid-community";
import { MatDialog } from "@angular/material";
import { EditBookComponent } from "../edit-book/edit-book.component";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { selectEffectiveTheme } from "../../../core/settings/settings.selectors";
import { AppState } from "../../../core/core.state";
import { ConsoleService } from "../../../core/console/console.service";

@Component({
  selector: "anms-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements OnInit {

  books = [];
  bookLists;
  gridApi: GridApi;
  gridColumnApi;

  defaultColDefs = {
    sortable: true,
    resizable: true,
    filter: true
  };

  columnDefs = [
    { headerName: "Book Title", field: "bookName" },
    { headerName: "Number of Pages", field: "numberOfPages" },
    { headerName: "Publisher Name", field: "publisherName" },
    { headerName: "Writer Name", field: "writerName" },
    { headerName: "Publish", field: "datePublished" }
  ];

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

  theme$: Observable<string>;

  constructor(
    public bookService: BooksService,
    private dialog: MatDialog,
    private store: Store<AppState>,
    private console: ConsoleService
  ) {

  }

  onColumnResized(data) {
    this.console.log("column resized", data);
  }

  agGridReady(grid) {
    this.gridApi = grid.api;
    this.gridColumnApi = grid.columnApi;
  }

  ngOnInit() {
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));

    this.console.log("theme", this.theme$);

    this.bookService
      .getBooks()
      .subscribe(res => {
        console.log("books", res);

        const rowData = [];
        res.forEach(x => {
          rowData.push(x.payload.doc.data());
        });


        this.console.log("ROWDATA AXHE", rowData);
        this.gridApi.setRowData(rowData);
      });
  }

  onSubmit() {
    this.bookService.form.value.books = this.books;
    const data = this.bookService.form.value;

    this.bookService.createBook(data).then(res => {
      console.log("saved", res);
    });
  }

  openEditBook() {
    this.dialog.open(EditBookComponent);
  }

  deleteBook = data => this.bookService.deleteBook(data);
}
