import { FontVariables } from "@/configurations/fonts";
import { defaultMetadata } from "@/configurations/metadata";
import { viewport } from "@/configurations/viewport";
import { SITE } from "@/configurations/site";
import { AppScripts } from "@/configurations/scripts";

import "@/styles/globals.css";
import "@/styles/includes.css";

export const metadata = defaultMetadata;
export { viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE.i18n.lang.en} dir={SITE.i18n.dir.en}>
      <body className={`${FontVariables} antialiased`}>
        <AppScripts />
        {children}
      </body>
    </html>
  );
}
