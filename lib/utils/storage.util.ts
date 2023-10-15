import { Seat } from '../types/seat.type'

export const saveDraftBookingForm = (
  label: string,
  value: string | Record<number, Seat[]>
) => {
  if (!label || !value || Object.keys(value).length <= 0) return

  const draftBookingForm = JSON.parse(
    localStorage.getItem('draftBookingForm') || '{}'
  )

  draftBookingForm[label] = value

  localStorage.setItem('draftBookingForm', JSON.stringify(draftBookingForm))
}

export const getDraftBookingForm = () =>
  JSON.parse(localStorage.getItem('draftBookingForm') || '{}')

export const removeDraftBookingForm = () =>
  localStorage.removeItem('draftBookingForm')
