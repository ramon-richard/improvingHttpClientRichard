import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http

@NgModule({
  declarations: [
    AppComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,HttpClientModule //Aggiungi il modulo http qui 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
