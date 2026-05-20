'use client';
import React from 'react';
/** Pass-through for static site. */
export function FirebaseClientProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
