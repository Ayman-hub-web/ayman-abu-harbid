import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';
import { CvComponent } from './components/cv/cv.component';
import { DataProtectionComponent } from './components/data-protection/data-protection.component';
import { HomeComponent } from './components/home/home.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'data-protection', component: DataProtectionComponent},
  {path: 'about', component:AboutmeComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'cv', component: CvComponent},
  {path: 'aboutme', component:AboutmeComponent},
  {path: '**', component: NotfoundpageComponent},
  {path: '##', component: NotfoundpageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
