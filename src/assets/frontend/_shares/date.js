import { format,parseISO } from 'date-fns'

const formatter = (value, toFormat) => {
    return format(parseISO(value), toFormat)
}

export default {
    formatter
}
