const dateFormatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' })
const timeFormatter = new Intl.DateTimeFormat('en-GB', { timeStyle: 'short' })

export const formatDate = (date: Date) => dateFormatter.format(date)
export const formatTime = (date: Date) => timeFormatter.format(date)