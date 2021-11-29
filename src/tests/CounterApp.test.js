import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("<CounterApp/>", () => {
  let wrapper = shallow(<CounterApp />); //shallow render

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  const INCREASE_BUTTON_POSITION = 0;
  const DECREASE_BUTTON_POSITION = 2;
  const RESET_BUTTON_POSITION = 1;

  const getCounter = (wrapper) => parseInt(wrapper.find("h2").text().trim());

  const simulateClick = (wrapper, posicion) =>
    wrapper.find("button").at(posicion).simulate("click");

  const simulateClicks = (wrapper, posicion, clicks) => {
    for (let i = 0; i < clicks; i++) simulateClick(wrapper, posicion);
  };

  test("should render CounterApp Component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render CounterApp component with default value=100", () => {
    let wrapper = shallow(<CounterApp value={100} />);

    expect(getCounter(wrapper)).toBe(100);
  });

  test("should increase by 1 when press +1 button", () => {
    const counter1 = getCounter(wrapper);

    simulateClick(wrapper, INCREASE_BUTTON_POSITION);

    const counter2 = getCounter(wrapper);

    expect(counter2).toBe(counter1 + 1);
  });

  test("should decrease by 1 when press -1 button", () => {
    const contador1 = getCounter(wrapper);

    simulateClick(wrapper, DECREASE_BUTTON_POSITION);

    const contador2 = getCounter(wrapper);

    expect(contador2).toBe(contador1 - 1);
  });

  test("should reset value to default when reset button was pressed", () => {
    const value = 100;

    const wrapper = shallow(<CounterApp value={value} />);

    simulateClicks(wrapper, INCREASE_BUTTON_POSITION, 10);

    simulateClick(wrapper, RESET_BUTTON_POSITION);

    const counter = getCounter(wrapper);

    expect(counter).toBe(value);
  });
});
