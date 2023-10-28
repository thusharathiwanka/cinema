import { Seat } from './seat.type'

export type DraftBookingForm = {
  bookedDate: Date
  email: string
  mobileNumber: string
  name: string
  showTime: string
  activeStep: number
  selectedSeatLayout: Record<number, Seat[]>
  selectedSeats: string[]
}
