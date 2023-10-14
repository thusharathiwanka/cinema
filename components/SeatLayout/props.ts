import { Seat } from '@/lib/types/movie.type'

export type SeatLayoutProps = {
  seats: Record<number, Seat[]>
}
