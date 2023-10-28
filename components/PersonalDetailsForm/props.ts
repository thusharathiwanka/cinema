export type ValidationError = {
  label: string
  value: string
  isValid: boolean
}

export type PersonalDetailsFormProps = {
  errors: ValidationError[]
  isStepValidated: boolean
}
