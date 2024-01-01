import { seatLayout as mockSeatLayout } from '~/configs/movie.config'
import { DraftBookingForm } from '~/lib/types/storage.type'
import {
  getDraftBookingForm,
  getDraftBookingFormPropertyValue,
  getSeatLayoutForMovie,
  removeDraftBookingForm,
  replaceSeatLayoutsForMovies,
  saveDraftBookingForm,
  saveSeatLayoutsAndShowTimeForMovies,
  saveSeatLayoutsForMovie,
} from '~/lib/utils/storage.util'

const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
}

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
})
Object.defineProperty(global, 'sessionStorage', {
  value: sessionStorageMock,
})

describe('saveDraftBookingForm', () => {
  afterEach(() => {
    sessionStorageMock.getItem.mockClear()
    sessionStorageMock.setItem.mockClear()
    sessionStorageMock.getItem.mockReturnValue(null)
  })

  it('should save the draft booking form with a valid label and value', () => {
    const label = 'name'
    const value = 'John Doe'

    saveDraftBookingForm(label, value)

    expect(sessionStorageMock.getItem).toHaveBeenCalledWith('draftBookingForm')
    expect(sessionStorageMock.setItem).toHaveBeenCalledWith(
      'draftBookingForm',
      JSON.stringify({ [label]: value })
    )
  })

  it('should not save the draft booking form if label is not provided', () => {
    const value = 'John Doe'

    saveDraftBookingForm('', value)

    expect(sessionStorageMock.getItem).not.toHaveBeenCalled()
    expect(sessionStorageMock.setItem).not.toHaveBeenCalled()
  })

  it('should overwrite existing value for a given label', () => {
    const label = 'name'
    const value = 'John Doe'
    const newValue = 'Jane Doe'

    sessionStorageMock.getItem.mockReturnValue(
      JSON.stringify({ [label]: value })
    )

    saveDraftBookingForm(label, newValue)

    expect(sessionStorageMock.getItem).toHaveBeenCalledWith('draftBookingForm')
    expect(sessionStorageMock.setItem).toHaveBeenCalledWith(
      'draftBookingForm',
      JSON.stringify({ [label]: newValue })
    )
  })

  it('should save draft form with selectedSeats value', () => {
    const label = 'selectedSeats'
    const value = ['A1', 'A2', 'B3']

    saveDraftBookingForm(label, value)

    expect(sessionStorageMock.getItem).toHaveBeenCalledWith('draftBookingForm')
    expect(sessionStorageMock.setItem).toHaveBeenCalledWith(
      'draftBookingForm',
      JSON.stringify({ [label]: value })
    )
  })
})

describe('saveSeatLayoutsAndShowTimeForMovies', () => {
  jest.mock('~/lib/utils/movie.util.ts', () => ({
    getShowTime: jest.fn(),
  }))

  Object.defineProperty(global, 'localStorage', {
    value: localStorageMock,
  })

  afterEach(() => {
    localStorageMock.getItem.mockClear()
    localStorageMock.setItem.mockClear()
    localStorageMock.getItem.mockReturnValue(null)
    jest.clearAllMocks()
  })

  test('should save seat layouts and show time for a movie', () => {
    const movieId = '951491'
    const seatLayout = mockSeatLayout
    const showTime = '8:30 AM'

    localStorageMock.getItem.mockReturnValue(undefined)

    require('~/lib/utils/movie.util').getShowTime.mockReturnValue(movieId)

    saveSeatLayoutsAndShowTimeForMovies(movieId)

    expect(localStorageMock.getItem).toHaveBeenCalledWith(movieId)
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      movieId,
      JSON.stringify({ seatLayout, showTime })
    )
  })

  test('should not save seat layouts and show time if movie details already exist', () => {
    const movieId = '951491'

    localStorageMock.getItem.mockReturnValue(
      JSON.stringify({ mockSeatLayout, showtime: '8:30 AM' })
    )

    saveSeatLayoutsAndShowTimeForMovies(movieId)

    expect(localStorageMock.getItem).toHaveBeenCalledWith(movieId)
    expect(localStorageMock.setItem).not.toHaveBeenCalled()

    expect(require('~/lib/utils/movie.util').getShowTime).not.toHaveBeenCalled()
  })
})

describe('saveSeatLayoutsForMovie', () => {
  afterEach(() => {
    localStorageMock.getItem.mockClear()
    localStorageMock.setItem.mockClear()
    localStorageMock.getItem.mockReturnValue(null)
    jest.clearAllMocks()
  })

  it('should save seat layouts for a movie', () => {
    const movieId = '951491'
    const seatLayout = mockSeatLayout

    saveSeatLayoutsForMovie(movieId, seatLayout)

    expect(localStorageMock.setItem).toHaveBeenCalled()
  })

  test('should overwrite existing seat layouts for a movie', () => {
    const movieId = '951491'
    const existingSeatLayout = mockSeatLayout

    localStorageMock.getItem.mockReturnValue(
      JSON.stringify({ seatLayout: existingSeatLayout })
    )

    const newSeatLayout = {
      ...existingSeatLayout,
      4: [
        { seatNumber: 'D1', bookings: [] },
        { seatNumber: 'D2', bookings: [] },
        { seatNumber: 'D3', bookings: [] },
        { seatNumber: 'D4', bookings: [] },
        { seatNumber: 'D5', bookings: [] },
        { seatNumber: 'D6', bookings: [] },
        { seatNumber: 'D7', bookings: [] },
        { seatNumber: 'D8', bookings: [] },
        { seatNumber: 'D9', bookings: [] },
        { seatNumber: 'D10', bookings: [] },
      ],
    }

    saveSeatLayoutsForMovie(movieId, newSeatLayout)

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      movieId,
      JSON.stringify({ seatLayout: newSeatLayout })
    )
  })
})

describe('getDraftBookingForm', () => {
  afterEach(() => {
    sessionStorageMock.getItem.mockClear()
    sessionStorageMock.setItem.mockClear()
    sessionStorageMock.getItem.mockReturnValue(null)
  })

  it('should return the draft booking form with data', () => {
    const mockFormData = { bookedDate: '2023-10-11', name: 'John Doe' }
    sessionStorageMock.getItem.mockReturnValue(JSON.stringify(mockFormData))

    const result = getDraftBookingForm()

    expect(sessionStorageMock.getItem).toHaveBeenCalled()
    expect(result).toEqual(mockFormData)
  })

  it('should return an empty object if draft booking form is not present', () => {
    sessionStorageMock.getItem.mockReturnValue(null)
    const result = getDraftBookingForm()

    expect(result).toEqual({})
  })
})

describe('getDraftBookingFormPropertyValue', () => {
  const mockDraftBookingForm = {
    name: 'John Doe',
    email: 'john@gmail.com',
    bookedDate: '2023-10-10',
    mobileNumber: '0777777777',
    showTime: '8:30 AM',
    activeStep: 1,
    selectedSeatLayout: mockSeatLayout,
    selectedSeats: ['A1', 'A2'],
  } as DraftBookingForm

  afterEach(() => {
    sessionStorageMock.getItem.mockClear()
    sessionStorageMock.setItem.mockClear()
    sessionStorageMock.getItem.mockReturnValue(null)
  })

  it('should return the value for an existing property in the draft booking form', () => {
    sessionStorageMock.getItem.mockReturnValue(
      JSON.stringify(mockDraftBookingForm)
    )

    const result = getDraftBookingFormPropertyValue('name')

    expect(result).toEqual('John Doe')
  })

  it('should return null for a non-existing property in the draft booking form', () => {
    sessionStorageMock.getItem.mockReturnValue(
      JSON.stringify(mockDraftBookingForm)
    )

    const result = getDraftBookingFormPropertyValue(
      'invalid' as keyof DraftBookingForm
    )

    expect(result).toBeNull()
  })

  it('should return null when draft booking form is not present', () => {
    sessionStorageMock.getItem.mockReturnValue(null)

    const result = getDraftBookingFormPropertyValue(
      'invalid' as keyof DraftBookingForm
    )

    expect(result).toBeNull()
  })
})

describe('getSeatLayoutForMovie', () => {
  afterEach(() => {
    localStorageMock.getItem.mockClear()
  })

  it('should return the seat layout for a movie with valid movie details', () => {
    localStorageMock.getItem.mockReturnValue(
      JSON.stringify({ seatLayout: mockSeatLayout })
    )

    const result = getSeatLayoutForMovie('951491')

    expect(result).toEqual(mockSeatLayout)
  })

  it('should return undefined when seat layout is not present in movie details', () => {
    localStorageMock.getItem.mockReturnValue(JSON.stringify({}))

    const result = getSeatLayoutForMovie('951491')

    expect(result).toBeUndefined()
  })

  it('should return undefined when movie details are empty', () => {
    localStorageMock.getItem.mockReturnValue('{}')

    const result = getSeatLayoutForMovie('951491')

    expect(result).toBeUndefined()
  })

  it('should return undefined when movie details are not present', () => {
    localStorageMock.getItem.mockReturnValue(null)

    const result = getSeatLayoutForMovie('951491')

    expect(result).toBeUndefined()
  })
})

describe('replaceSeatLayoutsForMovies', () => {
  afterEach(() => {
    localStorageMock.getItem.mockClear()
    localStorageMock.setItem.mockClear()
  })

  it('should replace seat layouts for an existing movie', () => {
    const existingMovieDetails = { movieId: '951491' }
    localStorageMock.getItem.mockReturnValue(
      JSON.stringify(existingMovieDetails)
    )

    replaceSeatLayoutsForMovies('951491', mockSeatLayout)

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      '951491',
      JSON.stringify({ ...existingMovieDetails, seatLayout: mockSeatLayout })
    )
  })

  it('should do nothing if the movie details are not present', () => {
    localStorageMock.getItem.mockReturnValue(null)

    replaceSeatLayoutsForMovies('nonExistingMovie', mockSeatLayout)

    expect(localStorageMock.setItem).not.toHaveBeenCalled()
  })
})

describe('removeDraftBookingForm', () => {
  afterEach(() => {
    sessionStorageMock.removeItem.mockClear()
  })

  it('should remove the draft booking form from sessionStorage', () => {
    removeDraftBookingForm()

    expect(sessionStorageMock.removeItem).toHaveBeenCalledWith(
      'draftBookingForm'
    )
  })
})
