import { render, screen } from "@testing-library/react";
import { TableHeader } from "../TableHeader";
import "@testing-library/jest-dom";

describe("TableHeader", () => {
  test("renders error message when projectNumbers is 0", async () => {
    render(
      <TableHeader
        title="Test Title"
        description="Test Description"
        projectNumbers={0}
      />
    );

    expect(screen.getByLabelText("Error")).toBeInTheDocument();
    expect(
      screen.getByText("There are 0 entries on this page")
    ).toBeInTheDocument();
  });

  test("renders table header when projectNumbers is not 0", async () => {
    render(
      <TableHeader
        title="Test Title"
        description="Test Description"
        projectNumbers={5}
      />
    );

    expect(await screen.findByLabelText("Table Header")).toBeInTheDocument();
    expect(
      screen.getByText("Test Title contains 5 entries.")
    ).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });
});
