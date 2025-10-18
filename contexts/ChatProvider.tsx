"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type ChatState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  pagePath: string;
  reducedMotion: boolean;
  setReducedMotion: (v: boolean) => void;
  theme: "light" | "dark" | "system";
  setTheme: (t: "light" | "dark" | "system") => void;
};

const ChatCtx = createContext<ChatState | null>(null);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [reducedMotion, setReducedMotion] = useState(false);
  const pagePath = usePathname() || "/";

  const value = useMemo<ChatState>(
    () => ({
      isOpen,
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen(v => !v),
      pagePath,
      reducedMotion,
      setReducedMotion,
      theme,
      setTheme,
    }),
    [isOpen, pagePath, reducedMotion, theme]
  );

  return <ChatCtx.Provider value={value}>{children}</ChatCtx.Provider>;
}

export function useChat() {
  const ctx = useContext(ChatCtx);
  if (!ctx) throw new Error("useChat must be used within <ChatProvider>");
  return ctx;
}

