'use server';
/** Inert server actions for static rollout. */
export async function performAction() {
  return { status: 'disabled' };
}
