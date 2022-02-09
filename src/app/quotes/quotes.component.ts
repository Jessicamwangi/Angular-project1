import { Component, OnInit } from '@angular/core';
import {  Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  isComplete= true;


    Quotes: Quote[] = [
    new Quote(0, "If you want to live a happy life, tie it to a goal, not to people or things.", "Albert Einstein","John Jacob", new Date(2022, 2, 5), 0, 0),
    new Quote(1, "Money and success don’t change people; they merely amplify what is already there.", "Will  Smith","Rebecca ", new Date(2022, 2, 6), 0, 0),
    new Quote(2, "Turn your wounds into wisdom.",  "Oprah Winfrey","Hosea" ,new Date(2022, 2, 7), 0, 0),
    new Quote(3, "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking",  "Steve Jobs","Felix", new Date(2022, 2, 8), 0, 0),

  ];
  getCurrentId(){
    return this.Quotes.length +1
  }
  newQuote( quote:any) {
    quote.id = this.getCurrentId();
    quote.author= quote.author;
    quote.title=quote.title;
    quote.quote=quote.quote;
    quote.submitedBy=quote.submitedBy;
    this.Quotes.unshift(quote)
  }
  upVote(quote:any){
    quote.upvotes= quote.upvotes+=1;
    console.log('quote.upvote')
  }
  downVote(quote:any){
    quote.downvotes = quote.downvotes+=1;
  }
  quoteDelete(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.Quotes[index].quote}?`)

      if (toDelete){
        this.Quotes.splice(index,1)
      }
    }
  }
  bestmQuote() {}
  deleteQuote ($event:any, mIndex:any) {
  }
  
  constructor() { }
  ngOnInit(): void {
  }


}
