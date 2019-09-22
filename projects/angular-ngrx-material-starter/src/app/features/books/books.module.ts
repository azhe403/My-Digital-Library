import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books/books.component";
import { SharedModule } from "../../shared/shared.module";
import { EditBookComponent } from "./edit-book/edit-book.component";

@NgModule({
  declarations: [BooksComponent, EditBookComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
  ],
  entryComponents: [
    EditBookComponent
  ]
})
export class BooksModule { }
