/* eslint-disable no-console */
import {
  AnyAction,
  isRejectedWithValue,
  Middleware,
  isRejected,
  MiddlewareAPI,
} from '@reduxjs/toolkit'

const isPayloadErrorMessage = (
  payload: unknown
): payload is {
  data: {
    error: string
  }
  status: number
} => {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'data' in payload &&
    typeof (payload as any).data?.error === 'string'
  )
}

export const rtkQueryErrorLogger: Middleware =
  (_: MiddlewareAPI) => (next) => (action: AnyAction) => {
    // Optional
    if (isRejected(action)) {
      if (action.error.name === 'CustomError') {
        console.warn(action.error.message)
      }
    }

    if (isRejectedWithValue(action)) {
      // Every time a query or mutation is executed, if there is an error, it will run here
      // rejectedWithValue = true => errors from the server
      if (isPayloadErrorMessage(action.payload)) {
        console.warn(action.payload.data.error)
      }
    }

    return next(action)
  }
