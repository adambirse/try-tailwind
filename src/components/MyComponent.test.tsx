import { mount } from "enzyme";
import React from "react";

import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("should render without throwing an error", function () {
    mount(<MyComponent />);
  });
});
