![logo](https://private-user-images.githubusercontent.com/46595464/452582348-47f08da6-b1de-45cf-9cbe-25123bf3e7e2.svg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDkzMDIyMzYsIm5iZiI6MTc0OTMwMTkzNiwicGF0aCI6Ii80NjU5NTQ2NC80NTI1ODIzNDgtNDdmMDhkYTYtYjFkZS00NWNmLTljYmUtMjUxMjNiZjNlN2UyLnN2Zz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA3VDEzMTIxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU3MzU3NzUzODc1MGY4MGVhMmM1YTEyZmJhZTIwNWNjYjBjM2ZmODhlNGE5ZDc5NTZiN2Y0YTZiMTQ2MzA0OTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.fIfHC2BaSnTKVtuFC5zsN4dVs9CNgZQIPiq-GC0Qwl0)

# Cinema - Movie Ticket Booking App

![cover](https://private-user-images.githubusercontent.com/46595464/452582819-05adcd77-bf0d-4873-ac36-5b42802147f7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTAzNDg2OTgsIm5iZiI6MTc1MDM0ODM5OCwicGF0aCI6Ii80NjU5NTQ2NC80NTI1ODI4MTktMDVhZGNkNzctYmYwZC00ODczLWFjMzYtNWI0MjgwMjE0N2Y3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjE5VDE1NTMxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUwMzg5MTUzZGY2NzgzNjIxMjRjYTc1YmM3YWI3MzQ1ZmY1ZjRmZjUzZWJlYjljNzJiYzgwY2Y4MzI4MDU4M2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.axUPiFARu-r1O_EyqmzEhyYWVR_BlpYt9mq00T2c2xw)

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
  CYPRESS_BASE_URL='http://localhost:4000'
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

#### Run All E2E Tests

```bash
  $ yarn cy:run
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

#### Development

- URLs will be generated automatically once PR is created.

#### Production

- https://cinema-eight-lyart.vercel.app/

## Contributing

If you'd like to contribute to this project, please feel free to submit a pull request or open an issue.
