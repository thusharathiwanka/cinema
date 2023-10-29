export type Booking = {
  status: string
  date: string
}

export type Seat = {
  seatNumber: string
  bookings: Booking[]
}
