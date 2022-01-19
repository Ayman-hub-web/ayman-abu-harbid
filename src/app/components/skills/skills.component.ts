import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
skills= ['Java Script', 'Angular','HTML/CSS', 'SCRUM', 'Git', 'Design Thinking', 'Rest API', 'Test Automation', 'Databases']
skillsImages= ['javascript.png', 'angu.png', 'html-css.png', 'scrum.png', 'github-fill.png', 'design.png', 'api.png', 'test.png', 'database.png']
  constructor() { }

  ngOnInit(): void {
  }

}
