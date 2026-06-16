import type { Metadata } from "next";
import StyledComponentsRegistry from "../lib/registry";
import { BodyWrapper } from "../styling/shared_styles";
import { raleway } from "./font";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vizentefreeman.info"),
  openGraph: {
    title: "Vizente Freeman",
    description: "Portfolio of digital work and accomplishments",
    images: [
      {
        url: "/images/leologo.svg", // Public folder path or absolute URL
        width: 100,
        height: 100,
        alt: "Leo the Lion",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>
      <BodyWrapper>
        <StyledComponentsRegistry> {children} </StyledComponentsRegistry>
      </BodyWrapper>
    </html>
  );
}
