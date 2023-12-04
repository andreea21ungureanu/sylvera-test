export async function fetchAllProjects() {
  try {
    const request = await fetch(
      "https://pm25.lass-net.org/API-1.0.0/project/all/"
    );

    const projects = request.text();

    return projects;
  } catch (error) {
    console.error("Fetch error", error);
    throw new Error("Failed to fetch the projects data.");
  }
}
