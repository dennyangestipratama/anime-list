import { ImageCoverType } from "@/types";

export function ImageCover({ src, title }: ImageCoverType) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        style={{ objectFit: "cover", borderRadius: "8px" }}
        src={src}
        alt={title}
      />
    </>
  );
}
