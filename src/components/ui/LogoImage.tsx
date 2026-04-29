import { useEffect, useRef, useState } from "react";

interface LogoImageProps {
  src: string;
  alt: string;
  className?: string;
  tolerance?: number;
}

export default function LogoImage({ src, alt, className, tolerance = 30 }: LogoImageProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        if (r >= 255 - tolerance && g >= 255 - tolerance && b >= 255 - tolerance) {
          data[i + 3] = 0;
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setDataUrl(canvas.toDataURL("image/png"));
    };
    img.src = src;
  }, [src, tolerance]);

  return (
    <img
      src={dataUrl || src}
      alt={alt}
      className={className}
      style={!dataUrl ? { mixBlendMode: "screen" } : undefined}
    />
  );
}
