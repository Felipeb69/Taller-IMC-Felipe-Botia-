import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { ImcCalculatorComponent } from './imc-calculator/imc-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ImcCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Agrega FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }