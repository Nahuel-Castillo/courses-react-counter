// import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import FirstApp from "../PrimeraApp";

describe("<FirstApp/>", () => {
  test("should render <FirstApp/> correctly", () => {
    const greeting = "Hello world!!";

    const wrapper = shallow(<FirstApp greeting={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const greeting = "Hello world!!";
    const subtitle = "Bye";

    const wrapper = shallow(
      <FirstApp greeting={greeting} subtitle={subtitle} />
    );

    const pText = wrapper.find("p").text();

    expect(pText).toBe(subtitle);
  });
});
