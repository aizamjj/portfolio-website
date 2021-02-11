import React from "react";
import { shallow } from "enzyme";

import App from "../../components/App";
import { PortfolioProvider } from "../../context/context";

describe("The App component test suite", () => {
  it("should render component", () => {
    expect(shallow(<App />).contains(
      <PortfolioProvider>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <SpeedDial />
        <Footer />    
      </PortfolioProvider>
    )).toBe(true);
  });
});
