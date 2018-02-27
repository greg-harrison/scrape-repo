let express = require('express')
let app = express()

app.use(express.static(__dirname + '/static'))

app.listen(8082)