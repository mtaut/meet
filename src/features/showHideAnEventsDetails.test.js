import { loadFeature, defineFeature } from "jest-cucumber";
import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { getEvents } from "../api";
import Event from "../components/Event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("The events description is collapsed by default.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the event details are collapsed by default", () => {
      AppComponent = render(<App />);
    });

    when("the user views the events list", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("the event details should not be visible", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector(".details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see details.", ({ given, when, then }) => {
    let AppComponent;
    let allEvents;
    given(
      "the events are rendered and details are collapsed by default",
      async () => {
        allEvents = await getEvents();
        AppComponent = render(<Event event={allEvents[0]} />);
        expect(
          AppComponent.container.querySelector(".details")
        ).not.toBeInTheDocument();
      }
    );

    when(/^the user clicks on the "(.*)" button$/, async (arg0) => {
      const user = userEvent.setup();
      const showDetails = AppComponent.queryByText("Show Details");
      await user.click(showDetails);
    });

    then("the event details should be visible", async () => {
      const eventDetails = screen.getByTestId("event-description");
      expect(eventDetails).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide details.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let allEvents;
    given("the event details are visible", async () => {
      allEvents = await getEvents();
      AppComponent = render(<Event event={allEvents[0]} />);
    });

    when(/^the user clicks on the "(.*)" button$/, async (arg0) => {
      const user = userEvent.setup();
      const hideDetails = AppComponent.queryByText("Hide Details");
      await user.click(hideDetails); // collapse the details
    });

    then("the event details should be hidden", () => {
      const eventDetails = AppComponent.container.querySelector(".details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
});
