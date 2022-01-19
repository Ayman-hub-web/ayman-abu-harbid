import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { endianness } from 'os';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
iphone= false
responsive = true

  constructor(private route:Router) {
   }

  ngOnInit(): void {
  }
  toggle(){
    if(this.iphone == false){
      this.iphone= true
      this.responsive= false
    }else{
      this.iphone = false
      this.responsive= true
    }
  }

}
