import React from "react";

const NextImage = ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={typeof src === "object" ? "" : src} alt={alt} {...props} />
);

export default NextImage;
