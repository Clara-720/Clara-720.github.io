import type { ImgHTMLAttributes } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
  fill?: boolean;
};

export default function Image({ priority: _priority, fill: _fill, src, ...props }: ImageProps) {
  const source = typeof src === "string" && src.startsWith("/")
    ? `${import.meta.env.BASE_URL}${src.slice(1)}`
    : src;

  return <img src={source} {...props} />;
}
