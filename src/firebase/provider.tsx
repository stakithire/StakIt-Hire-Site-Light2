'use client';
import React from 'react';
/** Inert provider shell. */
export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const useUser = () => ({ user: null });
