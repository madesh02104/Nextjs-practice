"use client";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-500">Error loading users</h1>
      <p className="text-gray-500">{error.message}</p>
    </div>
  );
}
