
import { redirect } from 'next/navigation';

/**
 * Dynamic routing has been replaced with a static folder structure 
 * to ensure 100% compatibility with static hosting environments.
 */
export default function BlogPostRedirect() {
  redirect('/blog');
  return null;
}
