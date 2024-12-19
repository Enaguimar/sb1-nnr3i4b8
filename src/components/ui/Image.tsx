import { ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
}

export default function Image({ fill, className = '', src, alt, ...props }: ImageProps) {
  return (
    <img
      {...props}
      src={src}
      alt={alt}
      className={cn(
        'transition-opacity duration-300',
        fill && 'absolute inset-0 w-full h-full object-cover',
        className
      )}
      loading="lazy"
    />
  );
}