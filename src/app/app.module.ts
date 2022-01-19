import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { DataProtectionComponent } from './components/data-protection/data-protection.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { SuccessComponent } from './components/success/success.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CvComponent } from './components/cv/cv.component';
import { StagesoflifeComponent } from './components/stagesoflife/stagesoflife.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    SkillsComponent,
    ImprintComponent,
    DataProtectionComponent,
    FooterComponent,
    AboutComponent,
    NotfoundpageComponent,
    SuccessComponent,
    ProjectsComponent,
    CvComponent,
    StagesoflifeComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
