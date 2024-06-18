import { Component, Input } from "@angular/core";
import { Project } from "../../project.model";

@Component({
    selector: 'project-widget',
    templateUrl: './project.widget.html',
    styleUrls: ['./project.widget.css']
})
export class ProjectWidget {

  /** Inputs and outputs go here */

  @Input() project!: Project;

  /** Constructor */
  constructor() { }
}