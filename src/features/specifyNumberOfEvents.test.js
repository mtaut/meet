import { loadFeature, defineFeature } from "jest-cucumber";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;

    given("the user has not specified a number of events to display", () => {
      AppComponent = render(<App />);
    });

    when("the user views the event list", async () => {
      await waitFor(() => {
        const EventListItems = screen.getAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then(/^(\d+) events should be displayed by default$/, async (arg0) => {});
  });

  test("User can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    given("the user wants to specify the number of events to display", () => {
      render(<App />);
    });

    when("the user inputs a number into the event number textbox", async () => {
      const input = screen.getByRole("textbox");
      await userEvent.clear(input);
      await userEvent.type(input, "10");
    });

    then(
      "the event list should update to show the specified number of events",
      async () => {
        // const EventListItems = await screen.findAllByRole("listitem");
        // expect(EventListItems).toHaveLength(10);
      }
    );
  });
});
