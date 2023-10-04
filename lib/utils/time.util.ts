export const convertMinutesToHoursAndMinutes = (
  timeInMinutes: number
): string => {
  if (timeInMinutes <= 0) return ''

  const hours = Math.floor(timeInMinutes / 60)
  const remainingMinutes = timeInMinutes % 60

  if (hours > 0 && remainingMinutes > 0) {
    return `${hours}h ${remainingMinutes}m`
  } else if (hours > 0) {
    return `${hours}h`
  } else {
    return `${remainingMinutes}m`
  }
}
