import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClassesComponent } from './classes/classes.component';
import { MatCardModule } from '@angular/material/card';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { HttpClientModule } from '@angular/common/http';
import { WiiGolfComponent } from './wii-golf/wii-golf.component';
import { PlayerWidget } from './widgets/player/player.widget';
import { ProjectWidget } from './widgets/project/project.widget';
import { RoundWidget } from './widgets/round/round.widget';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { NewPlayerWidget } from './widgets/new-player/new-player.widget';
import { ReactiveFormsModule } from '@angular/forms';
import { NewRoundWidget } from './widgets/new-round/new-round.widget';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RoundWithNameWidget } from './widgets/round-with-name/round-with-name.widget';
import { MatChipsModule } from '@angular/material/chips';


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
    NewPlayerWidget,
    NewRoundWidget,
    RoundWithNameWidget,
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
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }