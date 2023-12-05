import "@testing-library/jest-dom";
import { fetchAllProjects, fetchProjectDeviceDetails } from "../data";

beforeEach(() => {
  jest.resetAllMocks();
});

describe("fetchAllProjects", () => {
  test("fetches all projects successfully", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      text: () => Promise.resolve("Mocked projects data"),
    });

    const projects = await fetchAllProjects();
    expect(projects).toBe("Mocked projects data");
  });

  test("handles fetch error", async () => {
    // Mock console.error to avoid logging the error in the test console
    const consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    global.fetch = jest.fn().mockRejectedValue(new Error("Fetch error"));

    await expect(fetchAllProjects()).rejects.toThrow(
      "Failed to fetch the projects data."
    );

    // Restore the original console.error after the test
    consoleErrorMock.mockRestore();
  });
});

describe("fetchProjectDeviceDetails", () => {
  test("fetches project device details successfully", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ projectDetails: "Mocked project details" }),
    });

    const projectDetails = await fetchProjectDeviceDetails("test");
    expect(projectDetails).toEqual({
      projectDetails: "Mocked project details",
    });
  });

  test("handles fetch error", async () => {
    // Mock console.error to avoid logging the error in the test console
    const consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    global.fetch = jest.fn().mockRejectedValue(new Error("Fetch error"));

    await expect(fetchProjectDeviceDetails("test")).rejects.toThrow(
      "Failed to fetch the project details data."
    );

    // Restore the original console.error after the test
    consoleErrorMock.mockRestore();
  });
});
