# StakIt Hire - Internal Technical Reference

## 1. Business Core
- **ABN:** 72 970 045 408
- **Service Zone:** Greater Penrith Area
- **Booking Method:** Facebook Messenger (Primary)
- **Payment Method:** Secure Payment Links via Chat

## 2. Component Architecture
- **Navigation:** Top-tier global navigation with a focus on "Chat on FB" CTA.
- **Pricing:** Dynamic pricing tables pulling from `src/lib/data.ts`.
- **Legal:** Standalone pages for Privacy, Terms, and the Box Protection Plan.
- **Icons:** Centralized `Icons.logo` component fetching from Flickr.

## 3. UI/UX Standards
- **Tone:** Friendly, local, and professional.
- **Imagery:** High-contrast images using `next/image` for performance.
- **Color Logic:** Primary Purple for buttons/branding; Accent Green for success/trust indicators.

## 4. Workflow for Updates
- **Pricing Changes:** Update `src/lib/data.ts`.
- **Image Changes:** Update `src/lib/placeholder-images.json`.
- **Text Changes:** Directly edit page components or `src/lib/data.ts`.
