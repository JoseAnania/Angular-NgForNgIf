import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// importamos el componente HEADER
import { HeaderComponent } from './components/header/header.component';
// importamos el componente BODY
import { BodyComponent } from './components/body/body.component';
// importamos el componente FOOTER
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // declaramos el componente HEADER
    BodyComponent, // declaramos el componente BODY
    FooterComponent, // declaramos el componente FOTER
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
