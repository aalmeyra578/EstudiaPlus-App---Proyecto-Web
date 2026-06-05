import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Image assets used across the app (centralized so we can swap the improved logo variants easily) */
export const HERO_IMAGE_PATH = "/images/inicio-hero.png"
export const BRAND_LOGO_PATH = "/images/estudiaplus-logo.png"
