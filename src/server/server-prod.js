const express = require('express')
const app = express(),
            DIST_DIR = __dirname
app.use(express.static(DIST_DIR))
require('../../router/main.js')(app);
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})