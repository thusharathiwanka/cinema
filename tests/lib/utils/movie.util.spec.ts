import {
  getMovieGenresById,
  getMovieYear,
  getMovieGenresFromArray,
  getShowTime,
  getColumnFromSeatNumber,
} from '@/lib/utils/movie.util'

const sampleGenres = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Drama' },
  { id: 3, name: 'Science Fiction' },
]
const sampleReleaseDate = new Date('2022-03-15')

describe('getMovieGenresById', () => {
  it('should correctly map genres to genre names', () => {
    const genres = [27, 53, 12]
    const mappedGenres = getMovieGenresById(genres)
    const expectedGenres = ['Horror', 'Thriller', 'Adventure']

    expect(mappedGenres).toEqual(expectedGenres)
  })

  it('should handle an empty genres array', () => {
    const genres: number[] = []
    const mappedGenres = getMovieGenresById(genres)
    const expectedGenres: string[] = []

    expect(mappedGenres).toEqual(expectedGenres)
  })

  it('should handle genres with no matching genres', () => {
    const genres = [100, 101]
    const mappedGenres = getMovieGenresById(genres)
    const expectedGenres: string[] = []

    expect(mappedGenres).toEqual(expectedGenres)
  })
})

describe('getMovieGenresFromArray', () => {
  it('should return an array of genre names', () => {
    const genresArray = getMovieGenresFromArray(sampleGenres)
    expect(genresArray).toEqual(['Action', 'Drama', 'Science Fiction'])
  })

  it('should handle an empty input array', () => {
    const genresArray = getMovieGenresFromArray([])
    expect(genresArray).toEqual([])
  })
})

describe('getMovieYear', () => {
  it('should return the year from the release date as a string', () => {
    const year = getMovieYear(sampleReleaseDate)
    expect(year).toEqual('2022')
  })

  it('should handle invalid input', () => {
    const year = getMovieYear(null as unknown as Date)
    expect(year).toEqual('')
  })
})

describe('getShowTime', () => {
  it('should returns the showtime when the movie exists in the list', () => {
    const movieId = 951491
    const result = getShowTime(movieId)

    expect(result).toBe('8:30 AM')
  })

  it('should returns an empty string when the movie does not exist in the list', () => {
    const movieId = 4
    const result = getShowTime(movieId)

    expect(result).toBe('-')
  })
})

describe('getMovieGenresFromArray', () => {
  it('should returns the array of movie genres form genre objects array', () => {
    const result = getMovieGenresFromArray(sampleGenres)

    expect(result).toStrictEqual(['Action', 'Drama', 'Science Fiction'])
  })

  it('should returns an empty array when the empty genre objects array is passed', () => {
    const result = getMovieGenresFromArray([])

    expect(result.length).toEqual(0)
  })

  it('should returns an empty array when the undefined is passed', () => {
    const result = getMovieGenresFromArray(undefined)

    expect(result.length).toEqual(0)
  })
})

describe('getColumnFromSeatNumber', () => {
  it('should return the column number from a valid seat number', () => {
    const seatNumber = 'A2'
    expect(getColumnFromSeatNumber(seatNumber)).toBe(2)
  })

  it('should return 0 for an empty seat number', () => {
    const seatNumber = ''
    expect(getColumnFromSeatNumber(seatNumber)).toBe(0)
  })
})
