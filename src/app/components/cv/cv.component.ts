import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  infos= ['Study at the University of Paderborn', 'Position as System Engineer','Job as Lecturer', 'Job as Trainer/Lecturer']
  //Images= ['university.png', 'telefonica.png', 'alQuds.jfif', 'sbh.jfif']
   links =['https://www.uni-paderborn.de/', 'https://www.telefonica.de/home-corporate-en.html','https://www.qou.edu/', 'https://s-b-h.de/sbh-vor-ort/sbh-nord/standorte-sbh-nord/hannover-tannenbergallee']
  constructor() { }

  // images= [
  //   'flight.png', 'football.png', 'heart3.png', 'search.png'
  // ];
  // headlines= [
  //   'Ich libe die Sonne und das Meer und deswegen verreise ich so oft es geht', 'Ich bin mit leib und Seele Programmiere und sorge dafor daß ich immer auf dem neusten Stand bin.','Ich libe die Sonne und Meer und deswegen verreise ich so oft es geht','Ich libe die Sonne und Meer und deswegen verreise ich so oft es geht','Ich bin immer auf der Suche nach neuen Aufgaben, neue Projekte, neue Featutres']
  // ;
  // currentImage= 0;
  // showImage = true;

  ngOnInit(){
    // this.updateImage();
  }
  // updateImage(){
  //   setInterval(()=>{
  //     this.currentImage++;
  //     this.currentImage = this.currentImage % this.images.length;
  //     this.showImage = false;
  //     setTimeout(() => {
  //       this.showImage = true;
  //     }, 10);
  //   }, 8000);
  // }

}
