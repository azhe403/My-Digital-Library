import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { SearchBookComponent } from './search-book/search-book.component';

@NgModule({
  declarations: [
    BooksComponent,
    SearchBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ],
  entryComponents: [
    EditBookComponent
  ]
})
export class BooksModule {
}
