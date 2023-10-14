import { Seat } from '@/lib/types/seat.type'

export type SeatLayoutProps = {
  seats: Record<number, Seat[]>
}
