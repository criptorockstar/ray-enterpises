"use client";
import { Provider } from "react-redux";
import store from "@states/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Provider store={store}>{children}</Provider>;
}
