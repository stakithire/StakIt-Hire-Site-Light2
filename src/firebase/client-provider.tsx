
'use client';
import React from 'react';

/** DEPRECATED: Client SDK initialization is disabled in static Light Mode. */
export function FirebaseClientProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
