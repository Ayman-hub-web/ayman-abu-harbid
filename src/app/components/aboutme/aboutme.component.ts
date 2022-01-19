import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  images= [
    'flight.png', 'football.png', 'heart1.png', 'search1.png'
  ];
  headlines= [
    'I have worked abroad for several years. ', "I'm athletic and as a computer scientist it's important to do sports alongside my job", 'I am constantly trying to improve my skills. As a computer scientist, you always have to be up to date', 'i am open and get to know new cultures. In addition to German, I also speak English and Arabic']
  ;
  constructor() { }

  ngOnInit(): void {
  }

}
