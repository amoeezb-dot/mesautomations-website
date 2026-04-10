"use client";

import { LocaleProvider } from "@/context/locale-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
