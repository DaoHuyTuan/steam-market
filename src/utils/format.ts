import { format as fnsFormat } from 'date-fns'
import numeral from 'numeral'
type DATE_FORMAT_OPTIONS = {}

const formatDate = (
  date: Date | number,
  format: string,
  options?: DATE_FORMAT_OPTIONS
): string => {
  return fnsFormat(date, format, options)
}

const formatNumber = (num: string | number, format: string): string => {
  return numeral(num).format(format)
}
export { formatDate, formatNumber }
