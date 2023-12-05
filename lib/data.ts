import { ProjectDetails } from "@/types/ProjectDetails";

export async function fetchAllProjects() {
  try {
    const request = await fetch(
      "https://pm25.lass-net.org/API-1.0.0/project/all/",
      {
        next: {
          revalidate: 60 * 60 * 24, // revalidate every 24 hours
        },
      }
    );

    const projects = request.text();

    return projects;
  } catch (error) {
    console.error("Fetch error", error);
    throw new Error("Failed to fetch the projects data.");
  }
}

export async function fetchProjectDeviceDetails(
  project: string
): Promise<ProjectDetails> {
  try {
    const request = await fetch(
      `https://pm25.lass-net.org/API-1.0.0/project/${project}/latest/`,
      {
        next: {
          revalidate: 60 * 60 * 24, // revalidate every 24 hours
        },
      }
    );

    const projectDetails = await request.json();
    return projectDetails;
  } catch (error) {
    console.error("Fetch error", error);
    throw new Error("Failed to fetch the project details data.");
  }
}
