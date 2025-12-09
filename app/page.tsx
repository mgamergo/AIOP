import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-full flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-4xl w-full space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
            Welcome back, {user?.firstName || "User"}!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            You are now authenticated and can access the protected dashboard.
            This application is built with Next.js, Clerk, and Tailwind CSS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "Secure Authentication", description: "Powered by Clerk for robust user management." },
            { title: "Modern UI", description: "Styled with Tailwind CSS and a beautiful Teal theme." },
            { title: "Dark Mode", description: "Fully supported dark and light mode toggle." },
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
