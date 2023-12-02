# Cinema - Movie Ticket Booking App

![cover](https://github.com/thushara-thiwanka/cinema/assets/142310256/e59d60fa-eed1-4b66-a5a1-c8a137295465)

A web application built with Nuxt and Vue.js that simplifies the movie ticket booking experience. This app allows users to effortlessly browse ongoing movies, view showtimes, select seats, and receive a reservation summary.

## Getting Started

#### Clone this repository to your local machine

```bash
   $ git clone https://github.com/thushara-thiwanka/cinema.git
```

#### Change into the project directory

```bash
   $ cd cinema
```

#### Environment file (.env) configuration

```bash
   $ cp env.example .env
```

#### Populate Environment file (.env)

- Populate API Key by creating an account using this link - https://developer.themoviedb.org/reference/intro/getting-started
- Replace .env using the below values

```bash
  BASE_URL='https://api.themoviedb.org/3/'
  IMAGE_BASE_URL='https://image.tmdb.org/t/p/w500'
  AUTH_TOKEN='Bearer YOUR API KEY'
```

#### Install Dependencies

```bash
  $ yarn install
```

#### Serve with hot Reload at localhost:3000

```bash
  $ yarn dev
```

#### Build for Production and Launch Server

```bash
  $ yarn build
  $ yarn start
```

#### Run All Unit Tests

```bash
  $ yarn unit
```

## Key Features

- **Movie Discovery**: Easily explore a list of ongoing movies using data from the [TMDB API](https://www.themoviedb.org/).
- **Date Selection**: Users can select their preferred movie, date, and view showtime, making it convenient to plan their visit.
- **Seat Reservation**: Users can choose seats quickly using a simple grid-based interface.
- **Seat Availability**: Visualize available and booked seats to help make informed seat selections.
- **Reservation Summary**: Get a detailed reservation summary, including movie details, selected seats, and showtime.

## Technologies Used

- Nuxt.js
- Vue.js
- TMDB API
- SCSS

## Environments

#### UAT

- https://cinema-1csy.onrender.com/

#### Stage

- https://cinema-stage.onrender.com/

#### Production

- https://cinema-vp2y.onrender.com/

## Contributing

If you'd like to contribute to this project, please feel free to submit a pull request or open an issue.
