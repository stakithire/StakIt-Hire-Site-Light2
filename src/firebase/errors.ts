/** Static error shell. */
export class AppError extends Error {
  constructor() {
    super('Action unavailable.');
  }
}
