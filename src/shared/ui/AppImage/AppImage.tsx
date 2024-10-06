import type { ImgHTMLAttributes, ReactElement } from 'react';
import { memo, useLayoutEffect, useState } from "react";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

const API_URL = import.meta.env.VITE_API_URL;

export const AppImage = memo((props: AppImageProps) => {
  const {className, src, alt = 'image', errorFallback, fallback, ...otherProps} = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? "";
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return <img className={className} src={API_URL+src} alt={alt} {...otherProps} />;
});
