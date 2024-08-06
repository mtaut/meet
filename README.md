# Meet App

The Meet App is a serverless, progressive web application built with React using a test-driven development technique. The Meet App allows users to filter for events by city. The application uses the Google Calendar API to fetch upcoming events.

## Usage and Features

`**Feature 1: Filter Events by City**`<br />
As a user,<br />
I should be able to filter events by city,<br />
So that I can see a list of events taking place in that city.

Given the main page is open,<br />
When the user starts typing in the city textbox,<br />
Then the user should receive a list of cities (suggestions) that match what they've typed.

`**Feature 2: Show/Hide Event Details**`<br />
As a user,<br />
I should be able to click on a button,<br />
So that I can expand and view or collapse and hide event details.

Given the event details are collapsed by default,<br />
When the user clicks on the "Show Details" button,<br />
Then the user should be able to view event details and then collapse the details again.

`**Feature 3: Specify Number of Events**`<br />
As a user,<br />
I should be able to specify a number of events to view,<br />
So that I can change the exact number of events displayed on the page.

Given the user is on the events page and the default number of events displayed is 32,<br />
When the user selects the number of events to be, e.g. 10,<br />
Then the page should display 10 events.

`**Feature 4: Use the App When Offline**`<br />
As a user,<br />
I should be able to use the app when I am offline,<br />
So that when I lose internet connectivity, I am still able to see event details from the cached data.

Given the user is using the app and event details have been previously viewed and cached,<br />
When the user has lost internet connection,<br />
Then the user should still be able to view event details from the cached data.

`**Feature 5: Add an App Shortcut to the Home Screen**`<br />
As a user,<br />
I want to add an app shortcut to my device's home screen,<br />
So that I can quickly accress the app with a single tap.

Given the user is using the app in their browser,<br />
When the user selects the "add to homescreen option",<br />
Then the user should be able to easily access the app with a single tap from the home screen.

`**Feature 6: Display Charts Visualizing Event Details**`<br />
As a user,<br />
I should be able to view charts to visualize event details,<br />
So that I can easily understand the number of upcoming events in each city.

Given the user is on the events details page,<br />
When the user selects the option to view more event details,<br />
Then the user should see charts that display the number of upcoming events in each city.
