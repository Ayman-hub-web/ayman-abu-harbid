import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stagesoflife',
  templateUrl: './stagesoflife.component.html',
  styleUrls: ['./stagesoflife.component.scss']
})
export class StagesoflifeComponent implements OnInit {
  stages= ['Study at the University of Paderborn', 'Position as System Engineer','Job as Lecturer', 'Job as Trainer/Lecturer']
  stagesImages= ['university.png', 'telefonica.png', 'alQuds.jfif', 'sbh.jfif']
  links =['https://www.uni-paderborn.de/', 'https://www.telefonica.de/home-corporate-en.html','https://www.qou.edu/', 'https://s-b-h.de/sbh-vor-ort/sbh-nord/standorte-sbh-nord/hannover-tannenbergallee']
  constructor() { }

  ngOnInit(): void {
  }

}
