export const saveDraftBookingForm = (label: string, value: string) => {
  const draftBookingForm = localStorage.getItem('draftBookingForm') || null

  if (draftBookingForm) {
    const parsedBookingForm = JSON.parse(draftBookingForm)
    parsedBookingForm[label] = value

    localStorage.setItem(
      'draftBookingForm',
      JSON.stringify({ ...parsedBookingForm })
    )
    return
  }

  const newDraftBookingForm = { [label]: value }
  localStorage.setItem('draftBookingForm', JSON.stringify(newDraftBookingForm))
}

export const getDraftBookingForm = () =>
  JSON.parse(localStorage.getItem('draftBookingForm') || '{}')
