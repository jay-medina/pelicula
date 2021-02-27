import React from "react";
import { shallow } from "enzyme";

import { App } from "./App";

describe("App", () => {
    it("this is a simple test", () => {
        const result = shallow(<App />);

        expect(result.text()).toEqual("Hello Meow Meow");
    });
});
