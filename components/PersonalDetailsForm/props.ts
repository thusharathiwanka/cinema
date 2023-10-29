export type ValidationError = {
  label: string
  value: string
}

export type PersonalDetailsFormProps = {
  errors: ValidationError[]
}
