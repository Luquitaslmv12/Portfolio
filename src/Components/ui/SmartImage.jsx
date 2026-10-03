import { useEffect, useRef, useState } from "react";
import { ImageOff } from "lucide-react";

/**
 * Image with a shimmer placeholder and a graceful failure state.
 *
 * Cached images can finish decoding before React attaches `onLoad`, so the
 * `complete` check on mount is what prevents a permanently invisible image.
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  ...rest
}) {
  const [status, setStatus] = useState("loading");
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setStatus("loaded");
  }, [src]);

  return (
    <span className={`relative block overflow-hidden bg-ink-800 ${className}`}>
      {status === "loading" && (
        <span
          aria-hidden="true"
          className="animate-shimmer absolute inset-0"
        />
      )}

      {status === "error" ? (
        <span
          role="img"
          aria-label={alt}
          className="grid h-full w-full place-items-center text-ink-500"
        >
          <ImageOff size={24} />
        </span>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          data-loaded={status === "loaded"}
          className={`media h-full w-full object-cover ${imgClassName}`}
          {...rest}
        />
      )}
    </span>
  );
}