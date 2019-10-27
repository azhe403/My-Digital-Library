import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';
import { GridApi } from 'ag-grid-community';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ConsoleService } from '../../../core/console/console.service';
import { AppState } from '../../../core/core.state';
import { selectEffectiveTheme } from '../../../core/settings/settings.selectors';
import { BooksService } from '../../../shared/services/books.service';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { Datetime } from '../../../core/datetime/datetime';

@Component({
  selector: 'anms-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements OnInit {
  books = [];
  bookLists;
  gridApi: GridApi;
  gridColumnApi;
  selectedBooks;
  swal: any;

  defaultColDefs = {
    sortable: true,
    resizable: true,
    filter: true
  };

  columnDefs = [
    { headerName: 'ID', field: 'id', hide: true },
    { headerName: 'Book Title', field: 'bookName' },
    { headerName: 'Number of Pages', field: 'numberOfPages', width: 135 },
    { headerName: 'Publisher Name', field: 'publisherName' },
    { headerName: 'Writer Name', field: 'writerName' },
    {
      headerName: 'Publish',
      field: 'datePublished',
      valueFormatter: Datetime.formatDate
    }
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
    private console: ConsoleService,
    private swalLoader: SweetAlert2LoaderService
  ) {
  }

  onColumnResized(data) {
    this.console.log('column resized', data);
  }

  agGridReady(grid) {
    this.gridApi = grid.api;
    this.gridColumnApi = grid.columnApi;
  }

  ngOnInit() {
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));

    this.console.log('theme', this.theme$);

    this.bookService.getBooks().subscribe(res => {
      console.log('books', res);

      const rowData = [];
      res.forEach(x => {
        let row = {};
        row = x.payload.doc.data();
        row['id'] = x.payload.doc.id;

        // this.console.log(row);
        // this.console.log(x.payload.doc.id);

        rowData.push(row);
      });

      this.console.log('row_data', rowData);
      this.gridApi.setRowData(rowData);
    });
  }

  onSubmit() {
    this.bookService.formGroup.value.books = this.books;
    const data = this.bookService.formGroup.value;

    this.bookService.createBook(data).then(res => {
      console.log('saved', res);
    });
  }

  openEditBook(data) {
    ConsoleService.log2('open edit', data);
    if (data == 'add') {
      this.dialog.open(EditBookComponent);
    } else {
      if (this.selectedBooks != null) {
        this.dialog.open(EditBookComponent);
      } else {
        Swal.fire({
          title: 'Delete row',
          text: 'Please select row to delete',
          type: 'warning'
        }).then(res => ConsoleService.log2(res));
      }
    }
  }

  onSelectionChanged(data) {
    this.console.log('select data', data);

    this.selectedBooks = this.gridApi.getSelectedRows();
    this.console.log('selected', this.selectedBooks[0]);

    if (this.selectedBooks.length > 0) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = this.selectedBooks;
      this.dialog.open(EditBookComponent, dialogConfig);
    }
  }

  async deleteSelectedBook() {
    const swal = await this.swalLoader.swal;

    if (this.selectedBooks) {
      await swal
        .fire({
          title: 'Are you sure?',
          text:
            'Once deleted, you will not be able to recover this imaginary file!',
          type: 'warning',
          showConfirmButton: true,
          showCancelButton: true
        })
        .then(willDelete => {
          if (willDelete.value) {
            swal.fire('Success');
            this.selectedBooks.forEach(selected => {
              this.console.log('deleted', selected.id);
              this.bookService
                .deleteBookById(selected.id)
                .then(res => this.console.log('delete', res));
            });
          } else {
            swal.fire({
              title: 'Delete row',
              text: 'Delete cancelled',
              type: 'info'
            });
          }

          console.log(willDelete);
        });
    } else {
      await swal.fire({
        title: 'Delete row',
        text: 'Please select row to delete',
        type: 'warning'
      });
      this.console.log('nothing to delete');
    }
  }

  deleteBook = data => this.bookService.deleteBook(data);
}
