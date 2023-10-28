export type ValidationError = {
  label: string
  value: string
  isValid: boolean
}

export type TimeDetailsFormProps = {
  errors: ValidationError[]
  isStepValidated: boolean
}
