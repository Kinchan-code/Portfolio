import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutMe from "@/app/(contents)/about/page";

describe("AboutMe", () => {
  it("renders a heading", () => {
    render(<AboutMe />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
