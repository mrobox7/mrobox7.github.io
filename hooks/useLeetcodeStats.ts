"use client";

import { useLiveStats } from "./useLiveStats";

export interface LeetcodeStats {
  solved: {
    total: number;
    easy: number;
    medium: number;
    hard: number;
  };

  totalQuestions: {
    all: number;
    easy: number;
    medium: number;
    hard: number;
  };

  ranking: number;
  rating: number | null;
}

export function useLeetcodeStats() {
  return useLiveStats<LeetcodeStats>(
    "/api/leetcode"
  );
}