"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const IntroGateContext = createContext({
  introComplete: true,
  markIntroComplete: () => {},
});

export function IntroGateProvider({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [introComplete, setIntroComplete] = useState(!isHome);

  useEffect(() => {
    setIntroComplete(!isHome);
  }, [isHome]);

  const markIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  const value = useMemo(
    () => ({ introComplete, markIntroComplete }),
    [introComplete, markIntroComplete],
  );

  return <IntroGateContext.Provider value={value}>{children}</IntroGateContext.Provider>;
}

export function useIntroGate() {
  return useContext(IntroGateContext);
}
