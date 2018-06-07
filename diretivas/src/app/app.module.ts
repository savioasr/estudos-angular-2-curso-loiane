import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightMouseDirective,
    FundoAmareloDirective,
    HighlightDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
