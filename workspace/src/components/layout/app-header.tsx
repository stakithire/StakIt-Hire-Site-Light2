'use client';

import { AppHeader as MainHeader } from '@/components/layout/app-header';

/**
 * Re-directing to the primary component to prevent collision issues.
 */
export function AppHeader() {
  return <MainHeader />;
}
