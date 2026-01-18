import { Metadata } from "next";

import { PageMetadataOptions } from "@/types/utils-interfaces";

import { SITE } from "@/configurations/site";
import { defaultMetadata } from "@/configurations/metadata";

import { AbstractSiteUrl } from "./abstract-site-url";

export function GetPageMetadata({
    title,
    description,
    canonical,
    ogImage,
    twitterImage,
    noIndex = false,
}: PageMetadataOptions = {}): Metadata {
    const finalTitle = title ?? SITE.brand.title;
    const finalDescription = description ?? SITE.brand.description;

    return {
        ...defaultMetadata,

        title: title
            ? {
                absolute: finalTitle,
            }
            : defaultMetadata.title,

        description: finalDescription,

        alternates: canonical
            ? {
                canonical: AbstractSiteUrl(canonical),
            }
            : defaultMetadata.alternates,

        openGraph: {
            ...defaultMetadata.openGraph,
            title: finalTitle,
            description: finalDescription,
            url: canonical ? AbstractSiteUrl(canonical) : SITE.url,
            images: [
                {
                    url: AbstractSiteUrl(ogImage || SITE.assets.ogImage),
                    width: 1200,
                    height: 630,
                    alt: finalTitle,
                },
            ],
        },

        twitter: {
            ...defaultMetadata.twitter,
            title: finalTitle,
            description: finalDescription,
            images: [AbstractSiteUrl(twitterImage || SITE.assets.twitterImage)],
        },

        robots: noIndex
            ? {
                index: false,
                follow: false,
            }
            : defaultMetadata.robots,
    };
}