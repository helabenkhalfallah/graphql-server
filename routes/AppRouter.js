import AppLogger from '../core/logger/AppLogger'
import express from 'express'
const AppRouter = express.Router()

AppRouter.get('/users', (req, res) => {



})

AppRouter.post('/photos', (req, res) => {
  AppLogger.debug('photos ', res)
})

export default AppRouter