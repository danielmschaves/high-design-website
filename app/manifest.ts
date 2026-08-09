import type { MetadataRoute } from "next";
import { ORG_NAME, ORG_SHORT_NAME, ORG_DESCRIPTION } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: ORG_NAME,
    short_name: ORG_SHORT_NAME,
    description: ORG_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f2ee",
    theme_color: "#3d3035",
    lang: "pt-BR",
    categories: ["business", "lifestyle"],
    icons: [
      {
        src: "/icon.png",
        sizes: "1241x974",
        type: "image/png",
      },
    ],
  };
}
