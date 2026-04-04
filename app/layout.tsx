import type { Metadata } from "next";
import { centuryGothicPro } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "High Design | Arquitetura e Urbanismo",
  description:
    "Projetando ambientes que unem técnica, beleza e autenticidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={centuryGothicPro.variable}>
      <body>{children}</body>
    </html>
  );
}
