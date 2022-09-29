import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register.component';
import { UploadComponent } from './components/upload.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from './material.module';


const appRoutes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'upload', component: UploadComponent },
  { path: '**', redirectTo: '/',pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes, { useHash: true}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
