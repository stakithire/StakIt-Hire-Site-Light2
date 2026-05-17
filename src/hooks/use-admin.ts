'use client';

/**
 * Admin check hook is disabled for the static rollout.
 */
export function useAdmin() {
  return { isAdmin: false, isCheckingAdmin: false };
}
