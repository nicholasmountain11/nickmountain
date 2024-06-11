import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClassesComponent } from './classes/classes.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WiiGolfComponent } from './wii-golf/wii-golf.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'classes', component: ClassesComponent},
  { path: 'work-experience', component: WorkExperienceComponent},
  { path: 'wii-golf', component: WiiGolfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }