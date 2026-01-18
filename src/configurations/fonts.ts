import { Inter, IBM_Plex_Sans, IBM_Plex_Sans_Arabic, Orbitron } from "next/font/google";

export const orbitron = Orbitron({
    subsets: ["latin"],
    variable: "--font-orbitron",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal"],
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

export const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    variable: "--font-ibm-plex-sans",
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
});

export const ibmPlexArabic = IBM_Plex_Sans_Arabic({
    subsets: ["latin"],
    variable: "--font-ibm-plex-sans-arabic",
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    style: ["normal"],
});

export const FontVariables = `${orbitron.variable} ${inter.variable} ${ibmPlexSans.variable} ${ibmPlexArabic.variable}`;
