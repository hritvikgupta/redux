Movie App - React and Redux
This is a movie application built with React, Redux and OMDB API. This project allows you to search for movies and view details of each movie.

Features
Home Page: Displays a list of movies fetched from the OMDB API
Movie Card: Each movie is displayed on its card with a brief details
Movie Detail: Clicking on a movie card navigates to a page with detailed information about the movie
Error Page: A 404 page is shown if the user navigates to a non-existent route
Project Structure
The project is organized as follows:

css
Copy code
src/
  App.js
  App.scss
  common/
    apis/
      movieApi.js
      MovieApiKey.js
    colors.scss
  components/
    Footer/
      Footer.js
      Footer.scss
    Header/
      Header.js
      Header.scss
    Home/
      Home.js
      Home.scss
    MovieCard/
      MovieCard.js
      MovieCard.scss
    MovieDetail/
      MovieDetail.js
      MovieDetails.scss
    MovieListing/
      MovieListing.js
      MovieListing.scss
    PageNotFound/
      PageNotFound.js
      PageNotFound.scss
  features/
    store.js
  images/
  index.js
  movies/
    movieSlice.js
App.js: The entry point of the application
components/: This directory contains all the React components used in the application
common/: Contains shared utilities, constants and API configurations
features/: Contains the Redux store setup
movies/: Contains the Redux slice for managing movie-related state
Setup and Installation
To get started with this project:

Clone the repo with git clone <REPO_URL>

Navigate to the project directory with cd <PROJECT_DIRECTORY>

Install the required dependencies with npm install

Start the application with npm start

The application should now be running at localhost:3000.

API Used
OMDb API 
Contributing
Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

License
MIT

Contact
If you have any questions, feel free to reach out to me at <YOUR_EMAIL>.

