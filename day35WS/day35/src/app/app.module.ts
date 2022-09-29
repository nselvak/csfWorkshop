import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooklistComponent } from './components/booklist.component';
import { BookService } from './service/BookService';
import { BookdisplayComponent } from './components/bookdisplay.component';

const appRoutes: Routes = [
  {path: '', component: BooklistComponent},
  {path:'books/:book_id', component:BookdisplayComponent},
  {path: '**', redirectTo:'/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookdisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
