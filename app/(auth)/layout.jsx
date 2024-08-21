import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
  import '../globals.css'
  export default function RootLayout({
    children,
  }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body>
            <SignedOut>
         
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {children}
          </body>
        </html>
      </ClerkProvider>
    )
  }