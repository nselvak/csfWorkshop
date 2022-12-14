import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { GiphyComponent } from './components/giphy.component';
import { GiphyService } from './service/giphySvc';
import { DisplayComponent } from './components/display.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
