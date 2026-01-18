import { SITE } from "@/configurations/site";

export const AbstractSiteUrl = (path: string) => {
    if (!path) return SITE.url;
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    return `${SITE.url}${path.startsWith("/") ? "" : "/"}${path}`;
};