import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AuthGuardService } from '../../core/core.module';
import { SearchBookComponent } from './search-book/search-book.component';

const routes: Routes = [
  {
    path: 'view',
    component: BooksComponent,
    canActivate: [AuthGuardService]
  }, {
    path: 'search',
    component: SearchBookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
