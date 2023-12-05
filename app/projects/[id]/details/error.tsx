"use client";

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center mt-8">No records on this page</h2>
    </main>
  );
}
