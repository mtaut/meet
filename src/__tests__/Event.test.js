import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import mockData from "../mock-data";

describe("<Event /> component", () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={mockData[0]} />);
  });

  test("renders event summary", () => {
    expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
  });

  test("renders event start time", () => {
    const formattedStartTime = new Date(
      mockData[0].start.dateTime
    ).toLocaleString();
    expect(EventComponent.queryByText(formattedStartTime)).toBeInTheDocument();
  });

  test("renders event end time", () => {
    const formattedEndTime = new Date(
      mockData[0].end.dateTime
    ).toLocaleString();
    expect(EventComponent.queryByText(formattedEndTime)).toBeInTheDocument();
  });

  test("renders event location", () => {
    expect(
      EventComponent.queryByText(mockData[0].location)
    ).toBeInTheDocument();
  });

  test("by default, event details should be hidden", () => {
    expect(
      EventComponent.queryByText(mockData[0].description)
    ).not.toBeInTheDocument();
  });

  test("shows event description when 'Show Details' button is clicked", async () => {
    await userEvent.click(EventComponent.queryByRole("button"));
    expect(
      EventComponent.container.querySelector(".details")
    ).toBeInTheDocument();
  });

  test("hides event description when 'Hide Details' button is clicked", async () => {
    await userEvent.click(EventComponent.queryByRole("button"));
    await userEvent.click(EventComponent.queryByRole("button"));
    expect(EventComponent.container.querySelector(".details")).toBeNull();
  });
});
