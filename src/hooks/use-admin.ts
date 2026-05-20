'use client';

/**
 * Admin status is disabled for the static rollout.
 */
export function useAdmin() {
  return { isAdmin: false, isCheckingAdmin: false };
}
