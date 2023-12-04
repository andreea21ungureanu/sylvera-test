import { Feed, ProjectDetails } from "@/types/ProjectDetails";
import { fetchAllProjects, fetchProjectDeviceDetails } from "./data";
import { TableDetails } from "@/types/TableDetails";

const SET_LIMIT_FEED_RETRIEVAL = 10;

export async function getAllProjects(): Promise<string[]> {
  const projects = await fetchAllProjects();
  const projectsArray = projects.split("\n").filter(Boolean);

  return projectsArray;
}

export async function getProjectDetails(project: string): Promise<Feed[]> {
  const projectsDetails = await fetchProjectDeviceDetails(project);

  return projectsDetails?.feeds || [];
}

export function getTableDetails(projectDetails: Feed[]): TableDetails[] {
  const details = [];
  if (!projectDetails.length) throw Error();

  for (let i = 0; i < SET_LIMIT_FEED_RETRIEVAL; i++) {
    const { device_id, gps_lat, gps_lon, time } = projectDetails[i];
    details.push({ device_id, gps_lat, gps_lon, time });
  }

  return details;
}
