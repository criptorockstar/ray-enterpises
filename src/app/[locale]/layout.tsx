import NavbarComponent from "../../components/navbar/navbar";
import FooterComponent from "@components/footer/footer";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../../config/theme";
import "./globals.scss";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang={locale}>
        <body>
          <NavbarComponent />
          {children}
          <FooterComponent />
        </body>
      </html>
    </ThemeProvider>
  );
}
