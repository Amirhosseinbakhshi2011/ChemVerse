import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChemVerse | by امیرحسین بخشی",
  description: "جهان سه‌بعدی مولکول‌ها — ساخته شده توسط امیرحسین بخشی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}