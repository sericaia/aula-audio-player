## How to start the project

### `yarn`

Install the modules.

### `yarn db:migrate`

Will perform all necessary database migrations.

### `yarn start:server`

Starts the Express.js server (located in `./server` folder). The server will run by default on port 8080. The Node.js version used was 12.0.0

### `yarn start`

**Note: Run this in a different terminal window**

Starts the React.js front-end. The client will run by default on port 3000.

### Go to http://localhost:3000/

### Notes about the back-end

There are two available routes:

- `GET /songs` - retrieves all songs metadata. Receives two query parameters:
  - `page`, which gives the metadata for the songs in the current page taking into account the page size. Defaults to 0.
  - `pageSize`, which gives the amount of results to be returned (offset). Defaults to 10.
- `GET /songs/**/*.wav` - retrieves `.wav` files from server/public folder.

Examples:

- http://localhost:8080/songs?page=0
- http://localhost:8080/songs?page=1&pageSize=5
- http://localhost:8080/songs/musicradar-80s-heat-samples/AM_80sOrch_130-A.wav

### Improvements

#### Front-end

- Add previous and next buttons to go to the previous and next pages;
- The [React Audio Player](https://github.com/justinmc/react-audio-player) that is being used to create the player creates a PAUSE event right before the END event, which is unnecessary (creates two updates in the `player` reducer);
- Contains some tests for the reducers but there are no tests for the components. [react-testing-library](https://github.com/testing-library/react-testing-library) or [enzyme](https://github.com/airbnb/enzyme) could have been used;
- It might make more sense to have the frond-end organized by feature if the codebase grows

#### Back-end

- The back-end misses a proper way to pass the database connection through the handler(s);
  - One way to do this is by creating a middleware that sets the database in `app.locals` and is included for every route as `app.use(setupDBMiddleware)`. This allows `db` to be accessed through `app.locals` but I'm not sure if it is the right/default way to do it.
- The public folder is being exposed in `/songs` endpoint, maybe a better naming could be used here (note that only `.wav` files are exposed);
- Misses Tests on the back-end.
