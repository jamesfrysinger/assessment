import { render, screen } from "@testing-library/react";
import ResultCard from "../../components/ResultCard";

const mockUser = {
  id: "1",
  createdAt: "",
  name: "James Frysinger",
  title: "Front-End Engineer",
  email: "frysingerjames@gmail.com",
  avatar: "https://domain.com/avatar.jpg",
};

describe("ResultCard component", () => {
  test("renders user details correctly", () => {
    render(<ResultCard user={mockUser} />);

    // Check if the user's name is rendered
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();

    // Check if the user's title is rendered
    expect(screen.getByText(mockUser.title)).toBeInTheDocument();

    // Check if the user's email is rendered and has the correct href
    const emailLink = screen.getByText(mockUser.email);
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", `mailto:${mockUser.email}`);

    // Check if the user's avatar is rendered with the correct src and alt attributes
    const avatarImg = screen.getByAltText(mockUser.name);
    expect(avatarImg).toBeInTheDocument();
    expect(avatarImg).toHaveAttribute("src", mockUser.avatar);
  });
});
