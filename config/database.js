const mongoose = require('mongoose')
mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => {
    console.log('\x1b[36m%s\x1b[0m', `Database Connected : ${process.env.DBURL}`)
}).catch(err => {
    console.error('\x1b[33m%s\x1b[0m', 'Database Connection Error', err)
})