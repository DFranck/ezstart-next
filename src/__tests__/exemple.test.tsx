import { render, screen } from "@testing-library/react";

// Exemple de composant à tester
const ExampleComponent = () => {
  return <div role="heading">Welcome to the test!</div>;
};

describe("ExampleComponent", () => {
  it("renders a heading", () => {
    render(<ExampleComponent />);
    const heading = screen.getByRole("heading", {
      name: /welcome to the test!/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
