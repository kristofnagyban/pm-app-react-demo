import { Member } from "./member";
import { ProjectLink } from "./project-link";

export interface Project {
  id: number;
  name: string;
  description: string;
  members: Member[];
  links: ProjectLink[];
}
