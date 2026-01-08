
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function convertImageToWebP(file: File): Promise<Blob> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) return reject(new Error('Canvas context not available'));
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
                if (blob) resolve(blob);
                else reject(new Error('Conversion failed'));
            }, 'image/webp', 0.85); // 0.85 quality
        };
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
    });
}

export function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD') // Split accents
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/\s+/g, '-') // Spaces to hyphens
        .replace(/[^\w\-]+/g, '') // Remove non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple hyphens
        .replace(/^-+/, '') // Trim start
        .replace(/-+$/, ''); // Trim end
}

export function generateSeoFilename(title: string): string {
    const slug = slugify(title);
    // Add timestamp to avoid collisions/caching issues
    return `${slug}-${Date.now()}.webp`;
}
