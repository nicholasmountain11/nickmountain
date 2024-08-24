import { Component } from '@angular/core';
import { Project } from '../models/project.model';

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
      technologies: new Set<string>(['python', 'typescript', 'restapi'])
    },
    {
      name: 'Spotify Retro Playlist Generator',
      projectType: 'Carolina Data Challenge 2023',
      description: 'Uses Python to access the Spotify web API to get data about the most popular songs of the 2000s and create an Ultimate 2000s playlist.',
      link: 'https://github.com/nicholasmountain11/spotify',
      technologies: new Set<string>(['python', 'webapi'])
    },
    {
      name: 'Dear Darwin Instagram Bot',
      projectType: 'Personal Project',
      description: 'Instagram bot that uses Python to choose a random Taylor Swift lyric and make it about Darwin Nunez.',
      link: 'https://github.com/nicholasmountain11/nunez_instagram',
      technologies: new Set<string>(['python'])
    },
    {
      name: 'Farming Simulator Clicker App',
      projectType: 'HackNC 2023',
      description: 'Clicking based farming simulator app built with Swift.',
      link: 'https://github.com/nicholasmountain11/farm-simulator',
      technologies: new Set<string>(['swift', 'mobile'])
    },
    {
      name: 'Command Line Meteorologist',
      projectType: 'Personal Project',
      description: 'Python script that uses web scraping to describe the weather in a city of your choice.',
      link: 'https://github.com/nicholasmountain11/weather',
      technologies: new Set<string>(['python', 'webscraping'])
    },
    {
      name: 'This Website!',
      projectType: 'Personal Project',
      description: 'Personal website built with Angular for me to experiment with web development and show off things that I have done and learned.',
      link: 'https://github.com/nicholasmountain11/nickmountain/',
      technologies: new Set<string>(['typescript', 'angular', 'webdev'])
    }
  ]

  technologyTypes: string[];
  selectedTechTypes: Set<string> = new Set<string>;

  constructor() {
    let techCount: { [type: string]: number } = {};
    this.projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        if (tech in techCount) {
          techCount[tech] += 1;
        } else {
          techCount[tech] = 1;
        }
      })
    })
    this.technologyTypes = Object.entries(techCount).sort((a, b) => b[1] - a[1]).map(tech => tech[0]);
  }

  toggleSelection(tech: string) {
    if (tech in this.selectedTechTypes) {
      this.selectedTechTypes.delete(tech)
    } else {
      this.selectedTechTypes.add(tech)
    }
  }

}
