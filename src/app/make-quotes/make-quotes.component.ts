import { Component, OnInit } from '@angular/core';
import {  Quote } from '../quotes';

@Component({
  selector: 'app-make-quotes',
  templateUrl: './make-quotes.component.html',
  styleUrls: ['./make-quotes.component.css']
})
export class MakeQuotesComponent implements OnInit {

  newQuote = new Quote(0, '', '', '', new Date(), 0, 0);

  @Output() addQuote = new EventEmitter<Quote>()

  submitQuote() {

    this.addQuote.emit(this.newQuote);

  }
  resetFields() {
    this.newQuote.author = '';
    this.newQuote.quote = '';
    this.newQuote.user = '';

  }

  constructor() { }

  ngOnInit(): void {
  }

}
