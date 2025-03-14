# Errors

Defines custom error classes to standardize error handling across the application. This ensures consistency when dealing with different types of failures, such as network issues, validation errors, or unexpected behaviors.

## Example

```ts
// core/errors/CustomError.ts
export class CustomError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "CustomError"
  }
}

// core/errors/GenericError.ts
export class GenericError extends CustomError {
  constructor(message = "An unexpected error occurred") {
    super(message)
    this.name = "GenericError"
  }
}

// core/errors/NetworkError.ts
export class NetworkError extends CustomError {
  constructor(message = "Network error. Please check your connection.") {
    super(message)
    this.name = "NetworkError"
  }
}

// core/errors/ValidationError.ts
export class ValidationError extends CustomError {
  constructor(message = "Validation failed. Please check your input.") {
    super(message)
    this.name = "ValidationError"
  }
}

// core/errors/formatError.ts
export const formatError = (error: unknown): string => {
  if (error instanceof CustomError) return error.message
  return "An unexpected error occurred"
}

// core/errors/errorMapper.ts
export const errorMapper = (error: unknown): CustomError => {
  if (error instanceof CustomError) return error

  if (error instanceof TypeError && error.message.includes("Network"))
    return new NetworkError()

  return new GenericError()
}
```
