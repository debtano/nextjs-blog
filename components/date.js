import {┬áparseISO, format } from 'date-fns'

export default function Date({┬ádateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
