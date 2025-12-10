import { redirect } from "next/navigation";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { HOME_LINKS } from "@/utils/home-links";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-full p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4 text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
            AIOP
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            All In One Personal — A collection of my personal tools and projects.
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_LINKS.map((link, index) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="group flex flex-col p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-bold text-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <div className="text-gray-400 group-hover:text-teal-500 transition-colors transform group-hover:translate-x-1">
                    →
                  </div>
                </div>
                <span className="text-lg font-medium text-gray-700 dark:text-gray-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
