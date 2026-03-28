import OpenGraphImage, {
  alt as openGraphAlt,
  contentType as openGraphContentType,
  size as openGraphSize,
} from "@/app/opengraph-image";

export const runtime = "edge";
export const alt = openGraphAlt;
export const contentType = openGraphContentType;
export const size = openGraphSize;

export default function TwitterImage() {
  return OpenGraphImage();
}
