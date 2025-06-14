"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-800 text-white p-2 rounded-2xl"
      >
        Go to Home
      </button>
    </div>
  );
}
