# Pelicula
Demo movie viewer

## Icons
All icons are from https://heroicons.com/

## TODO
- Render the main view
  - Create Search bar
    - add a loading animation
    - Add a query param search
- Have a way to save movie to a playlist
  - Store movies in local storage (no way to persist)
  - On Desktop: this should be a sidepanel view 
    - Saving automatically updates sidepanel
  - On Mobile: this should take up the whole screen
- Have a way to view the playlist
- Include a footer that says "My favorite color is {your favorite color}"
- Ensure the view is responsive
- Add a No search results page
- Add a page for errors
- Build bundle and deploy to github

## Done
- Color Scheme
    - Black
    - White
    - Red

- Render the main view
  - Has header splash image
    - Background is faded
  - Create Search bar
    - Searchbar spans the background
    - has black background when scrolling
    - Wire up the searchbar to the api
    - Debounce searches
    - Fetch the first results if they dont exist

- Render results in a grid pattern
    - Display results in a grid


## Summary Questions

What were the most difficult tasks?
- Building the components and learning to properly scale the CSS elements.

Did you learn anything new while completing this assignment?
- Not really, these are all tasks I have done on the job.

What did you not have time to add? What work took the up majority of your time?
- I didn't have time to add infinite scrolling and retrieving more results
- Majority of the time took to ensure the page was responsive and looked appropriate in all dimensions.

How could the application be improved?
- At the moment, the api only returns back 10 results per page and we are only fetch the first 5 pages.
- It would be helpful to implement an infinite scroll or some way to retrieve more results
- It would be great to click on one of the movies to view more details
  - Like the actors, awards, directors, etc..
