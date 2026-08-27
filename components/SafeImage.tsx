"use client";

import { useState } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  placeholderLabel: string;
  className?: string;
};

export default function SafeImage({
  src,
  alt,
  placeholderLabel,
  className = "",
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`image-placeholder ${className}`.trim()} role="img" aria-label={alt}>
        <span>{placeholderLabel}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}
