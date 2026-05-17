
'use client';
import React, { createContext, useContext, ReactNode } from 'react';

const FirebaseContext = createContext<any>(undefined);

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export const useFirebase = () => ({});
export const useUser = () => ({ user: null, isUserLoading: false, idToken: null });
export function useMemoFirebase<T>(factory: () => T): T { return factory(); }
