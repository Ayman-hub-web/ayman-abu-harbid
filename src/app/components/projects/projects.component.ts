import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  allProjects= ['pokemon', 'kanban','El-Pollo-Loco', 'Porto-Folio']
  jsProjects= ['pokemon', 'kanban','El-Pollo-Loco']
  ngProjects= ['Porto-Folio']

  allImages= ['poke.png', 'kan.jfif', 'elpolloloco.png', 'porto.png']
  jsImages = ['poke.png', 'kan.jfif', 'elpolloloco.png']
  ngImages = ['porto.png']

  allTechs =['HTML/CSS & Javascript & API', 'HTML/CSS & Javascript','HTML/CSS & Javascript OOP ', 'angular']
  jsTchs =['HTML/CSS & Javascript & API', 'HTML/CSS & Javascript','HTML/CSS & Javascript OOP ']
  ngTechs =['angular']

  all= true
  js= false
  ng= false
  constructor() { }

  ngOnInit(): void {
  }

  clickAll(){
    this.all = true
    this.js = false
    this.ng = false
  }
  clickJs(){
    this.js = true
    this.ng = false
    this.all = false
  }
  clickNg(){
    this.ng = true
    this.js = false
    this.all = false
  }

}
