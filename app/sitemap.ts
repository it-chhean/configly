import { MetadataRoute } from "next";

const siteName = "https://configly.onrender.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${siteName}`,
            lastModified: new Date(),
        },
    ];
}
