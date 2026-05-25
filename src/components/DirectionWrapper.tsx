"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

export default function DirectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isRTL, language } = useLanguage();

  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", language);
  }, [isRTL, language]);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      style={{ fontFamily: isRTL ? "var(--font-cairo), sans-serif" : undefined }}
    >
      {children}
    </div>
  );
}