import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { MakeQuotesComponent } from './make-quotes/make-quotes.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightPopularQuoteDirective } from './highlight-popular-quote.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    MakeQuotesComponent,
    DateCountPipe,
    HighlightPopularQuoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
