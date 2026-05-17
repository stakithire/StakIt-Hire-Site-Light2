
'use client';
/**
 * Sanitized placeholder for error handling.
 * All technical tokens and simulated auth objects have been removed.
 */
export class FirestorePermissionError extends Error {
  constructor() {
    super('Access denied.');
    this.name = 'AccessError';
  }
}
