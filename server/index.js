import express from 'express'
import authRoute from './routes/authRoute.js';

const app = express()
app.use(authRoute)

app.listen(3000, () => {
    console.log('server running on port 3000');

})

