import { Component, Input } from "@angular/core";
import { Project } from "../../models/project.model";

@Component({
  selector: 'project-widget',
  templateUrl: './project.widget.html',
  styleUrls: ['./project.widget.css']
})
export class ProjectWidget {

  /** Project object to display information about */
  @Input() project!: Project;

  constructor() { }
}