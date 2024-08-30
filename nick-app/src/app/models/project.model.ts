/**
 * Project model provides necessary information for the description of a project.
 * 
 * @property {string} name - The name of the Project
 * @property {string} projectType - The type of the Project, ex) personal project or class project.
 * @property {string} description - A short description of the projects purpose and implimentation.
 * @property {string} link - A link to the gitHub page of the Project.
 * @property {Set<string>} technologies - A set of the technologies used to build the Project.
 */

export interface Project {
    /** The name of the Project */
    name: string;
    /** The type of the Project, ex) personal project or class project */
    projectType: string;
    /** A short description of the projects purpose and implimentation */
    description: string;
    /** A link to the gitHub page of the Project */
    link: string;
    /** A set of the technologies used to build the Project */
    technologies: Set<string>;
}