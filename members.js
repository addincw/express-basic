const moment = require('moment')
const uuid = require('uuid')

module.exports = [
    {
        id: uuid.v4(),
        name: 'John Snow',
        gender: 'male',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    },
    {
        id: uuid.v4(),
        name: 'Eva Smith',
        gender: 'female',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }
]