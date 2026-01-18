import { Toaster } from "react-hot-toast";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

import ScrollProvider from "@/providers/scroll-provider";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <ScrollProvider>
        {children}
        <Toaster position="bottom-right" />
      </ScrollProvider>
      <Footer />
    </>
  );
}
