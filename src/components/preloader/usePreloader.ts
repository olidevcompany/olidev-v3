"use client";

import { useEffect, useState } from "react";

export function usePreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4600);

    return () => clearTimeout(timer);
  }, []);

  return loading;
}