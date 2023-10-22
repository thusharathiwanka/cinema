import { DraftBookingForm } from '../types/storage.type'
import { Seat } from '@/lib/types/seat.type'
import { getShowTime } from '@/lib/utils/movie.util'
import { seatLayout } from '@/configs/movie.config'

export const saveDraftBookingForm = (
  label: string,
  value: string | Record<number, Seat[]> | string[]
) => {
  if (!label || !value || Object.keys(value).length <= 0) return

  const draftBookingForm = JSON.parse(
    localStorage.getItem('draftBookingForm') || '{}'
  )

  draftBookingForm[label] = value

  localStorage.setItem('draftBookingForm', JSON.stringify(draftBookingForm))
}

export const saveSeatLayoutsAndShowTimeForMovies = (movieId: string) => {
  const existingMovieDetails = localStorage.getItem(`${movieId}`)

  if (existingMovieDetails) return

  localStorage.setItem(
    `${movieId}`,
    JSON.stringify({ seatLayout, showTime: getShowTime(Number(movieId)) })
  )
}

export const getDraftBookingForm = () =>
  JSON.parse(localStorage.getItem('draftBookingForm') || '{}')

export const getDraftBookingFormPropertyValue = (
  property: keyof DraftBookingForm
) => {
  const draftBookingForm: DraftBookingForm = JSON.parse(
    localStorage.getItem('draftBookingForm') || '{}'
  )

  return draftBookingForm[property] !== undefined
    ? draftBookingForm[property]
    : null
}

export const getSeatLayoutForMovie = (movieId: string) => {
  const movieDetails = JSON.parse(localStorage.getItem(movieId) || '{}')
  return movieDetails.seatLayout
}

export const replaceSeatLayoutsForMovies = (
  movieId: string,
  seatLayout: Record<number, Seat[]>
) => {
  const movieDetails = localStorage.getItem(`${movieId}`)
  if (movieDetails) {
    localStorage.setItem(
      `${movieId}`,
      JSON.stringify({ ...JSON.parse(movieDetails), seatLayout })
    )
  }
}

export const removeDraftBookingForm = () =>
  localStorage.removeItem('draftBookingForm')
