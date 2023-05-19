import { Schema, ValidationResult } from 'joi';
export function validate(data: object, schema: Schema): Promise<object> {
  const { error, value }: ValidationResult = schema.validate(data, {
    abortEarly: false
  });
  if (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(value);
}
