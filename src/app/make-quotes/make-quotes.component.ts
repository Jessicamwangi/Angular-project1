import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import {  Quote } from '../quote';


@Component({
  selector: 'app-make-quotes',
  templateUrl: './make-quotes.component.html',
  styleUrls: ['./make-quotes.component.css']
})
export class MakeQuotesComponent implements OnInit {

  newQuote = new Quote(0, '', '', '', new Date(), 0, 0);


  @Output() addQuote = new EventEmitter<Quote>()

  submitQuote() {
    console.log(this.newQuote)
    this.addQuote.emit(this.newQuote);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
