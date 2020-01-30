import moment from 'moment'

const format = (value, toFormat) => {
    return moment(value).format(toFormat)
}

export default {
    format
}
