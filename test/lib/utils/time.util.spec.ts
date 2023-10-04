import { convertMinutesToHoursAndMinutes } from '~/lib/utils/time.util'

describe('convertMinutesToHoursAndMinutes', () => {
  it('should converts runtime when hours and minutes are greater than zero', () => {
    const runtime = 135
    const formatted = convertMinutesToHoursAndMinutes(runtime)
    expect(formatted).toBe('2h 15m')
  })

  it('should converts runtime when only hours are greater than zero', () => {
    const runtime = 120
    const formatted = convertMinutesToHoursAndMinutes(runtime)
    expect(formatted).toBe('2h')
  })

  it('should converts runtime when only minutes are greater than zero', () => {
    const runtime = 30
    const formatted = convertMinutesToHoursAndMinutes(runtime)
    expect(formatted).toBe('30m')
  })

  it('should converts to an empty string when runtime is 0', () => {
    const runtime = 0
    const formatted = convertMinutesToHoursAndMinutes(runtime)
    expect(formatted).toBe('')
  })

  it('should converts to an empty string when runtime is negative', () => {
    const runtime = -60
    const formatted = convertMinutesToHoursAndMinutes(runtime)
    expect(formatted).toBe('')
  })
})
