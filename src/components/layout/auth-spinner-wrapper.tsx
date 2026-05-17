'use client';
import React from 'react';

/**
 * This wrapper is now a pass-through as auth-dependent routes 
 * have been neutralized for the static rollout.
 */
export function AuthSpinnerWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
