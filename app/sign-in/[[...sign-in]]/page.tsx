import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function Page() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignIn
        appearance={{
          baseTheme: dark,
          variables: {
            colorPrimary: '#0d9488',
          },
          elements: {
            card: "shadow-xl border border-gray-200 dark:border-gray-800",
            headerTitle: "text-teal-600 dark:text-teal-400",
            footerActionLink: "text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
          }
        }}
      />
    </div>
  )
}