import { fetchAllProjects } from "./data";

export async function getAllProjects(): Promise<string[]> {
  const projects = await fetchAllProjects();
  const projectsArray = projects.split("\n").filter(Boolean);

  return projectsArray;
}
