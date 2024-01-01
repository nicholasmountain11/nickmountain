import { Component } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  
    public projects: Project[] = [
      {
        name: 'CSXL Equipment Checkout',
        projectType: 'Class Project',
        description: 'Full stack web application using Angular, FastAPI, and SQLAlchemy for the CSXL Equipment Checkout system',
        link: 'https://github.com/comp423-23f/csxl-final-team-d9',
        image: 'assets/csxl-logo.png'
      },
      {
        name: 'Spotify Retro Playlist Generator',
        projectType: 'Hackathon',
        description: 'Uses Python to access the Spotify web API to get data about the most popular songs of the 2000s and create an Ultimate 2000s playlist.',
        link: 'https://github.com/nicholasmountain11/spotify',
        image: 'assets/spotify-logo.png'
      }
    ]
}
