import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClassesComponent } from './classes/classes.component';
import {MatCardModule} from '@angular/material/card';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { HttpClientModule } from '@angular/common/http';
import { WiiGolfComponent } from './wii-golf/wii-golf.component';
import { PlayerWidget } from './widgets/player/player.widget';
import { ProjectWidget } from './widgets/project/project.widget';
import { RoundWidget } from './widgets/round/round.widget';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatTableModule} from '@angular/material/table'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ClassesComponent,
    ProjectWidget,
    WorkExperienceComponent,
    WiiGolfComponent,
    PlayerWidget,
    RoundWidget,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatTabsModule,
    MatExpansionModule,
    MatTableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }