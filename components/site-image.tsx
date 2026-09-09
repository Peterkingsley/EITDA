import type { ImgHTMLAttributes } from 'react';
import manifest from '@/lib/image-manifest.json';

type ImageVariant = { src: string; srcSet: string; width: number; height: number };
const images: Record<string, ImageVariant> = manifest;

type SiteImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
};

export function SiteImage({
  src, alt, fill = false, priority = false, sizes = '100vw',
  loading, decoding = 'async', fetchPriority, width, height, style, ...props
}: SiteImageProps) {
  const image = images[src];
  return (
    // oxlint-disable-next-line nextjs/no-img-element -- Static WebP variants are optimized at build time and need no runtime image service.
    <img
      {...props}
      src={image?.src ?? src}
      srcSet={image?.srcSet}
      sizes={image ? sizes : undefined}
      alt={alt}
      width={width ?? image?.width}
      height={height ?? image?.height}
      loading={priority ? 'eager' : loading ?? 'lazy'}
      fetchPriority={priority ? 'high' : fetchPriority}
      decoding={decoding}
      style={fill ? { position: 'absolute', inset: 0, width: '100%', height: '100%', ...style } : style}
    />
  );
}
