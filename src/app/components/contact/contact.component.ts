import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
open=true
  constructor(private routing:Router) { }

  ngOnInit(): void {
  }
goToContact(){
  this.routing.navigate(['/contact']);
}
openContact(){
this.open=false
console.log('openContact')
}
}
