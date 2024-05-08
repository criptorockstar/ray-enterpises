"use client";
import FooterComponent from "@/components/Footer/Footer";
import NavbarComponent from "@/components/NavBar/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../common/theme/theme";
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
