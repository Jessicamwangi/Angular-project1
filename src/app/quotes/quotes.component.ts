import { Component, OnInit } from '@angular/core';
import {  Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    Quotes: Quote[] = [
    new Quote(0, "If you want to live a happy life, tie it to a goal, not to people or things.", "Albert Einstein","John Jacob", new Date(2022, 2, 5), 0, 0),
    new Quote(1, "Money and success don’t change people; they merely amplify what is already there.", "Will  Smith","Rebecca ", new Date(2022, 2, 6), 0, 0),
    new Quote(2, "Turn your wounds into wisdom.",  "Oprah Winfrey","Hosea" ,new Date(2022, 2, 7), 0, 0),
    new Quote(3, "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking",  "Steve Jobs","Felix", new Date(2022, 2, 8), 0, 0),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
