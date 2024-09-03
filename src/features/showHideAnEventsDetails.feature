Feature: Show/hide event details
    Scenario: The events description is collapsed by default.
        Given the event details are collapsed by default
        When the user views the events list
        Then the event details should not be visible

    Scenario: User can expand an event to see details.
        Given the events are rendered and details are collapsed by default
        When the user clicks on the "Show Details" button
        Then the event details should be visible

    Scenario: User can collapse an event to hide details.
        Given the event details are visible   
        When the user clicks on the "Hide Details" button
        Then the event details should be hidden