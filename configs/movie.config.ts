import { SelectOptions } from '@/lib/types/input.type'
import { Seat } from '@/lib/types/movie.type'

export const movieTimeSlots: SelectOptions[] = [
  { label: '10:30 AM', value: '10:30 AM' },
  { label: '12:30 PM', value: '12:30 PM' },
  { label: '02:30 PM', value: '02:30 PM' },
  { label: '04:30 PM', value: '04:30 PM' },
  { label: '07:30 PM', value: '07:30 PM' },
]

export const seatLayout: Record<number, Seat[]> = {
  1: [
    { seatNumber: 'A1', status: false },
    { seatNumber: 'A2', status: false },
    { seatNumber: 'A3', status: false },
    { seatNumber: 'A4', status: false },
    { seatNumber: 'A5', status: false },
    { seatNumber: 'A6', status: false },
    { seatNumber: 'A7', status: false },
    { seatNumber: 'A8', status: false },
    { seatNumber: 'A9', status: false },
    { seatNumber: 'A10', status: false },
  ],
  2: [
    { seatNumber: 'B1', status: false },
    { seatNumber: 'B2', status: false },
    { seatNumber: 'B3', status: false },
    { seatNumber: 'B4', status: false },
    { seatNumber: 'B5', status: false },
    { seatNumber: 'B6', status: false },
    { seatNumber: 'B7', status: false },
    { seatNumber: 'B8', status: false },
    { seatNumber: 'B9', status: false },
    { seatNumber: 'B10', status: false },
  ],
  3: [
    { seatNumber: 'C1', status: false },
    { seatNumber: 'C2', status: false },
    { seatNumber: 'C3', status: false },
    { seatNumber: 'C4', status: false },
    { seatNumber: 'C5', status: false },
    { seatNumber: 'C6', status: false },
    { seatNumber: 'C7', status: false },
    { seatNumber: 'C8', status: false },
    { seatNumber: 'C9', status: false },
    { seatNumber: 'C10', status: false },
  ],
}
