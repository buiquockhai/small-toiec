import "vite/client";
import "react";

declare module "react" {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: "auto" | "high" | "low";
  }
}
