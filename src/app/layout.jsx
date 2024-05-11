"use client";
import FooterComponent from "@components/footer/footer";
import NavbarComponent from "@components/navbar/navbar";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@theme/theme";
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body>
          <NavbarComponent />
          {children}
          <FooterComponent />
        </body>
      </html>
    </ThemeProvider>
  );
}
