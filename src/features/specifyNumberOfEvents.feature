Feature: Specify number of events
    Scenario: When user hasn't specified a number, 32 events are shown by default.
        Given the user has not specified a number of events to display
        When the user views the event list
        Then 32 events should be displayed by default

    Scenario: User can change the number of events displayed
        Given the user wants to specify the number of events to display
        When the user inputs a number into the event number textbox
        Then the event list should update to show the specified number of events