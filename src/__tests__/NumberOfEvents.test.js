import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} />
    );
  });

  test("ensure component contains element with role of textbox", () => {
    const input = NumberOfEventsComponent.queryByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });

  test("default value of the input field is 32", () => {
    const input = NumberOfEventsComponent.getByRole("spinbutton");
    expect(input).toHaveValue(32);
  });

  test("value of number of events changes when user types in it", async () => {
    const input = NumberOfEventsComponent.queryByRole("spinbutton");

    await userEvent.clear(input);
    await userEvent.type(input, "{backspace}{backspace}10");
    expect(input).toHaveValue(10);
  });
});
