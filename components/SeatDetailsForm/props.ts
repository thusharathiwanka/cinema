export type ValidationError = {
  label: string
  value: string
}

export type SeatDetailsFormProps = {
  errors: ValidationError[]
  isStepValidated: boolean
}
