export const metadata = {
  title: "Somya Decodes",
  description: "Next.js deployment app on Vercel"
}

export default function RootLayout({children}) {
  return(
    <html lang="en" className="hydrated">
      <body>
        {children}
      </body>
    </html>
  )
}