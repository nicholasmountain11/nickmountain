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
        description: 'Full stack web application using Angular, FastAPI, and SQLAlchemy for the CSXL Equipment Checkout system.',
        link: 'https://github.com/nicholasmountain11/csxl-final-team-d9',
      },
      {
        name: 'Spotify Retro Playlist Generator',
        projectType: 'Carolina Data Challenge 2023',
        description: 'Uses Python to access the Spotify web API to get data about the most popular songs of the 2000s and create an Ultimate 2000s playlist.',
        link: 'https://github.com/nicholasmountain11/spotify',
      },
      {
        name: 'Dear Darwin Instagram Bot',
        projectType: 'Personal Project',
        description: 'Instagram bot that uses Python to choose a random Taylor Swift lyric and make it about Darwin Nunez.',
        link: 'https://github.com/nicholasmountain11/nunez_instagram',
      },
      {
        name: 'Farming Simulator Clicker App',
        projectType: 'HackNC 2023',
        description: 'Clicking based farming simulator app built with Swift.',
        link: 'https://github.com/nicholasmountain11/farm-simulator'
      },
      {
        name: 'Command Line Meteorologist',
        projectType: 'Personal Project',
        description: 'Python script that uses web scraping to describe the weather in a city of your choice.',
        link: 'https://github.com/nicholasmountain11/weather'
      },
      {
        name: 'This Website!',
        projectType: 'Personal Project',
        description: 'Personal website built with Angular for me to experiment with web development and show off things that I have done and learned.',
        link: 'https://github.com/nicholasmountain11/nickmountain/'
      }
    ]
}
