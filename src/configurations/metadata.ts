import type { Metadata } from "next";

import { SITE } from "./site";
import { AbstractSiteUrl } from "@/utils/abstract-site-url";

export const defaultMetadata: Metadata = {
    metadataBase: new URL(SITE.url),

    title: {
        default: SITE.brand.title,
        template: `%s | ${SITE.brand.name}`,
    },

    description: SITE.brand.description,

    applicationName: SITE.brand.applicationName,
    generator: "Next.js",
    creator: SITE.brand.name,
    publisher: SITE.brand.name,

    keywords: [...SITE.seo.keywords],

    alternates: {
        canonical: SITE.url,
    },

    manifest: SITE.pwa.manifestPath,

    icons: {
        icon: [
            { url: "/favicons/favicon.ico", type: "image/x-icon" },
            { url: "/favicons/logo-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/favicons/logo-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/favicons/logo-512x512.png", sizes: "512x512", type: "image/png" },
            { url: "/favicons/logo.svg", type: "image/svg+xml" },
        ],
        apple: [
            {
                url: SITE.assets.appleTouchIcon,
                sizes: "180x180",
            },
        ],
    },

    openGraph: {
        type: "website",
        siteName: SITE.brand.name,
        title: SITE.brand.title,
        description: SITE.brand.description,
        url: SITE.url,
        locale: SITE.i18n.ogLocale.en,
        images: [
            {
                url: AbstractSiteUrl(SITE.assets.ogImage),
                width: 1200,
                height: 630,
                alt: SITE.brand.name,
            },
        ],
    },

    twitter: {
        card: SITE.twitter.card,
        site: SITE.twitter.handle,
        creator: SITE.twitter.handle,
        title: SITE.brand.title,
        description: SITE.brand.description,
        images: [AbstractSiteUrl(SITE.assets.twitterImage)],
    },

    robots: SITE.seo.robots,

    verification: {
        google: SITE.seo.verification.google || undefined,
        other: SITE.seo.verification.bing
            ? { bing: SITE.seo.verification.bing }
            : undefined,
    },
};
