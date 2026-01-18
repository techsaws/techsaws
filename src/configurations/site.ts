const FRONTEND_URL =
    (process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.techsaws.com").replace(
        /\/$/,
        ""
    );

export const LOCALES = ["en", "es", "de", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const SITE = {
    /* ================= CORE ================= */
    brand: {
        name: "TechSaws",
        tagline: "We Build. We Brand. We Break Boundaries.",
        title:
            "TechSaws — Premium Software Engineering, AI Automation & Cybersecurity-First Delivery",
        description:
            "TechSaws builds premium web & mobile products, SaaS platforms, AI automations, and cybersecurity-first systems—designed for speed, scale, and brand-level UX.",
        applicationName: "TechSaws",
    },

    /* ================= URLS ================= */
    url: FRONTEND_URL,
    domain: "techsaws.com",

    /* ================= I18N ================= */
    i18n: {
        defaultLocale: "en" as Locale,
        locales: LOCALES,
        useLocaleSegment: true,
        lang: {
            en: "en",
            es: "es",
            de: "de",
            ar: "ar",
        } as const,

        dir: {
            en: "ltr",
            es: "ltr",
            de: "ltr",
            ar: "rtl",
        } as const,

        ogLocale: {
            en: "en_US",
            es: "es_ES",
            de: "de_DE",
            ar: "ar_AR",
        } as const,
    },

    /* ================= THEME / PWA ================= */
    theme: {
        themeColor: "#1a4cc9",
        backgroundColor: "#0a0a0b",
    },

    pwa: {
        manifestPath: "/manifest.json",
        name: "TechSaws — We Build. We Brand. We Break Boundaries.",
        shortName: "TechSaws",
        startUrl: "/",
        scope: "/",
        display: "standalone",
    },

    /* ================= ASSETS ================= */
    assets: {
        faviconIco: "/favicons/favicon.ico",
        logoSvg: "/favicons/logo.svg",
        appleTouchIcon: "/favicons/apple-icon.png",

        ogImage: "/social/og-default.jpg",
        twitterImage: "/social/twitter-preview.jpg",
    },

    /* ================= SOCIAL ================= */
    social: {
        github: process.env.NEXT_PUBLIC_SOCIAL_GITHUB || "https://github.com/techsaws",
        twitter:
            process.env.NEXT_PUBLIC_SOCIAL_TWITTER || "https://twitter.com/TechSaws",
        linkedin:
            process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ||
            "https://www.linkedin.com/company/techsaws",
        facebook:
            process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "https://www.facebook.com/techsaws",
        instagram:
            process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ||
            "https://www.instagram.com/techsaws",
        trustpilot:
            process.env.NEXT_PUBLIC_SOCIAL_TRUSTPILOT ||
            "https://www.trustpilot.com/review/techsaws.com",
    },

    twitter: {
        handle: "@TechSaws",
        card: "summary_large_image" as const,
    },

    /* ================= SEO PRIMITIVES ================= */
    seo: {
        keywords: [
            "TechSaws",
            "software development agency",
            "custom software development",
            "SaaS development",
            "Next.js development",
            "full stack development",
            "mobile app development",
            "AI automation development",
            "cybersecurity-first software",
            "UI UX design agency",
            "DevOps consulting",
            "product engineering",
        ],

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },

        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
            bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
        },
    },
} as const;