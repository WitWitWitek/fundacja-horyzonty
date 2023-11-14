import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "./components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Fundacja Horyzonty",
  description:
    "Vivere est cogitare jest organizacją, której główną misją jest animacja życia społecznego. Jesteśmy przekonani, że wspólna wymiana idei, wiedzy oraz edukacja stanowią klucz do rozwoju społeczeństwa i wzmacniania kapitału społecznego. Naszą działalność koncentrujemy na organizacji platform dyskusyjnych, gdzie ludzie mogą spotkać się, spierać, inspirować i rozwijać. Nasze wydarzenia łączą środowiska mediów, biznesu i decydentów, dając przestrzeń do tworzenia innowacyjnych rozwiązań i inspirujących dyskusji.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
