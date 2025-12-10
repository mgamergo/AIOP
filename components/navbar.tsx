"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { Moon, Sun, Laptop } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-teal-600 dark:text-teal-400">
              AIO<span className="text-white">P</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <UserButton 
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: {
                  avatarBox: "h-10 w-10"
                }
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
