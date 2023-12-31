## Movie App - React and Redux

This is a movie application built with React, Redux and OMDB API. This project allows you to search for movies and view details of each movie.

### Features

- Home Page: Displays a list of movies fetched from the OMDB API
- Movie Card: Each movie is displayed on its card with brief details
- Movie Detail: Clicking on a movie card navigates to a page with detailed information about the movie
- Error Page: A 404 page is shown if the user navigates to a non-existent route

### Project Structure

The project is organized as follows:
```
- src/
- App.js
- App.scss
- common/
    - apis/
        - movieApi.js
        - MovieApiKey.js
    - colors.scss
- components/
    - Footer/
        - Footer.js
        - Footer.scss
    - Header/
        - Header.js
        - Header.scss
    - Home/
        - Home.js
        - Home.scss
    - MovieCard/
        - MovieCard.js
        - MovieCard.scss
    - MovieDetail/
        - MovieDetail.js
        - MovieDetails.scss
    - MovieListing/
        - MovieListing.js
        - MovieListing.scss
    - PageNotFound/
        - PageNotFound.js
        - PageNotFound.scss
- features/
    - store.js
- images/
- index.js
- movies/
    - movieSlice.js
```

1. App.js: The entry point of the application
2. components/: This directory contains all the React components used in the application
3. common/: Contains shared utilities, constants and API configurations
4. features/: Contains the Redux store setup
5. movies/: Contains the Redux slice for managing movie-related state

### Setup and Installation

To get started with this project:

1. Clone the repo with `git clone <REPO_URL>`
2. Navigate to the project directory with `cd <PROJECT_DIRECTORY>`
3. Install the required dependencies with `npm install`
4. Start the application with `npm start`

The application should now be running at `localhost:3000`.

### API Used

- [OMDb API](http://www.omdbapi.com/)

### Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](../../issues) if you want to contribute.

### License

[MIT](../../LICENSE)

### Contact

If you have any questions, feel free to reach out to me at `<YOUR_EMAIL>`.

