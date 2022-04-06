const PORT = process.env.PORT || 3000

const express = require('express')
const multer = require('multer')
const exphbs = require('express-handlebars')
const { request } = require('express')
// const path = require('path')

const members = require('./members')

const app = express()
const upload = multer()

/** simple call static page */
// app.use(express.static(path.join(__dirname, 'static')))

/** using template engine to handle dynamic data in view 
 * default layout akan dicari di folder views/layouts
*/
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (request, response) => {
    response.render('index', { 
        title: 'Members',
        subtitle: 'Here is list of our beloved members.',
        members 
    })
})

/** implementing routes */ 
// middleware untuk handle request.body (raw json, form data, query params)
app.use(express.json())
app.use(upload.array())
app.use(express.urlencoded({ extended: true }))

app.use('/api/member', require('./routes/member'))

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))