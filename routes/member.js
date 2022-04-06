const express = require('express')
const router = express.Router()
const moment = require('moment')
const uuid = require('uuid')

let members = require('../members')

router.get('/', (request, response) => {
    response.json(members)
})

router.get('/:id', (request, response) => {
    const { id } = request.params 
    response.json(members.filter((member) => member.id == id))
})

router.put('/:id', (request, response) => {
    const { id } = request.params
    const { name, gender } = request.body

    indexMember = members.findIndex((member) => member.id == id)
    members[indexMember].name = name
    members[indexMember].gender = gender

    response.json(members)
})

router.post('/', (request, response) => {
    const { name, gender } = request.body
    const data = {
        id: uuid.v4(),
        name,
        gender,
        created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }

    members.push(data)
    response.json(members)
})

router.delete('/:id', (request, response) => {
    const { id } = request.params

    indexMember = members.findIndex((member) => member.id == id)
    members.splice(indexMember, 1)
    
    response.json(members)
})

module.exports = router
