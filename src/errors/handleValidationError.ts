import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'

const handleValidationError = (error: mongoose.Error.ValidationError) => {
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      }
    }
  )

  const statusCode = 400
  return {
    statusCode,
    message: 'validation error',
    errorMessages: errors,
  }
}

export default handleValidationError
