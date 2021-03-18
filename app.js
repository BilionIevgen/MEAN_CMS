const express = require("express");
const app = express();
const authRoute = require('./routes/auth')
const analyticsRoute = require('./routes/analytics')
const orderRoute = require('./routes/order')
const positionRoute = require('./routes/position')

app.use('/api/auth',authRoute)
app.use('/api/analytics',analyticsRoute)
app.use('/api/order',orderRoute)
app.use('/api/position',positionRoute)

module.exports = app