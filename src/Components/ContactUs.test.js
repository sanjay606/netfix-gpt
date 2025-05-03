import ContactUs from "./ContactUs"; // Corrected component name (no spaces)
import { render, screen } from '@testing-library/react';

describe('Contact', () => {

  it("checking if the button is working or not", () => {
    render(<ContactUs />);
  
    const button = screen.getByRole("button");
  
    expect(button).toBeInTheDocument(); // Corrected method name
  });
  

});
