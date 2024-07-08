import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("Header component", () => {
  test("renders the logo image with correct src and alt attributes", () => {
    render(<Header />);

    const logoImg = screen.getByAltText("URBN User Lookup");
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute("src", expect.stringContaining("logo.svg"));
    expect(logoImg).toHaveAttribute("alt", "URBN User Lookup");
  });
});
