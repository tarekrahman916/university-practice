// /* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorlogger } from './shared/logger'

async function dbConnect() {
  try {
    await mongoose.connect(config.databaseUrl as string)
    logger.info('Database connected')

    app.listen(config.port, () => {
      logger.info(`Application is listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error('Failed to connect database', error)
  }
}

dbConnect()
