import { Feed } from "@/types/ProjectDetails";
import { fetchAllProjects, fetchProjectDeviceDetails } from "./data";
import { TableDetails } from "@/types/TableDetails";

type ProjectDetailsProps = {
  projectFeeds: Feed[];
  projectNumbers: number;
};
const SET_LIMIT_FEED_RETRIEVAL = 10;

export async function getAllProjects(): Promise<string[]> {
  const projects = await fetchAllProjects();
  const projectsArray = projects.split("\n").filter(Boolean);

  return projectsArray;
}

export async function getProjectDetails(
  project: string
): Promise<ProjectDetailsProps> {
  const projectsDetails = await fetchProjectDeviceDetails(project);
  const projectFeeds = projectsDetails.feeds || [];
  return { projectFeeds, projectNumbers: projectFeeds.length };
}

export function getTableDetails(projectDetails: Feed[]): TableDetails[] {
  const details = [];

  if (!projectDetails.length) return [];

  for (let i = 0; i < SET_LIMIT_FEED_RETRIEVAL; i++) {
    const { device_id, gps_lat, gps_lon, time } = projectDetails[i];
    details.push({ device_id, gps_lat, gps_lon, time });
  }

  return details;
}
