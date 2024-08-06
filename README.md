# Meet App

The Meet App is a serverless, progressive web application built with React using a test-driven development technique. The Meet App allows users to filter for events by city. The application uses the Google Calendar API to fetch upcoming events.

## Usage and Features

`**Feature 1: Filter Events by City**`
As a user, <br />
I should be able to filter events by city,
So that I can see a list of events taking place in that city.

Given the main page is open,
When the user starts typing in the city textbox,
Then the user should receive a list of cities (suggestions) that match what they've typed.

`**Feature 2: Show/Hide Event Details**`
As a user,
I should be able to click on a button,
So that I can expand and view or collapse and hide event details.

Given the event details are collapsed by default,
When the user clicks on the "Show Details" button,
Then the user should be able to view event details and then collapse the details again.

`**Feature 3: Specify Number of Events**`
As a user,
I should be able to specify a number of events to view,
So that I can change the exact number of events displayed on the page.

Given the user is on the events page and the default number of events displayed is 32,
When the user selects the number of events to be, e.g. 10,
Then the page should display 10 events.

`**Feature 4: Use the App When Offline**`
As a user,
I should be able to use the app when I am offline,
So that when I lose internet connectivity, I am still able to see event details from the cached data.

Given the user is using the app and event details have been previously viewed and cached,
When the user has lost internet connection,
Then the user should still be able to view event details from the cached data.

`**Feature 5: Add an App Shortcut to the Home Screen**`
As a user,
I want to add an app shortcut to my device's home screen,
So that I can quickly accress the app with a single tap.

Given the user is using the app in their browser,
When the user selects the "add to homescreen option",
Then the user should be able to easily access the app with a single tap from the home screen.

`**Feature 6: Display Charts Visualizing Event Details**`
As a user,
I should be able to view charts to visualize event details,
So that I can easily understand the number of upcoming events in each city.

Given the user is on the events details page,
When the user selects the option to view more event details,
Then the user should see charts that display the number of upcoming events in each city.
