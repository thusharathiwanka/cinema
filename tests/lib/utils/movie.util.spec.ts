import {
  getMovieGenresById,
  getMovieYear,
  getMovieGenresFromArray,
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
