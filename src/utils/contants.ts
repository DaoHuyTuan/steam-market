type NumberFormats = {
  DEFAULT: string
  NO_DIGIT: string
}

type DateFormats = {
  DEFAULT: string
  DEFAULT_HOURS: string
}

export const DATE_FORMAT: DateFormats = {
  DEFAULT: 'Pp',
  DEFAULT_HOURS: 'PPpp'
}

export const NUMBER_FORMAT: NumberFormats = {
  DEFAULT: '0,0.00',
  NO_DIGIT: '0,0'
}
