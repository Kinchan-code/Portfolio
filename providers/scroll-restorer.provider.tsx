"use client";

import { useScrollRestorer } from "next-scroll-restorer";

export function ScrollRestorerProvider() {
  useScrollRestorer();

  return null;
}
