export const validateEmail = (email: string) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)

export const validateMobileNumber = (mobileNumber: string) =>
  /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(mobileNumber)
