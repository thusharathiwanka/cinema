export type FetchError = {
  message: string
  statusCode: number
}

export type FetchErrorProps = {
  error: FetchError
}
