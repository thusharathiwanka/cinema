import { validateEmail, validateMobileNumber } from '~/lib/utils/validator.util'

describe('validateEmail', () => {
  it('should return true for valid email', () => {
    const validEmail = 'test@example.com'
    expect(validateEmail(validEmail)).toBe(true)
  })

  it('should return false for invalid email', () => {
    const invalidEmail = 'test.email@com'
    expect(validateEmail(invalidEmail)).toBe(false)
  })

  it('should return false for empty email', () => {
    const emptyEmail = ''
    expect(validateEmail(emptyEmail)).toBe(false)
  })
})

describe('validateMobileNumber', () => {
  it('should return true for valid mobile number with dashes', () => {
    const validMobileNumber = '123-456-7890'
    expect(validateMobileNumber(validMobileNumber)).toBe(true)
  })

  it('should return true for valid mobile number', () => {
    const validMobileNumber = '1234567890'
    expect(validateMobileNumber(validMobileNumber)).toBe(true)
  })

  it('should return true for mobile number with spaces ', () => {
    const mobileNumberWithSpaces = '123 456 7890'
    expect(validateMobileNumber(mobileNumberWithSpaces)).toBe(true)
  })

  it('should return false for invalid mobile number', () => {
    const invalidMobileNumber = '123456789'
    expect(validateMobileNumber(invalidMobileNumber)).toBe(false)
  })

  it('should return false for empty mobile number', () => {
    const emptyMobileNumber = ''
    expect(validateMobileNumber(emptyMobileNumber)).toBe(false)
  })
})
