import { render, screen, waitFor } from "@testing-library/react";
import { TableHeader } from "../TableHeader";
import { getProjectDetails } from "@/lib/getAllProjects";
import "@testing-library/jest-dom";

jest.mock("../../../lib/getAllProjects");

describe("TableHeader", () => {
  test("renders error message when projectNumbers is 0", async () => {
    (getProjectDetails as jest.Mock).mockResolvedValueOnce({
      projectNumbers: 0,
    });

    render(
      <TableHeader
        title="Test Title"
        description="Test Description"
        projectName="testProject"
      />
    );

    expect(await screen.findByLabelText("Error")).toBeInTheDocument();
    expect(
      screen.getByText("There are 0 entries on this page")
    ).toBeInTheDocument();
  });

  test("renders table header when projectNumbers is not 0", async () => {
    (getProjectDetails as jest.Mock).mockResolvedValueOnce({
      projectNumbers: 5,
    });

    render(
      <TableHeader
        title="Test Title"
        description="Test Description"
        projectName="testProject"
      />
    );

    expect(await screen.findByLabelText("Table Header")).toBeInTheDocument();
    expect(
      screen.getByText("Test Title contains 5 entries.")
    ).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });
});
