import type { ImgHTMLAttributes } from "react";
import logoMark from "@/assets/logo-alto-svg.svg";

export function Spiral({
  className,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={logoMark}
      alt=""
      aria-hidden="true"
      className={className}
      {...rest}
    />
  );
}